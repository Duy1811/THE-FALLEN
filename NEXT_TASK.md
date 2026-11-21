# NEXT_TASK — Công việc tiếp theo

> Trạng thái: **Not Started**. Tài liệu này mô tả công việc tiếp theo duy nhất được phép bắt đầu. Không làm lại công việc đã hoàn thành (xem [PROJECT_STATE.md](PROJECT_STATE.md) và [HANDOFF_REPORT.md](HANDOFF_REPORT.md)).

## Công việc tiếp theo

**M1 — Project Foundation: scaffolding ứng dụng web khung (React + TypeScript + Vite + Three.js).**

Nội dung cụ thể:

1. Khởi tạo ứng dụng React + TypeScript + Vite theo stack đã chốt (D-002).
2. Thêm Three.js và trang kiểm tra WebGL 2 (WebGPU chỉ hiển thị trạng thái tùy chọn, không phụ thuộc).
3. Thiết lập cấu trúc thư mục theo [TECHNICAL_ARCHITECTURE.md](TECHNICAL_ARCHITECTURE.md#1-kiến-trúc-frontend).
4. Thiết lập Vitest và Playwright tối thiểu, CI chạy test.
5. Xác nhận ứng dụng chạy trên trình duyệt iPhone 15 Pro Max (mobile-first).

> Không viết tính năng game trong task này. Không bắt đầu M2.

## Điều kiện bắt đầu

- Giai đoạn A (bộ tài liệu này) đã được merge vào `main` qua Pull Request.
- Stack và quyết định đã chốt, không có thay đổi đang chờ phê duyệt trong [DECISION_LOG.md](DECISION_LOG.md).
- Thiết bị iPhone 15 Pro Max sẵn sàng để kiểm thử mobile.

## Kết quả mong đợi

- Ứng dụng web khung chạy được bằng `npm run dev`, mở được trên trình duyệt mobile.
- Trang kiểm tra WebGL 2 hiển thị kết quả trên thiết bị thật.
- Build thành công, test tối thiểu chạy trong CI.
- Không có tính năng game nào (không nhân vật, không scene game, không năng lực).

## Tiêu chí hoàn thành

- [ ] `npm run dev` chạy được, mở được trên iPhone 15 Pro Max.
- [ ] Build thành công không lỗi.
- [ ] WebGL 2 được xác nhận trên thiết bị thật; thiết bị không hỗ trợ hiển thị thông báo rõ ràng.
- [ ] Vitest và Playwright chạy tối thiểu trong CI.
- [ ] Kết quả kiểm thử ghi vào [TEST_REPORT.md](TEST_REPORT.md) kèm bằng chứng.
- [ ] [PROJECT_STATE.md](PROJECT_STATE.md), [CHANGELOG.md](CHANGELOG.md) và [IMPLEMENTATION_MATRIX.md](IMPLEMENTATION_MATRIX.md) được cập nhật.
- [ ] Thay đổi được commit trên branch làm việc, push và mở Pull Request vào `main` (không tự merge).
