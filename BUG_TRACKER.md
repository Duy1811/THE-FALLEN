# BUG_TRACKER — Vấn đề ghi nhận trong M1 THE FALLEN

> M1 **Partial**. Bảng dưới đây phân biệt sự cố **hạ tầng preview**, giới hạn **môi trường kiểm thử cục bộ**, và **cảnh báo build không gây lỗi**. Không có bằng chứng quy các vấn đề này thành lỗi mã ứng dụng. Safari/WebGL 2 trên iPhone 15 Pro Max thật vẫn **Blocked**, không phải kết quả test thất bại. Xem [TEST_REPORT.md](TEST_REPORT.md) và [PROJECT_STATE.md](PROJECT_STATE.md).

## Vấn đề đã ghi nhận

| ID | Loại / tình trạng | Bằng chứng và phạm vi | Ảnh hưởng / giới hạn | Bước tiếp theo |
|---|---|---|---|---|
| BUG-001 | Hạ tầng preview/proxy — **Blocked**, chưa xác minh đã khôi phục | Người dùng báo Safari trả `502 BAD GATEWAY / SANDBOX NOT FOUND`, `Sandbox lifecycle 7` ở cả cổng 5173 và 5181 của sandbox `iu017fy2i6p4z4obvagj1`. Vite ở các cổng này trả HTTP 200 **bên trong sandbox**; fetch URL bên ngoài cũng thất bại nhưng không xác định được mã HTTP bằng công cụ đó. [Chi tiết kiểm tra](TEST_REPORT.md#kiểm-tra-vòng-đời-preview--2026-11-21-khoảng-08260830-utc). | Proxy lỗi trước khi tải ứng dụng; **không** chứng minh lỗi app, WebGL 2 hay Safari. Chưa có URL preview truy cập được từ Internet để nghiệm thu iPhone thật. | Khôi phục preview qua cơ chế Arena; thử URL từ ngoài sandbox rồi mới kiểm tra app/WebGL 2 trên iPhone thật. Không tự triển khai hosting công khai. |
| BUG-002 | Giới hạn môi trường kiểm thử cục bộ — **Blocked cục bộ**; CI có kết quả riêng | Theo báo cáo môi trường local ban đầu: tải Chromium Playwright bị `ECONNRESET`; browser fallback thiếu `libnspr4.so`, `libnss3.so`, `libnssutil3.so`, và môi trường đó được báo là không thể cài package hệ thống. Kiểm tra `ldd /tmp/chromium` trong sandbox hiện tại cũng cho thấy ba thư viện không nằm trên loader path mặc định; **không xác nhận hạn chế quyền cài package tại đây**. Bản Chromium tạm từ npm cộng thư viện tạm đã chạy 5/5 Chromium-mobile Playwright trong sandbox; [log local](evidence/M1_LOCAL_VERIFICATION.md). | Cài browser/chạy WebKit cục bộ theo cách chuẩn còn bị giới hạn; không nhầm với CI: [job `136788903622` SUCCESS](https://github.com/Duy1811/THE-FALLEN/actions/runs/44885207389/job/136788903622), Playwright 10 passed / 0 skipped / 0 failed trên hai project. WebKit Linux không phải Safari iPhone thật. | Nếu cần chạy WebKit cục bộ, dùng môi trường có quyền cài dependencies và tải được browser; không coi thiếu package là lỗi app hay bỏ qua kiểm thử iPhone thật. |
| BUG-003 | Cảnh báo hiệu năng Vite — **Partial / cần theo dõi**, không gây lỗi build | `DiagnosticScene` minified **526.02 kB**, gzip **131.78 kB**, vượt ngưỡng cảnh báo chunk **500 kB**. `npm run build` vẫn exit 0; [log build](evidence/M1_LOCAL_VERIFICATION.md). | Chưa đo thời gian tải/hiệu năng trên iPhone thật; chunk diagnostic đã tách tải động khỏi UI. Không phải lỗi build hay bằng chứng không tương thích thiết bị. | Theo dõi kích thước và đo hiệu năng mobile trước khi quyết định tối ưu thêm ở milestone sau; giữ M1 Partial. |

## Quy tắc cập nhật

- Ghi bằng chứng, môi trường và phạm vi của mỗi vấn đề; không tự điền ngày phát sinh, người phụ trách hay độ ưu tiên khi chưa có dữ liệu.
- Không kết luận lỗi ứng dụng từ lỗi proxy hoặc thiếu dependency hệ thống; một kết quả trong CI không chứng minh thiết bị thật đã chạy.
- Khi có bằng chứng mới, cập nhật dòng tương ứng và [TEST_REPORT.md](TEST_REPORT.md); không xóa vấn đề trước khi xác minh cách xử lý.
