# ROADMAP — Lộ trình 8 milestone THE FALLEN

> Trạng thái: **Implemented** ở mức kế hoạch (Giai đoạn A). M1 **Partial**: ứng dụng khung, kiểm thử sandbox và CI PR #2 đã có bằng chứng nhưng chưa xác minh iPhone thật; M2–M8 **Not Started**. Trạng thái chi tiết: [PROJECT_STATE.md](PROJECT_STATE.md#trạng-thái-từng-milestone).

## M1: Project Foundation

- **Mục tiêu:** Thiết lập nền tảng kỹ thuật và quản lý dự án để sẵn sàng phát triển game.
- **Phạm vi:** Tài liệu dự án (Giai đoạn A); scaffolding React + TypeScript + Vite + Three.js; kiểm tra WebGL 2; cấu trúc thư mục; CI tối thiểu; quy ước commit/branch.
- **Deliverables:** Bộ tài liệu Giai đoạn A; ứng dụng web khung chạy được trên trình duyệt mobile; trang kiểm tra WebGL 2; CI chạy test tối thiểu.
- **Acceptance criteria:** Chạy `npm run dev` mở được trên iPhone 15 Pro Max; build thành công; WebGL 2 được xác nhận trên thiết bị; không có tính năng game nào.
- **Dependencies:** Giai đoạn A hoàn thành; stack đã chốt (D-002, D-003).
- **Rủi ro:** Cấu hình build trên mobile; khác biệt trình duyệt iOS.
- **Cách kiểm thử:** Mở dev server trên iPhone, kiểm tra trang WebGL 2, chạy build và test tối thiểu; ghi kết quả vào TEST_REPORT.

## M2: Character & 3D World

- **Mục tiêu:** Nhân vật chính điều khiển được trong thế giới 3D.
- **Phạm vi:** Nhân vật góc nhìn thứ ba, di chuyển/camera, sáu khu vực chính (New Eden, Iron District, Silver Coast, Old Quarter, Blacksite 09, Vanguard Tower) ở mức khung, khu vực đặc biệt tải riêng, asset pipeline GLB, Rapier cơ bản.
- **Deliverables:** Nhân vật di chuyển được; sáu khu vực ở mức khung theo vai trò đã chốt (D-012); pipeline asset hoạt động; ngân sách hiệu năng ban đầu.
- **Acceptance criteria:** Điều khiển nhân vật trên mobile và PC; khu vực đặc biệt tải riêng đúng; đạt ngân sách hiệu năng đề ra.
- **Dependencies:** M1.
- **Rủi ro:** Hiệu năng mobile; tải khu vực; điều khiển chạm.
- **Cách kiểm thử:** Playwright với mobile viewport; đo hiệu năng trên iPhone 15 Pro Max; ghi TEST_REPORT.

## M3: Abilities & Combat

- **Mục tiêu:** Hệ chiến đấu và năng lực hoạt động.
- **Phạm vi:** 6 hệ năng lực (khung trong GDD), cơ chế hấp thụ, THE PRICE ở mức gameplay, chiến đấu cơ bản, chốt danh sách năng lực.
- **Deliverables:** Danh sách năng lực cuối; hệ hấp thụ; THE PRICE ảnh hưởng gameplay; combat hoàn chỉnh ở mức cơ bản.
- **Acceptance criteria:** Hấp thụ năng lực kích hoạt THE PRICE thật; chiến đấu chơi được trên mobile; danh sách năng lực khớp GDD.
- **Dependencies:** M2.
- **Rủi ro:** Cân bằng gameplay; hiệu năng hiệu ứng; THE PRICE quá phức tạp.
- **Cách kiểm thử:** Vitest cho logic năng lực/THE PRICE; chơi thử trên thiết bị; ghi TEST_REPORT.

## M4: NPC & World Systems

- **Mục tiêu:** Thế giới có NPC và hệ thống thế giới hoạt động.
- **Phạm vi:** NPC (20–30), AI cơ bản, hệ thống phe phái, tương tác môi trường, thiết bị, kinh tế chợ đen cơ bản.
- **Deliverables:** NPC hoạt động; hệ thống phe phái; tương tác môi trường.
- **Acceptance criteria:** NPC có hành vi và hội thoại cơ bản; phe phái ảnh hưởng thế giới; không lỗi nghiêm trọng.
- **Dependencies:** M2, M3.
- **Rủi ro:** Hiệu năng với nhiều NPC; AI phức tạp.
- **Cách kiểm thử:** Vitest cho logic hệ thống; Playwright cho tương tác; chơi thử.

## M5: Story & Missions

- **Mục tiêu:** Cốt truyện và nhiệm vụ hoàn chỉnh.
- **Phạm vi:** 5 chương, 15–20 side quests, hội thoại, 5–6 boss, 4 ending, tuyến truyện Seraphine – The Healer (bảo vệ/giúp đỡ/xây dựng quan hệ/hấp thụ; phương án thay thế cho bệnh nhân nếu hấp thụ), liên kết THE PRICE và phe phái.
- **Deliverables:** Toàn bộ nội dung truyện; nhiệm vụ chính/phụ; boss; ending; tuyến truyện Seraphine theo D-014.
- **Acceptance criteria:** Chơi hết game từ đầu đến ending; lựa chọn ảnh hưởng ending; nội dung khớp GDD.
- **Dependencies:** M3, M4.
- **Rủi ro:** Khối lượng nội dung lớn; nhất quán cốt truyện.
- **Cách kiểm thử:** Chơi thử toàn tuyến; kiểm tra mọi ending; ghi TEST_REPORT.

## M6: Relationships & Adult Content

- **Mục tiêu:** Hệ thống quan hệ và nội dung người lớn đúng ranh giới đã chốt.
- **Phạm vi:** Năm loại quan hệ (Friendship, Attraction, Romance, Trust, Conflict), tùy chọn lãng mạn theo nguyên tắc đồng thuận, giới hạn nội dung 18+ (D-015), cài đặt nội dung, cảnh báo nội dung, phân loại độ tuổi.
- **Deliverables:** Hệ quan hệ năm loại; cài đặt nội dung và tùy chọn giảm máu me/nhạy cảm; tài liệu ranh giới nội dung đã phê duyệt.
- **Acceptance criteria:** Ranh giới nội dung được phê duyệt trước khi triển khai; cài đặt nội dung hoạt động; không nội dung khiêu dâm trực diện; nhân vật trong nội dung thân mật đều là người trưởng thành.
- **Dependencies:** M4, M5; phê duyệt ranh giới nội dung (DECISION_LOG).
- **Rủi ro:** Ranh giới nội dung; nhất quán với THE PRICE.
- **Cách kiểm thử:** Kiểm tra cài đặt nội dung; rà soát nội dung theo ranh giới đã phê duyệt.

## M7: Backend & Save System

- **Mục tiêu:** Tài khoản và cloud save hoạt động.
- **Phạm vi:** API + PostgreSQL, đồng bộ save hai chiều, IndexedDB migration, bảo mật cơ bản.
- **Deliverables:** Backend API; database; đồng bộ cloud save; tài liệu chi phí hạ tầng thực tế.
- **Acceptance criteria:** Đăng nhập và đồng bộ save hoạt động; local save vẫn chạy khi offline; chi phí hạ tầng được ghi rõ.
- **Dependencies:** M1 (nền tảng), M3 (dữ liệu THE PRICE/save).
- **Rủi ro:** Chi phí hosting/database/storage; bảo mật; xung đột đồng bộ.
- **Cách kiểm thử:** Kiểm thử API; kiểm thử đồng bộ hai chiều; kiểm thử offline.

## M8: Polish, QA & Handoff

- **Mục tiêu:** Hoàn thiện, kiểm thử toàn diện và bàn giao.
- **Phạm vi:** Tối ưu hiệu năng, sửa lỗi, kiểm thử hồi quy, tài liệu bàn giao cuối, gắn tag release.
- **Deliverables:** Bản hoàn thiện; báo cáo QA; tài liệu bàn giao; tag milestone.
- **Acceptance criteria:** Đạt ngân sách hiệu năng; không còn lỗi nghiêm trọng mở; tài liệu bàn giao đầy đủ.
- **Dependencies:** M1–M7.
- **Rủi ro:** Thời gian sửa lỗi cuối; thiết bị kiểm thử hạn chế (PC chờ sẵn sàng).
- **Cách kiểm thử:** Kiểm thử hồi quy toàn diện; ghi TEST_REPORT cuối; kiểm tra trên iPhone 15 Pro Max và PC (khi sẵn sàng).
