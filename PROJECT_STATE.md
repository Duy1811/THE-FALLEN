# PROJECT_STATE — Trạng thái dự án THE FALLEN

> Cập nhật: 2026-11-21 — M1 Project Foundation **Partial** (Giai đoạn A từ PR #1 đã merge; ứng dụng khung, test sandbox và CI PR #2 thành công; chưa nghiệm thu iPhone thật).
> Tài liệu này là nguồn sự thật về trạng thái dự án. Mọi trạng thái tuân thủ [README.md](README.md#quy-tắc-trạng-thái). Không đánh dấu Verified chỉ vì tài liệu hoặc workflow đã được viết.

## Tình trạng dự án

- **Giai đoạn hiện tại:** M1 — Project Foundation; **Partial**. CI đã thành công trên PR #2, nhưng chưa có xác minh Safari/WebGL 2 trên iPhone thật.
- **Mã nguồn nền tảng:** Implemented — React + TypeScript + Vite, trang chẩn đoán Three.js/WebGL 2, trạng thái WebGPU tùy chọn, Vitest, Playwright, GitHub Actions CI; xem [README.md](README.md#chạy-ứng-dụng-m1).
- **Mã nguồn game:** Not Started — chưa có gameplay, nhân vật, thế giới, physics, save.
- **Tài nguyên game:** Not Started — chưa có model, texture, animation, audio.
- **Backend / đăng nhập:** Not Started.
- **Kiểm thử:** Verified **cục bộ** cho typecheck, build, 4 Vitest và 5 Playwright trong Chromium mobile emulation; Verified **CI PR #2** cho các bước typecheck/build/Vitest/Playwright Chromium + WebKit ([job](https://github.com/Duy1811/THE-FALLEN/actions/runs/44884262901/job/136786012091)). **Blocked** với Safari/WebGL 2 trên iPhone 15 Pro Max thật và WebKit cục bộ. Xem [TEST_REPORT.md](TEST_REPORT.md) và [log](evidence/M1_LOCAL_VERIFICATION.md).
- **Thiết bị kiểm thử:** iPhone 15 Pro Max là mục tiêu chính nhưng không có thiết bị thật trong sandbox. PC của người dùng chưa sẵn sàng; headless Chromium trong sandbox không thay thế kiểm thử PC thật.

## Các quyết định đã xác nhận

| ID | Quyết định | Trạng thái |
|---|---|---|
| D-001 | Thể loại: hành động 3D góc nhìn thứ ba, khám phá thế giới, nhiệm vụ/cốt truyện, single-player; nền tảng PC Browser + Mobile Browser (website) | Đã chốt |
| D-002 | Stack: React, TypeScript, Vite, Three.js, Rapier, GLB/glTF, IndexedDB, API + PostgreSQL, Vitest, Playwright, GitHub | Đã chốt |
| D-003 | WebGL 2 bắt buộc; WebGPU tùy chọn | Đã chốt |
| D-004 | Mobile-first; đồ họa Stylized Realistic / Semi-realistic low-poly; tương thích PC cấu hình thấp | Đã chốt |
| D-005 | Zero Paid AI Pipeline (không mua API key AI, ưu tiên mã nguồn mở và tài nguyên miễn phí có kiểm tra license) | Đã chốt |
| D-006 | Quy mô mục tiêu: 18–24 năng lực, ~30 kỹ năng, 10–12 nhân vật chính/cốt truyện, 12–20 người mang năng lực có story, 20–30 NPC, 5–6 boss, 15–20 side quests, 6 khu vực, 5 chương, 4 ending | Đã chốt |
| D-007 | THE PRICE gồm 5 biểu hiện và phải ảnh hưởng gameplay, hội thoại, quan hệ, ký ức, ending — không chỉ là thanh phạt | Đã chốt |
| D-008 | Quy trình Git: `main` ổn định, `develop`, `feature/*`, `fix/*`, PR vào `main`, không force push | Đã chốt |
| D-009 | Lưu trữ: IndexedDB cho local save; backend API + PostgreSQL cho account/cloud save | Đã chốt |
| D-010 | M6 (Relationships & Adult Content) tuân thủ ranh giới nội dung trong [GDD.md](GDD.md#quan-hệ-và-nội-dung-người-lớn-m6) | Đã chốt |
| D-011 | Sáu hệ năng lực và năm phe phái (xem DECISION_LOG) | Đã chốt |
| D-012 | Sáu khu vực chính: New Eden, Iron District, Silver Coast, Old Quarter, Blacksite 09, Vanguard Tower (chỉ chốt vai trò dự kiến) | Đã chốt |
| D-013 | Năm loại quan hệ: Friendship, Attraction, Romance, Trust, Conflict | Đã chốt |
| D-014 | Seraphine – The Healer: Absolute Restoration, cứu chữa người nghèo; lựa chọn bảo vệ/giúp đỡ/xây dựng quan hệ/hấp thụ; hấp thụ ảnh hưởng bệnh nhân, phải có phương án thay thế | Đã chốt |
| D-015 | Giới hạn nội dung 18+ (đồng thuận, người trưởng thành, không khiêu dâm trực diện, cảnh báo nội dung, tùy chọn giảm máu me/nhạy cảm) | Đã chốt |

Chi tiết và quy trình thay đổi quyết định: [DECISION_LOG.md](DECISION_LOG.md).

## Công việc hoàn thành

| Hạng mục | Trạng thái | Bằng chứng |
|---|---|---|
| Hệ thống tài liệu Giai đoạn A (14 tệp Markdown + `.gitignore`) | Implemented | Các tệp trong repo; đã kiểm tra liên kết nội bộ và tính nhất quán (xem mục Kiểm tra bên dưới) |
| README, PROJECT_STATE, GDD, TECHNICAL_ARCHITECTURE, ROADMAP, DECISION_LOG, NEXT_TASK, CHANGELOG, BUG_TRACKER, TEST_REPORT, ASSET_MANIFEST, FEATURE_MATRIX, IMPLEMENTATION_MATRIX, HANDOFF_REPORT | Implemented | Tệp tồn tại trong repo, nội dung đã viết xong |
| `.gitignore` cho React/Node/TypeScript | Implemented | Tệp `.gitignore` trong repo |
| Bổ sung tài liệu trong PR #1: sáu khu vực chính, năm loại quan hệ, hồ sơ Seraphine – The Healer, giới hạn nội dung 18+ (GDD, DECISION_LOG D-012 đến D-015, ROADMAP, FEATURE_MATRIX, IMPLEMENTATION_MATRIX) | Implemented | Các tệp đã cập nhật trong PR #1; đã kiểm tra lại liên kết và tính nhất quán |
| Ứng dụng khung M1 và diagnostic WebGL 2 / WebGPU tùy chọn | Implemented | `src/`, `index.html`, `package.json`, `vite.config.ts`; build và thử trình duyệt cục bộ trong [TEST_REPORT.md](TEST_REPORT.md) |
| Typecheck, build, Vitest, Playwright Chromium mobile (430/375/320 px), WebGL 2 trong sandbox | Verified (chỉ sandbox) | [Log lệnh/kết quả](evidence/M1_LOCAL_VERIFICATION.md), [TEST_REPORT.md](TEST_REPORT.md) |
| Workflow GitHub Actions cho PR vào `main` | Verified trên PR #2 | `.github/workflows/ci.yml`; [job build-and-test success](https://github.com/Duy1811/THE-FALLEN/actions/runs/44884262901/job/136786012091) (commit `262c7d8`) |

> Các hạng mục tài liệu Giai đoạn A vẫn là **Implemented** ở mức đã viết. Chỉ kiểm thử thực sự đã chạy trên sandbox hoặc CI được ghi **Verified** theo đúng môi trường đó; không suy ra hỗ trợ trên iPhone thật.

## Công việc chưa hoàn thành

- Xác nhận `npm run dev`, trang chủ và **WebGL 2 trên Safari iPhone 15 Pro Max thật** — Blocked cho đến khi người dùng mở preview trên thiết bị và cung cấp bằng chứng. Kiểm thử màn hình giả lập **không** đáp ứng điều kiện này.
- CI Vitest + Playwright Chromium/WebKit đã thành công trên [PR #2](https://github.com/Duy1811/THE-FALLEN/pull/2). PR vẫn mở; **không tự merge/tag M1** khi kiểm thử iPhone thật chưa đầy đủ.
- Toàn bộ mã nguồn **game**, tài nguyên game, physics, backend — Not Started (đúng giới hạn M1).
- Định nghĩa chi tiết nhân vật còn lại (ngoài Seraphine đã chốt), bản đồ khu vực, kịch bản hội thoại — Not Started (GDD mới ở mức thiết kế khung; sáu khu vực mới chốt vai trò dự kiến).

## Rủi ro và blocker

| # | Rủi ro / blocker | Mức độ | Trạng thái |
|---|---|---|---|
| R-01 | Hiệu năng mobile: đồ họa 3D + physics trên thiết bị di động, tương thích PC cấu hình thấp | Cao | Not Started — cần ngân sách hiệu năng trong M2–M3 |
| R-02 | Quy mô lớn (18–24 năng lực, 5 chương, 6 khu vực) so với nguồn lực nhỏ | Cao | Not Started — cần kiểm soát phạm vi theo [GDD.md](GDD.md#quy-mô-và-giới-hạn-sản-xuất) |
| R-03 | PC chưa sẵn sàng để kiểm thử → kiểm thử PC hiện bị chặn | Trung bình | Blocked — chờ người dùng thông báo PC sẵn sàng |
| R-04 | Chi phí hạ tầng (hosting, domain, database, storage) có thể phát sinh ở M7; dịch vụ miễn phí có giới hạn | Trung bình | Not Started — phải ghi rõ khi triển khai M7 |
| R-05 | Ranh giới nội dung M6 cần thiết kế cẩn thận (đồng thuận, cài đặt nội dung, phân loại độ tuổi) | Trung bình | Not Started — khung đã có trong GDD, chi tiết ở M6 |
| R-06 | WebGPU chỉ tùy chọn → không được phụ thuộc WebGPU cho tính năng bắt buộc | Thấp | Implemented — D-003; mã M1 chỉ phát hiện API, không dùng để render |
| R-07 | Chưa kiểm thử Safari/WebGL 2 trên iPhone 15 Pro Max thật hoặc truy cập preview từ thiết bị | Cao | Blocked — cần người dùng chạy checklist trên iPhone và ghi bằng chứng |
| R-08 | Gói Three.js diagnostic 526 kB minified (132 kB gzip) vượt ngưỡng cảnh báo 500 kB của Vite | Trung bình | Partial — đã tách tải động khỏi UI (UI 73 kB gzip); cần tiếp tục theo dõi hiệu năng mobile M2 |
| R-09 | Sandbox hạn chế tải WebKit từ Playwright CDN | Trung bình | Blocked cục bộ — CI GitHub Actions đã cài WebKit và chạy E2E thành công; WebKit Linux vẫn không phải iPhone Safari |

## Trạng thái từng milestone

| Milestone | Nội dung | Trạng thái | Ghi chú |
|---|---|---|---|
| M1 | Project Foundation | Partial | App/test sandbox và CI có bằng chứng; iPhone Safari thật chưa kiểm thử |
| M2 | Character & 3D World | Not Started | |
| M3 | Abilities & Combat | Not Started | |
| M4 | NPC & World Systems | Not Started | |
| M5 | Story & Missions | Not Started | |
| M6 | Relationships & Adult Content | Not Started | |
| M7 | Backend & Save System | Not Started | |
| M8 | Polish, QA & Handoff | Not Started | |

Chi tiết: [ROADMAP.md](ROADMAP.md). Công việc tiếp theo: [NEXT_TASK.md](NEXT_TASK.md).

## Kiểm tra đã thực hiện (Giai đoạn A)

- Kiểm tra liên kết nội bộ giữa các tài liệu: đã thực hiện, không có liên kết hỏng (kiểm tra bằng script quét các liên kết Markdown tương đối).
- Kiểm tra mâu thuẫn giữa các tài liệu (stack, tên hệ năng lực, phe phái, ending, quy mô): đã thực hiện, không phát hiện mâu thuẫn.
- Kiểm tra stack và GDD đúng quyết định đã chốt: đã thực hiện, khớp với [DECISION_LOG.md](DECISION_LOG.md).
- Kiểm tra không có nội dung nào tuyên bố đã xây dựng/kiểm thử khi chưa thực hiện: đã thực hiện trong Giai đoạn A; tại thời điểm đó toàn bộ hạng mục code/test đều ghi Not Started.

## Kiểm tra đã thực hiện (M1 — 2026-11-21)

- `npm ci`, `npm run typecheck`, `npm run build`, `npm run test:unit` và Playwright Chromium headless mobile: **Verified cục bộ**, log gốc ở [evidence/M1_LOCAL_VERIFICATION.md](evidence/M1_LOCAL_VERIFICATION.md).
- Vite dev bind `0.0.0.0:5173`, request dùng Host của preview Arena trả HTTP 200; production preview cục bộ cũng trả HTTP 200 và khởi tạo WebGL 2. **Không** chứng minh URL chạy trên iPhone Safari.
- Browser Chromium headless báo WebGL 2 `ready`, không tràn ngang 430/375/320 px; fallback WebGL 2 và WebGPU tùy chọn có kiểm thử giả lập. Chưa có test thật trên iPhone/PC của người dùng.
- CI GitHub Actions: **Verified trên PR #2** (`build-and-test` SUCCESS, commit `262c7d8`); [job URL](https://github.com/Duy1811/THE-FALLEN/actions/runs/44884262901/job/136786012091), các bước và giới hạn ở [TEST_REPORT.md](TEST_REPORT.md).
