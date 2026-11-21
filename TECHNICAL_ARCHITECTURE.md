# TECHNICAL_ARCHITECTURE — Kiến trúc kỹ thuật THE FALLEN

> Trạng thái: **Implemented** ở mức thiết kế kiến trúc (Giai đoạn A); lớp UI và 3D diagnostic của M1 đã có mã, còn `Game`, `Data`, `Save`, Rapier và backend thuộc milestone sau. Stack đã chốt, không tự ý thay đổi (xem [DECISION_LOG.md](DECISION_LOG.md)).

## 1. Kiến trúc frontend

- **React + TypeScript + Vite** cho ứng dụng web.
- Tách lớp rõ ràng (M1 chỉ triển khai phần nền tảng):
  - `UI`: React components — M1: trang kiểm tra trong `src/app/`; menu/HUD/hội thoại/cài đặt game để sau.
  - `Game`: vòng lặp game, trạng thái gameplay, hệ thống năng lực, THE PRICE, nhiệm vụ — chưa triển khai.
  - `3D`: Three.js — M1: diagnostic hình học tối thiểu trong `src/graphics/`; nhân vật/thế giới/hiệu ứng để sau.
  - `Data`: dữ liệu tĩnh (năng lực, nhiệm vụ, nhân vật) dạng module TypeScript/JSON — chưa triển khai.
  - `Save`: IndexedDB (mục 5) — chưa triển khai.
- Quản lý trạng thái game tách khỏi React render loop để tránh re-render không cần thiết; React chủ yếu cho UI/HUD.
- Cấu trúc thư mục chi tiết chốt ở M1 khi scaffolding.

## 2. 3D rendering

- **Three.js** với **WebGL 2 là nền tảng bắt buộc**. Mọi tính năng phải chạy trên WebGL 2.
- **WebGPU chỉ là tùy chọn** khi thiết bị hỗ trợ; không được phụ thuộc WebGPU cho tính năng bắt buộc.
- Phong cách: Stylized Realistic 3D / Semi-realistic low-poly; đô thị khoa học viễn tưởng.
- Thành phố chính kết nối tương đối liền mạch; khu vực đặc biệt tải riêng (streaming theo khu vực).
- Kiểm tra hỗ trợ WebGL 2 khi khởi động; thiết bị không hỗ trợ WebGL 2 phải hiển thị thông báo rõ ràng.

## 3. Physics

- **Rapier** cho va chạm, di chuyển nhân vật, vật lý môi trường.
- Physics phải chạy ổn định trên mobile: giới hạn số body, dùng collider đơn giản hóa, tránh tính toán nặng mỗi frame.
- Tương tác môi trường (vật che, vật ném) phục vụ gameplay "khởi đầu yếu" trong [GDD.md](GDD.md#2-gameplay).

## 4. Asset pipeline

- Định dạng 3D: **GLB/glTF**.
- Nguồn tài nguyên: ưu tiên miễn phí, kiểm tra license, ưu tiên mã nguồn mở (Zero Paid AI Pipeline). Danh sách và license ghi trong [ASSET_MANIFEST.md](ASSET_MANIFEST.md).
- Tối ưu hóa bắt buộc cho mobile: ngân sách polygon, nén texture, LOD, gộp mesh, atlas texture.
- Pipeline: tài nguyên gốc → tối ưu → GLB → đưa vào repo theo quy ước trong ASSET_MANIFEST. Chi tiết công cụ chốt ở M2.

## 5. Save system

- **IndexedDB** cho local save trên thiết bị (tiến trình, THE PRICE, năng lực, lựa chọn, cài đặt).
- **Backend API + PostgreSQL** cho tài khoản và cloud save (M7). Local save vẫn hoạt động khi không có backend.
- Save phải có phiên bản (version) để migration khi cấu trúc thay đổi.
- Không lưu dữ liệu nhạy cảm (mật khẩu) ở client; backend xử lý xác thực ở M7.

## 6. Backend

- API (công nghệ cụ thể chốt ở M7) + **PostgreSQL** cho account/cloud save.
- Backend **chưa triển khai** ở Giai đoạn A; M7 mới bắt đầu.
- Thiết kế API phải hỗ trợ đồng bộ save hai chiều, xử lý xung đột, và bảo mật cơ bản.

## 7. Testing

- **Vitest:** unit test cho logic game (năng lực, THE PRICE, nhiệm vụ, save).
- **Playwright:** kiểm thử end-to-end trên trình duyệt (mobile viewport ưu tiên).
- M1 đã chạy unit test WebGL 2/WebGPU và Playwright Chromium mobile trong sandbox; [CI PR #2 trên commit `2012aa6` (run `44885207389`, job `136788903622`)](https://github.com/Duy1811/THE-FALLEN/actions/runs/44885207389/job/136788903622) chạy thành công Playwright **10 passed, 0 skipped, 0 failed** trên Chromium mobile/WebKit Linux. Safari trên iPhone thật vẫn chưa xác minh — xem [TEST_REPORT.md](TEST_REPORT.md).
- Quy ước: tính năng nào cũng phải có test tương ứng trong [IMPLEMENTATION_MATRIX.md](IMPLEMENTATION_MATRIX.md) trước khi đánh dấu hoàn thành.

## 8. Performance

- Mục tiêu: chạy mượt trên iPhone 15 Pro Max và PC cấu hình thấp.
- Ngân sách hiệu năng (chốt số liệu ở M2–M3): frame time, số draw call, dung lượng texture, thời gian tải khu vực.
- Chế độ chất lượng thích ứng: tự giảm chất lượng đồ họa khi thiết bị yếu; cài đặt đồ họa cho người chơi.
- Đo lường bằng công cụ profiling của trình duyệt và Three.js stats; kết quả ghi vào TEST_REPORT.

## 9. Mobile-first architecture

- Ưu tiên phát triển và kiểm thử trên mobile trước (iPhone 15 Pro Max).
- Điều khiển chạm: joystick ảo, nút hành động, camera cảm ứng; bố cục HUD phù hợp màn hình nhỏ.
- Tối ưu pin, dung lượng tải, bộ nhớ; khu vực đặc biệt tải riêng để giảm tải ban đầu.
- PC được sử dụng khi người dùng thông báo sẵn sàng; kiểm thử PC hiện **Blocked** (xem [PROJECT_STATE.md](PROJECT_STATE.md#rủi-ro-và-blocker)).

## 10. Zero Paid AI Pipeline (áp dụng kỹ thuật)

- Không mua API key AI, không dùng AI API trả phí, không trả phí tích hợp AI, không bắt buộc chạy local AI model.
- Ưu tiên phần mềm mã nguồn mở cho mọi công cụ trong pipeline (build, test, xử lý asset).
- Dùng script, template và tự động hóa để giảm thao tác thủ công.
- Mọi tài nguyên kiểm tra license trước khi đưa vào dự án ([ASSET_MANIFEST.md](ASSET_MANIFEST.md)).

## 11. Chi phí hạ tầng có thể phát sinh

| Hạng mục | Ghi chú |
|---|---|
| Hosting | Có thể phát sinh khi triển khai website/backend |
| Domain | Có thể phát sinh |
| Database (PostgreSQL) | Có thể phát sinh ở M7 |
| Storage (asset, cloud save) | Có thể phát sinh |

Không giả định dịch vụ miễn phí là miễn phí vĩnh viễn hoặc không giới hạn. Mọi chi phí thực tế phải ghi vào tài liệu khi phát sinh.
