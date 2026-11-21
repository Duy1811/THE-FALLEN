/** A WebGL 2 context is required; never silently fall back to WebGL 1. */
export function getWebGL2Context(canvas: HTMLCanvasElement): WebGL2RenderingContext | null {
  try {
    return canvas.getContext('webgl2', {
      alpha: true,
      antialias: false,
      powerPreference: 'low-power',
    })
  } catch {
    // Browsers may throw when graphics acceleration is disabled or blocked.
    return null
  }
}

/** Presence of the API only, not an adapter or rendering support check. */
export function hasWebGPUApi(navigatorLike: object): boolean {
  return 'gpu' in navigatorLike && navigatorLike.gpu != null
}
