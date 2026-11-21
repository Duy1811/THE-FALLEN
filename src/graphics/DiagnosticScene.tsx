import { useEffect, useRef } from 'react'
import {
  EdgesGeometry, Group, IcosahedronGeometry, LineBasicMaterial, LineSegments,
  Mesh, MeshBasicMaterial, OctahedronGeometry, PerspectiveCamera, Scene,
  TorusGeometry, WebGLRenderer,
} from 'three'
import { getWebGL2Context } from './capabilities'

export type WebGLStatus = 'checking' | 'ready' | 'unsupported' | 'error' | 'lost'

type Props = {
  onStatusChange: (status: WebGLStatus) => void
}

/** Tiny procedural rendering check, not a game scene or a WebGPU renderer. */
export function DiagnosticScene({ onStatusChange }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = getWebGL2Context(canvas)
    if (!context) {
      onStatusChange('unsupported')
      return
    }

    let renderer: WebGLRenderer
    try {
      renderer = new WebGLRenderer({
        canvas,
        context,
        alpha: true,
        antialias: false,
        powerPreference: 'low-power',
      })
      // Bound the framebuffer size on high-DPI phones to limit GPU work.
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5))
    } catch (error) {
      console.error('Three.js WebGL 2 initialization failed:', error)
      onStatusChange('error')
      return
    }

    const scene = new Scene()
    const camera = new PerspectiveCamera(40, 1, 0.1, 30)
    camera.position.z = 7

    const model = new Group()
    scene.add(model)

    const shellGeometry = new IcosahedronGeometry(1.5, 1)
    const edgesGeometry = new EdgesGeometry(shellGeometry)
    const shellMaterial = new LineBasicMaterial({ color: 0xc9e6d7, transparent: true, opacity: 0.86 })
    model.add(new LineSegments(edgesGeometry, shellMaterial))

    const coreGeometry = new OctahedronGeometry(0.74, 0)
    const coreMaterial = new MeshBasicMaterial({
      color: 0xb7dc87,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    })
    model.add(new Mesh(coreGeometry, coreMaterial))

    const orbitGeometry = new TorusGeometry(2.1, 0.008, 3, 96)
    const orbitMaterial = new MeshBasicMaterial({ color: 0x5d9b99, transparent: true, opacity: 0.72 })
    const orbitA = new Mesh(orbitGeometry, orbitMaterial)
    orbitA.rotation.x = 0.6
    const orbitB = new Mesh(orbitGeometry, orbitMaterial)
    orbitB.rotation.set(1.2, 0.55, 0)
    model.add(orbitA, orbitB)

    let frameId = 0
    let running = false
    let lost = false
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const resize = () => {
      if (lost) return
      const { width, height } = canvas.getBoundingClientRect()
      if (width < 1 || height < 1) return
      renderer.setSize(Math.round(width), Math.round(height), false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      if (reducedMotion.matches) renderer.render(scene, camera)
    }
    const observer = new ResizeObserver(resize)

    const animate = () => {
      if (!running) return
      model.rotation.y += 0.003
      model.rotation.x += 0.0007
      renderer.render(scene, camera)
      frameId = window.requestAnimationFrame(animate)
    }
    const stop = () => {
      running = false
      window.cancelAnimationFrame(frameId)
    }
    const start = () => {
      if (lost || document.hidden) return
      if (reducedMotion.matches) {
        renderer.render(scene, camera)
      } else if (!running) {
        running = true
        frameId = window.requestAnimationFrame(animate)
      }
    }
    const onVisibilityChange = () => {
      if (document.hidden) stop()
      else start()
    }
    const onMotionChange = () => {
      stop()
      start()
    }
    const onContextLost = (event: Event) => {
      event.preventDefault()
      lost = true
      stop()
      onStatusChange('lost')
    }

    canvas.addEventListener('webglcontextlost', onContextLost)
    document.addEventListener('visibilitychange', onVisibilityChange)
    reducedMotion.addEventListener('change', onMotionChange)
    observer.observe(canvas)
    resize()
    onStatusChange('ready')
    start()

    return () => {
      stop()
      observer.disconnect()
      canvas.removeEventListener('webglcontextlost', onContextLost)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      reducedMotion.removeEventListener('change', onMotionChange)
      edgesGeometry.dispose()
      shellGeometry.dispose()
      shellMaterial.dispose()
      coreGeometry.dispose()
      coreMaterial.dispose()
      orbitGeometry.dispose()
      orbitMaterial.dispose()
      renderer.dispose()
    }
  }, [onStatusChange])

  return <canvas ref={canvasRef} aria-hidden="true" data-testid="diagnostic-canvas" />
}
