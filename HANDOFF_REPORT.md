# HANDOFF_REPORT — Bàn giao THE FALLEN

> Tài liệu này hướng dẫn chuyển sang một cuộc trò chuyện Arena mới mà không mất trạng thái dự án. Đọc tài liệu này trước khi làm bất cứ việc gì.

## Cách đọc trạng thái dự án

1. Đọc [PROJECT_STATE.md](PROJECT_STATE.md) trước — nguồn sự thật về trạng thái hiện tại, quyết định đã chốt, rủi ro và trạng thái từng milestone.
2. Đọc [NEXT_TASK.md](NEXT_TASK.md) — công việc tiếp theo duy nhất được phép bắt đầu, kèm điều kiện bắt đầu và tiêu chí hoàn thành.
3. Đọc [DECISION_LOG.md](DECISION_LOG.md) — các quyết định đã chốt; không tự ý thay đổi, không tự thêm tính năng ngoài [GDD.md](GDD.md).
4. Đọc [IMPLEMENTATION_MATRIX.md](IMPLEMENTATION_MATRIX.md) — tính năng nào đã có bằng chứng, tính năng nào chưa. Không đánh dấu hoàn thành nếu chưa có bằng chứng.
5. Đọc [TEST_REPORT.md](TEST_REPORT.md) và [BUG_TRACKER.md](BUG_TRACKER.md) — kết quả kiểm thử và lỗi đã ghi nhận.

## Cách tiếp tục NEXT_TASK.md

- Chỉ thực hiện đúng công việc mô tả trong NEXT_TASK.md, theo thứ tự milestone trong [ROADMAP.md](ROADMAP.md).
- Kiểm tra "Điều kiện bắt đầu" trước khi bắt đầu; nếu điều kiện chưa đạt, ghi rõ và dừng.
- Hoàn thành theo "Tiêu chí hoàn thành", cập nhật PROJECT_STATE.md, CHANGELOG.md, IMPLEMENTATION_MATRIX.md và TEST_REPORT.md.
- Commit trên branch làm việc, push và mở Pull Request vào `main`. Không tự merge, không force push, không xóa lịch sử.

## Quy tắc không làm lại công việc đã hoàn thành

- Không viết lại tài liệu Giai đoạn A nếu đã có trong repo; chỉ cập nhật khi có thay đổi thật và ghi vào CHANGELOG.
- Không tạo lại scaffolding, cấu hình hay tài nguyên đã có; kiểm tra repo trước khi tạo mới.
- Không thay đổi stack, GDD, quy mô hay ranh giới nội dung mà không qua DECISION_LOG.
- Không đánh dấu Verified chỉ vì tài liệu đã được viết; Verified phải có bằng chứng chạy/kiểm tra thực tế.
- Tuân thủ Zero Paid AI Pipeline: không mua API key AI, không AI API trả phí, ưu tiên mã nguồn mở và tài nguyên miễn phí có kiểm tra license; ghi rõ chi phí hạ tầng có thể phát sinh.

## Trạng thái tại thời điểm bàn giao

- Giai đoạn A: bộ tài liệu Implemented (đã viết và kiểm tra liên kết/nhất quán); PR #1 đã merge vào `main` (`d729933`).
- M1: Partial — ứng dụng khung/test/CI workflow Implemented; typecheck/build/Vitest/Chromium mobile Verified **trong sandbox**, log ở [evidence/M1_LOCAL_VERIFICATION.md](evidence/M1_LOCAL_VERIFICATION.md); CI PR #2 typecheck/build/Vitest/Playwright Chromium + WebKit [Verified](https://github.com/Duy1811/THE-FALLEN/actions/runs/44884262901/job/136786012091); iPhone Safari/WebGL 2 thật Blocked đến khi người dùng kiểm thử.
- M2–M8: Not Started. Mã game, tài nguyên game, backend: Not Started.
- PC của người dùng: Blocked — chờ thông báo sẵn sàng; headless Chromium sandbox không phải PC thật.
- Công việc tiếp theo: hoàn tất nghiệm thu M1 trong [NEXT_TASK.md](NEXT_TASK.md), không bắt đầu M2 trước bằng chứng.
