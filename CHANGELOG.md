# CHANGELOG — Lịch sử thay đổi THE FALLEN

> Định dạng theo phiên và milestone. Mọi thay đổi phải ghi ngày và trạng thái. Không ghi nội dung chưa thực hiện như đã hoàn thành.

## [Unreleased]

### Added (bổ sung trong PR #1 — 2026-11-21)

- GDD.md: sáu khu vực chính (New Eden, Iron District, Silver Coast, Old Quarter, Blacksite 09, Vanguard Tower) với vai trò dự kiến; hồ sơ Seraphine – The Healer (Absolute Restoration, lựa chọn bảo vệ/giúp đỡ/xây dựng quan hệ/hấp thụ, phương án thay thế cho bệnh nhân); năm loại quan hệ (Friendship, Attraction, Romance, Trust, Conflict); giới hạn nội dung 18+ (đồng thuận, người trưởng thành, không khiêu dâm trực diện, cảnh báo nội dung, tùy chọn giảm máu me/nhạy cảm).
- DECISION_LOG.md: quyết định D-012 đến D-015 (đã phê duyệt).
- ROADMAP.md: M2 (sáu khu vực), M5 (tuyến truyện Seraphine), M6 (năm loại quan hệ, giới hạn 18+, cài đặt nội dung).
- FEATURE_MATRIX.md và IMPLEMENTATION_MATRIX.md: tính năng F-26 đến F-29 (trạng thái Not Started).
- PROJECT_STATE.md: cập nhật quyết định đã xác nhận và công việc hoàn thành.

### Notes

- Bổ sung này chỉ sửa tài liệu Markdown; chưa có mã nguồn, dependency hay tài nguyên mới. Cốt truyện chi tiết từng khu vực, tuyến quan hệ/kết thúc của Seraphine và phân loại độ tuổi chính thức vẫn chưa được phê duyệt, chốt ở các milestone tương ứng.

## [0.1.0] - 2026-11-21 — Giai đoạn A: Thiết lập nền tảng tài liệu

### Added

- README.md — giới thiệu, mục tiêu, nền tảng, công nghệ, roadmap, hướng dẫn repository.
- PROJECT_STATE.md — trạng thái dự án, quyết định đã xác nhận, rủi ro, trạng thái milestone.
- GDD.md — thiết kế game: gameplay, thế giới, nhân vật, năng lực, THE PRICE, phe phái, nhiệm vụ, ending, quy mô.
- TECHNICAL_ARCHITECTURE.md — kiến trúc frontend, rendering, physics, asset pipeline, save, backend, testing, performance, mobile-first.
- ROADMAP.md — 8 milestone M1–M8 với mục tiêu, phạm vi, deliverables, acceptance criteria, dependencies, rủi ro, cách kiểm thử.
- DECISION_LOG.md — 11 quyết định đã chốt (D-001 đến D-011) và quy trình thay đổi quyết định.
- NEXT_TASK.md — công việc tiếp theo: scaffolding M1.
- BUG_TRACKER.md — khung theo dõi lỗi (chưa có lỗi vì chưa có mã nguồn).
- TEST_REPORT.md — khung báo cáo kiểm thử (chưa có kiểm thử nào được chạy).
- ASSET_MANIFEST.md — khung quản lý tài nguyên và quy tắc license.
- FEATURE_MATRIX.md — ma trận tính năng theo milestone.
- IMPLEMENTATION_MATRIX.md — liên kết tính năng với tài liệu, mã nguồn, test.
- HANDOFF_REPORT.md — hướng dẫn bàn giao sang cuộc trò chuyện Arena mới.
- `.gitignore` — chuẩn bị cho React/Node/TypeScript.

### Notes

- Giai đoạn này chỉ tạo tài liệu và cấu hình quản lý dự án. Chưa có mã nguồn game, chưa tạo React app, chưa cài dependency, chưa có tài nguyên game, chưa triển khai backend.
- Toàn bộ hạng mục code/test ở trạng thái Not Started. M1 ở trạng thái Partial (tài liệu xong, scaffolding chưa bắt đầu).
