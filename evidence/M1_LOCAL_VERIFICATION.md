# M1 — bằng chứng kiểm thử cục bộ (2026-11-21)

> Log gốc các lệnh chạy trong sandbox Debian 12; Chromium headless giả lập viewport mobile, **không phải Safari trên iPhone thật**. Trình duyệt Chromium tạm thời lấy từ npm để kiểm thử, không phải dependency của dự án.

```text
THE FALLEN M1 — local verification (2026-11-21 UTC)
Sandbox: Debian 12 x86_64; Node v22.22.3; npm 10.9.8
Browser: Chromium 153.0.8010.0 (temporary npm-packaged headless Chromium; NOT iPhone Safari)

$ npm ci --no-audit --no-fund

added 116 packages in 3s

$ npm run typecheck

> the-fallen-foundation@0.2.0 typecheck
> tsc --noEmit


$ npm run build

> the-fallen-foundation@0.2.0 build
> tsc --noEmit && vite build

vite v7.3.8 building client environment for production...
transforming...
✓ 34 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                            0.62 kB │ gzip:   0.41 kB
dist/assets/index-DYjwuavz.css            11.95 kB │ gzip:   3.52 kB
dist/assets/index-7v79oE_-.js            233.19 kB │ gzip:  72.86 kB
dist/assets/DiagnosticScene-1SB5hyrS.js  526.02 kB │ gzip: 131.78 kB

(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
✓ built in 2.53s

$ npm run test:unit

> the-fallen-foundation@0.2.0 test:unit
> vitest run


 RUN  v3.2.7 /home/user/THE-FALLEN

 ✓ src/graphics/capabilities.test.ts (4 tests) 9ms

 Test Files  1 passed (1)
      Tests  4 passed (4)
   Start at  08:16:17
   Duration  251ms (transform 46ms, setup 0ms, collect 30ms, tests 9ms, environment 0ms, prepare 64ms)


$ PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/tmp/chromium npm run test:e2e -- --project=chromium-mobile

> the-fallen-foundation@0.2.0 test:e2e
> playwright test --project=chromium-mobile


Running 5 tests using 1 worker

  ✓  1 [chromium-mobile] › tests/e2e/foundation.spec.ts:3:1 › renders the M1 foundation page and reports browser capabilities (757ms)
  ✓  2 [chromium-mobile] › tests/e2e/foundation.spec.ts:13:1 › explains unsupported WebGL 2 without falling back to WebGL 1 (521ms)
  ✓  3 [chromium-mobile] › tests/e2e/foundation.spec.ts:24:1 › does not require WebGPU for the diagnostic page (550ms)
  ✓  4 [chromium-mobile] › tests/e2e/foundation.spec.ts:34:1 › fits iPhone-sized viewports and navigates to diagnostics (662ms)
  ✓  5 [chromium-mobile] › tests/e2e/foundation.spec.ts:51:1 › initializes a real WebGL 2 renderer when the test browser exposes it (604ms)

  5 passed (4.6s)

$ curl (Vite dev via Arena preview Host header)
HTTP 200
```
