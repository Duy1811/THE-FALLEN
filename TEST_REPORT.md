# TEST_REPORT — Báo cáo kiểm thử THE FALLEN

> Cập nhật 2026-11-21. **M1 Partial**: typecheck/build/test **Verified trong sandbox và CI PR #2**; **không có kết quả Safari/WebGL 2 trên iPhone 15 Pro Max thật**. Bằng chứng: [log cục bộ](evidence/M1_LOCAL_VERIFICATION.md) và [job CI thành công](https://github.com/Duy1811/THE-FALLEN/actions/runs/44884262901/job/136786012091) trên commit `262c7d8`.

## Môi trường kiểm thử

| Môi trường | Trạng thái / giới hạn |
|---|---|
| Arena sandbox | Debian 12 x86_64, Node v22.22.3, npm 10.9.8; Vite bind `0.0.0.0:5173`, preview Host trả HTTP 200. |
| Chromium headless 153 trong sandbox | Browser tạm từ package npm `@sparticuz/chromium` **chỉ dùng để chạy test**, không được thêm vào dependency/lockfile dự án; Playwright dùng Chromium mobile viewport 430 × 932 CSS px (DPR 3), thử thêm 375 và 320 px. Không phải iPhone Safari. |
| Playwright WebKit giả lập iPhone 15 Pro Max | **Blocked cục bộ**: không có browser đã cài, CDN Playwright ngoài mạng được phép. **Verified trong CI:** cài Chromium/WebKit và chạy bước `npm run test:e2e` thành công. WebKit Linux không thay thế iPhone Safari thật. |
| iPhone 15 Pro Max / Safari trên thiết bị thật | **Blocked**: sandbox không có quyền điều khiển iPhone; chưa mở preview, chưa biết phiên bản iOS/Safari, chưa xác nhận WebGL 2 trên thiết bị. Người dùng cần làm checklist trong [README.md](README.md#xác-minh-trên-thiết-bị-thật-để-nghiệm-thu-m1). |
| PC thật của người dùng | **Blocked**: chưa được thông báo sẵn sàng. Smoke test desktop trong sandbox không phải kiểm thử PC thật. |
| GitHub Actions CI | **Verified:** PR #2, job `build-and-test` trên commit `262c7d8` thành công sau 1m04s; từng bước `npm ci`, typecheck, build, Vitest, cài Chromium/WebKit, Playwright đều `success`. [Job URL](https://github.com/Duy1811/THE-FALLEN/actions/runs/44884262901/job/136786012091). |

## Kết quả M1 — 2026-11-21

| Hạng mục | Môi trường / lệnh | Kết quả | Bằng chứng |
|---|---|---|---|
| Cài dependency sạch | Sandbox: `npm ci --no-audit --no-fund` | **Verified:** exit 0, 116 packages | [Log gốc](evidence/M1_LOCAL_VERIFICATION.md) |
| TypeScript strict | Sandbox: `npm run typecheck` | **Verified:** exit 0, không lỗi TypeScript | [Log gốc](evidence/M1_LOCAL_VERIFICATION.md) |
| Build Vite | Sandbox: `npm run build` | **Verified:** exit 0; UI 233.19 kB / 72.86 kB gzip, Three.js diagnostic chunk 526.02 kB / 131.78 kB gzip | [Log gốc](evidence/M1_LOCAL_VERIFICATION.md) |
| Vitest | Sandbox: `npm run test:unit` | **Verified:** 4/4 pass (WebGL 2 chỉ request `webgl2`, null/throw fallback, WebGPU API tùy chọn) | [Log gốc](evidence/M1_LOCAL_VERIFICATION.md) |
| Playwright Chromium mobile | Sandbox: executable Chromium tạm + `npm run test:e2e -- --project=chromium-mobile` | **Verified:** 5/5 pass; trang chính, fallback giả lập, WebGPU không bắt buộc, viewport 430/375/320 px, renderer WebGL 2 thật trên Chromium headless | [Log gốc](evidence/M1_LOCAL_VERIFICATION.md), [tests](tests/e2e/foundation.spec.ts) |
| WebGL 2 trong browser sandbox | Playwright Chromium headless: canvas `getContext('webgl2')` + Three.js WebGLRenderer | **Verified trên Chromium sandbox:** status `ready`; test ngữ cảnh giả lập không hỗ trợ cho status `unsupported`. **Không** phải xác nhận iPhone Safari. | [Log gốc](evidence/M1_LOCAL_VERIFICATION.md) (bài 2 và 5) |
| Trang chính / responsive | Chromium headless viewport 430/375/320 px + quan sát màn hình 430 px và desktop trong sandbox | **Verified trong sandbox:** không tràn ngang, điều hướng tới `#diagnostics`; không có runtime page error trong lượt quan sát. Không thử thiết bị thật. | [Log Playwright](evidence/M1_LOCAL_VERIFICATION.md) (bài 1 và 4) |
| Dev preview Host | Sandbox: Vite `0.0.0.0:5173`, curl với Host của preview Arena | **Verified:** HTTP 200, không có cảnh báo chặn preview lúc khởi động. **Không** xác minh truy cập từ iPhone. | [Log gốc](evidence/M1_LOCAL_VERIFICATION.md) (dòng cuối) |
| GitHub Actions CI trên PR #2 | Job `build-and-test` trên commit `262c7d8`: `npm ci`, `npm run typecheck`, `npm run build`, `npm run test:unit`, `npx playwright install --with-deps chromium webkit`, `npm run test:e2e` | **Verified:** cả 6 bước `success`, job `SUCCESS` (1m04s). CI không chứng minh WebGL 2 trên iPhone thật; bài E2E renderer có thể skip trong browser headless không có context. | [Job 136786012091](https://github.com/Duy1811/THE-FALLEN/actions/runs/44884262901/job/136786012091) / [PR #2](https://github.com/Duy1811/THE-FALLEN/pull/2) |
| Safari/WebGL 2 trên iPhone 15 Pro Max thật | Cần người dùng mở preview và ghi bằng chứng | **Blocked:** chưa kiểm thử; điều kiện nghiệm thu M1 chưa đạt | [NEXT_TASK.md](NEXT_TASK.md) |

## Giới hạn, rủi ro và bước tiếp theo

- Build có **cảnh báo kích thước chunk** Three.js vượt ngưỡng 500 kB minified (526 kB; 132 kB gzip). UI được tách tải động khỏi chunk này; cần theo dõi thời gian tải và hiệu năng trên iPhone thật trước khi tối ưu thêm ở M2. Đây không phải lỗi build.
- Browser headless dùng GPU phần mềm/SwiftShader; kết quả WebGL 2 không chứng minh hiệu năng, GPU hoặc tương thích Safari/iOS thật. WebGPU chỉ kiểm tra sự có mặt của `navigator.gpu`, không gọi adapter và không render.
- Thông báo không hỗ trợ WebGL 2 được kiểm thử bằng mock `HTMLCanvasElement.getContext()`; chưa dùng một thiết bị thiếu WebGL 2 thật.
- CI xác nhận các bước chạy thành công nhưng sandbox không tải được ZIP log chi tiết từ host lưu trữ GitHub Actions (`EOF`); vì vậy không khẳng định số lượng bài/skip cụ thể trên WebKit CI. [Trạng thái từng bước](https://github.com/Duy1811/THE-FALLEN/actions/runs/44884262901/job/136786012091) là bằng chứng CI. Còn **thiếu duy nhất nghiệm thu trên Safari iPhone 15 Pro Max thật** để xét M1; xem [NEXT_TASK.md](NEXT_TASK.md).

## Quy tắc báo cáo

- Chỉ ghi Verified cho phép kiểm tra **đã chạy thực tế** với lệnh, môi trường, kết quả và bằng chứng. CI được xác minh qua trạng thái job/bước GitHub; không coi workflow mới viết là Verified.
- Không suy luận từ mô phỏng viewport/WebKit Linux sang hỗ trợ trên iPhone 15 Pro Max thật.
