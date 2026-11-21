# NEXT_TASK — Công việc tiếp theo

> Trạng thái: **Partial** (M1 Project Foundation, 2026-11-21). Giai đoạn A đã merge vào `main` qua PR #1. Ứng dụng khung đã triển khai và [CI PR #2](https://github.com/Duy1811/THE-FALLEN/pull/2) thành công, nhưng **M1 chưa hoàn thành** vì chưa kiểm thử Safari/WebGL 2 trên iPhone 15 Pro Max thật. Chi tiết: [PROJECT_STATE.md](PROJECT_STATE.md), [TEST_REPORT.md](TEST_REPORT.md).

## Công việc đang tiếp tục

**Hoàn tất nghiệm thu M1 — Project Foundation** theo [ROADMAP.md](ROADMAP.md#m1-project-foundation) và D-002/D-003/D-004.

Đã có mã React + TypeScript + Vite + Three.js, trang chẩn đoán WebGL 2 (WebGPU chỉ tùy chọn), cấu trúc thư mục, Vitest, Playwright và workflow CI. **Không viết gameplay, không bắt đầu M2** khi M1 chưa đủ bằng chứng.

## Điều kiện và phần còn chờ

- [x] Giai đoạn A đã merge vào `main` qua PR #1 (`d729933`).
- [x] Stack và quyết định trong DECISION_LOG đã chốt; không đổi.
- [ ] iPhone 15 Pro Max thật sẵn sàng cho người dùng mở preview trên Safari và lưu bằng chứng. Sandbox Arena không có thiết bị iOS thật, **Blocked** đối với bước này.

## Việc cần làm tiếp

1. PR [#2](https://github.com/Duy1811/THE-FALLEN/pull/2) vào `main` đã mở; CI typecheck/build/Vitest/Playwright Chromium + WebKit [thành công](https://github.com/Duy1811/THE-FALLEN/actions/runs/44884262901/job/136786012091). Giữ PR mở, không tự merge. Sau các commit tài liệu, xác minh checks mới nhất vẫn xanh.
2. **Việc còn thiếu:** người dùng mở URL preview Arena tạm thời (hoặc `npm run dev` qua mạng LAN) trên **Safari của iPhone 15 Pro Max thật**. Xác nhận trang hiển thị responsive, vật thể diagnostic xuất hiện, WebGL 2 báo “SẴN SÀNG”. Ghi iOS/Safari version, thời điểm, ảnh chụp hoặc video, tình trạng truy cập URL vào TEST_REPORT. Playwright giả lập **không thay thế** bước này.
3. Sau khi thiết bị thật có bằng chứng và mọi điều kiện dưới đây đạt, mới cập nhật trạng thái M1 và xem xét M2. Không gắn tag milestone trước nghiệm thu.

## Tiêu chí hoàn thành (giữ nguyên chuẩn M1)

- [ ] `npm run dev` chạy được **và mở được trên iPhone 15 Pro Max** (dev server cục bộ và preview Host đã trả HTTP 200, nhưng chưa mở trên iPhone).
- [x] Build thành công không lỗi (có cảnh báo kích thước chunk Three.js; xem [log](evidence/M1_LOCAL_VERIFICATION.md)).
- [ ] WebGL 2 được xác nhận trên **thiết bị thật**; thiết bị không hỗ trợ hiển thị thông báo rõ ràng (fallback đã Implemented và Verified bằng test giả lập, chưa thử trên thiết bị thật).
- [x] Vitest và Playwright chạy tối thiểu trong **CI** (job [build-and-test thành công](https://github.com/Duy1811/THE-FALLEN/actions/runs/44884262901/job/136786012091); cục bộ 4 Vitest + 5 Chromium Playwright đã chạy).
- [x] Kết quả cục bộ và CI đã ghi vào [TEST_REPORT.md](TEST_REPORT.md) kèm bằng chứng; **cần bổ sung kết quả iPhone thật** trước nghiệm thu đầy đủ.
- [x] [PROJECT_STATE.md](PROJECT_STATE.md), [CHANGELOG.md](CHANGELOG.md) và [IMPLEMENTATION_MATRIX.md](IMPLEMENTATION_MATRIX.md) được cập nhật cho tiến độ M1.
- [x] Thay đổi được commit trên branch làm việc `arena/4627ffe0-the-fallen`, push và mở [Pull Request #2](https://github.com/Duy1811/THE-FALLEN/pull/2) vào `main` (chưa merge).

> Không đánh dấu M1 hoàn thành khi điều kiện trên thiết bị thật chưa có bằng chứng. CI chỉ chứng minh workflow chạy, không chứng minh iPhone Safari.
