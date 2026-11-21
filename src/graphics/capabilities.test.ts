import { describe, expect, it, vi } from 'vitest'
import { getWebGL2Context, hasWebGPUApi } from './capabilities'

describe('WebGL 2 capability check', () => {
  it('requests only a WebGL 2 context, with no WebGL 1 fallback', () => {
    const context = {} as WebGL2RenderingContext
    const getContext = vi.fn().mockReturnValue(context)
    const canvas = { getContext } as unknown as HTMLCanvasElement

    expect(getWebGL2Context(canvas)).toBe(context)
    expect(getContext).toHaveBeenCalledOnce()
    expect(getContext).toHaveBeenCalledWith('webgl2', {
      alpha: true,
      antialias: false,
      powerPreference: 'low-power',
    })
  })

  it('reports an unsupported context without trying another renderer', () => {
    const getContext = vi.fn().mockReturnValue(null)
    expect(getWebGL2Context({ getContext } as unknown as HTMLCanvasElement)).toBeNull()
    expect(getContext).toHaveBeenCalledOnce()
  })

  it('handles a browser throwing during context creation', () => {
    const getContext = vi.fn().mockImplementation(() => { throw new Error('blocked by browser') })
    expect(getWebGL2Context({ getContext } as unknown as HTMLCanvasElement)).toBeNull()
  })
})

describe('optional WebGPU API indicator', () => {
  it('does not require WebGPU', () => {
    expect(hasWebGPUApi({})).toBe(false)
    expect(hasWebGPUApi({ gpu: undefined })).toBe(false)
    expect(hasWebGPUApi({ gpu: null })).toBe(false)
    expect(hasWebGPUApi({ gpu: {} })).toBe(true)
  })
})
