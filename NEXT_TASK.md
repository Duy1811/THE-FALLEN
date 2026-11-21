# NEXT_TASK — Công việc tiếp theo

> Trạng thái: **Partial** (M1 Project Foundation, 2026-11-21). Giai đoạn A đã merge vào `main` qua PR #1. Mã ứng dụng khung và kiểm thử cục bộ đã triển khai, nhưng **M1 chưa hoàn thành**: còn CI/PR và kiểm thử iPhone thật. Trạng thái chi tiết: [PROJECT_STATE.md](PROJECT_STATE.md), [TEST_REPORT.md](TEST_REPORT.md).

## Công việc đang tiếp tục

**Hoàn tất nghiệm thu M1 — Project Foundation** theo [ROADMAP.md](ROADMAP.md#m1-project-foundation) và D-002/D-003/D-004.

Đã có mã React + TypeScript + Vite + Three.js, trang chẩn đoán WebGL 2 (WebGPU chỉ tùy chọn), cấu trúc thư mục, Vitest, Playwright và workflow CI. **Không viết gameplay, không bắt đầu M2** khi M1 chưa đủ bằng chứng.

## Điều kiện và phần còn chờ

- [x] Giai đoạn A đã merge vào `main` qua PR #1 (`d729933`).
- [x] Stack và quyết định trong DECISION_LOG đã chốt; không đổi.
- [ ] iPhone 15 Pro Max thật sẵn sàng cho người dùng mở preview trên Safari và lưu bằng chứng. Sandbox Arena không có thiết bị iOS thật, **Blocked** đối với bước này.

## Việc cần làm tiếp

1. Mở PR M1 vào `main` từ branch làm việc hiện tại, đợi GitHub Actions chạy typecheck, build, Vitest, Playwright Chromium và WebKit; sửa lỗi nếu có và ghi link/bằng chứng vào [TEST_REPORT.md](TEST_REPORT.md). Không tự merge PR.
2. Người dùng mở URL preview Arena tạm thời (hoặc `npm run dev` qua mạng LAN) trên **Safari của iPhone 15 Pro Max thật**. Xác nhận trang hiển thị responsive, vật thể diagnostic xuất hiện, WebGL 2 báo “SẴN SÀNG”. Ghi iOS/Safari version, thời điểm, ảnh chụp hoặc video, tình trạng truy cập URL vào TEST_REPORT. Playwright giả lập **không thay thế** bước này.
3. Sau khi cả CI lẫn thiết bị thật có bằng chứng và mọi điều kiện dưới đây đạt, mới cập nhật trạng thái M1 và xem xét M2. Không gắn tag milestone trước nghiệm thu.

## Tiêu chí hoàn thành (giữ nguyên chuẩn M1)

- [ ] `npm run dev` chạy được **và mở được trên iPhone 15 Pro Max** (dev server cục bộ và preview Host đã trả HTTP 200, nhưng chưa mở trên iPhone).
- [x] Build thành công không lỗi (có cảnh báo kích thước chunk Three.js; xem [log](evidence/M1_LOCAL_VERIFICATION.md)).
- [ ] WebGL 2 được xác nhận trên **thiết bị thật**; thiết bị không hỗ trợ hiển thị thông báo rõ ràng (fallback đã Implemented và Verified bằng test giả lập, chưa thử trên thiết bị thật).
- [ ] Vitest và Playwright chạy tối thiểu trong **CI** (workflow Implemented, chờ kết quả PR; cục bộ 4 Vitest + 5 Chromium Playwright đã chạy).
- [x] Kết quả **cục bộ** đã ghi vào [TEST_REPORT.md](TEST_REPORT.md) kèm bằng chứng; cần bổ sung CI và iPhone trước nghiệm thu đầy đủ.
- [x] [PROJECT_STATE.md](PROJECT_STATE.md), [CHANGELOG.md](CHANGELOG.md) và [IMPLEMENTATION_MATRIX.md](IMPLEMENTATION_MATRIX.md) được cập nhật cho tiến độ M1.
- [ ] Thay đổi được commit trên branch làm việc, push và mở Pull Request vào `main` (không tự merge).

> Không đánh dấu M1 hoàn thành khi bất kỳ điều kiện thiết bị thật/CI nào chưa có bằng chứng.
