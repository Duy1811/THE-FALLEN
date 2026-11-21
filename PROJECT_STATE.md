# PROJECT_STATE — Trạng thái dự án THE FALLEN

> Cập nhật: 2026-11-21 — Giai đoạn A (Thiết lập nền tảng tài liệu).
> Tài liệu này là nguồn sự thật về trạng thái dự án. Mọi trạng thái tuân thủ quy tắc ở [README.md](README.md#quy-tắc-trạng-thái). Không đánh dấu Verified chỉ vì tài liệu đã được viết.

## Tình trạng dự án

- **Giai đoạn hiện tại:** A — Thiết lập hệ thống tài liệu và quản lý dự án trên GitHub.
- **Mã nguồn game:** Not Started — chưa có mã nguồn, chưa tạo React app, chưa có `package.json`, chưa cài dependency.
- **Tài nguyên game:** Not Started — chưa có model, texture, animation, audio.
- **Backend / đăng nhập:** Not Started.
- **Kiểm thử:** Not Started — chưa có test nào được chạy (xem [TEST_REPORT.md](TEST_REPORT.md)).
- **Thiết bị kiểm thử:** iPhone 15 Pro Max (ưu tiên mobile-first). PC chưa sẵn sàng — sẽ dùng khi người dùng thông báo.

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

Chi tiết và quy trình thay đổi quyết định: [DECISION_LOG.md](DECISION_LOG.md).

## Công việc hoàn thành

| Hạng mục | Trạng thái | Bằng chứng |
|---|---|---|
| Hệ thống tài liệu Giai đoạn A (14 tệp Markdown + `.gitignore`) | Implemented | Các tệp trong repo; đã kiểm tra liên kết nội bộ và tính nhất quán (xem mục Kiểm tra bên dưới) |
| README, PROJECT_STATE, GDD, TECHNICAL_ARCHITECTURE, ROADMAP, DECISION_LOG, NEXT_TASK, CHANGELOG, BUG_TRACKER, TEST_REPORT, ASSET_MANIFEST, FEATURE_MATRIX, IMPLEMENTATION_MATRIX, HANDOFF_REPORT | Implemented | Tệp tồn tại trong repo, nội dung đã viết xong |
| `.gitignore` cho React/Node/TypeScript | Implemented | Tệp `.gitignore` trong repo |

> Lưu ý: "Implemented" ở đây có nghĩa tài liệu đã được viết. Chưa có bất kỳ hạng mục nào được đánh dấu **Verified** vì chưa có mã nguồn hay kiểm thử thực tế.

## Công việc chưa hoàn thành

- Scaffolding M1: React app, `package.json`, cấu hình Vite/TypeScript, Three.js scene tối thiểu — Not Started (cố ý chưa làm ở Giai đoạn A).
- Toàn bộ mã nguồn game, tài nguyên, backend, test — Not Started.
- Định nghĩa chi tiết nhân vật (tên, hồ sơ), bản đồ khu vực, kịch bản hội thoại — Not Started (GDD mới ở mức thiết kế khung).
- Gắn tag milestone, CI/CD — Not Started.

## Rủi ro và blocker

| # | Rủi ro / blocker | Mức độ | Trạng thái |
|---|---|---|---|
| R-01 | Hiệu năng mobile: đồ họa 3D + physics trên thiết bị di động, tương thích PC cấu hình thấp | Cao | Not Started — cần ngân sách hiệu năng trong M2–M3 |
| R-02 | Quy mô lớn (18–24 năng lực, 5 chương, 6 khu vực) so với nguồn lực nhỏ | Cao | Not Started — cần kiểm soát phạm vi theo [GDD.md](GDD.md#quy-mô-và-giới-hạn-sản-xuất) |
| R-03 | PC chưa sẵn sàng để kiểm thử → kiểm thử PC hiện bị chặn | Trung bình | Blocked — chờ người dùng thông báo PC sẵn sàng |
| R-04 | Chi phí hạ tầng (hosting, domain, database, storage) có thể phát sinh ở M7; dịch vụ miễn phí có giới hạn | Trung bình | Not Started — phải ghi rõ khi triển khai M7 |
| R-05 | Ranh giới nội dung M6 cần thiết kế cẩn thận (đồng thuận, cài đặt nội dung, phân loại độ tuổi) | Trung bình | Not Started — khung đã có trong GDD, chi tiết ở M6 |
| R-06 | WebGPU chỉ tùy chọn → không được phụ thuộc WebGPU cho tính năng bắt buộc | Thấp | Implemented — đã chốt D-003 |

## Trạng thái từng milestone

| Milestone | Nội dung | Trạng thái | Ghi chú |
|---|---|---|---|
| M1 | Project Foundation | Partial | Tài liệu (Giai đoạn A) đã xong; scaffolding chưa bắt đầu |
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
- Kiểm tra không có nội dung nào tuyên bố đã xây dựng/kiểm thử khi chưa thực hiện: đã thực hiện; toàn bộ hạng mục code/test đều ghi Not Started.
