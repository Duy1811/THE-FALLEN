# DECISION_LOG — Nhật ký quyết định THE FALLEN

> Quy tắc: các quyết định dưới đây **đã chốt, không tự ý thay đổi**. Mọi thay đổi sau này phải ghi lý do, ngày, người phê duyệt và trạng thái phê duyệt trong nhật ký này. Không tự thêm tính năng ngoài [GDD.md](GDD.md) mà không qua quyết định.

| ID | Ngày | Quyết định | Lý do | Trạng thái phê duyệt |
|---|---|---|---|---|
| D-001 | 2026-11-21 | Thể loại: hành động 3D góc nhìn thứ ba, khám phá thế giới, nhiệm vụ/cốt truyện, single-player. Nền tảng: PC Browser + Mobile Browser, website, không native app. | Định hướng sản phẩm đã chốt | Đã phê duyệt |
| D-002 | 2026-11-21 | Stack: React, TypeScript, Vite, Three.js, Rapier, GLB/glTF, IndexedDB, API + PostgreSQL, Vitest, Playwright, GitHub. Không tự ý đổi stack. | Thống nhất công nghệ toàn dự án | Đã phê duyệt |
| D-003 | 2026-11-21 | WebGL 2 là nền tảng đồ họa bắt buộc; WebGPU chỉ tùy chọn khi thiết bị hỗ trợ. | Tương thích mobile và PC cấu hình thấp | Đã phê duyệt |
| D-004 | 2026-11-21 | Mobile-first; đồ họa Stylized Realistic 3D / Semi-realistic low-poly; ưu tiên iPhone 15 Pro Max; PC dùng khi có thông báo sẵn sàng. | Thiết bị hiện tại và hiệu năng | Đã phê duyệt |
| D-005 | 2026-11-21 | Zero Paid AI Pipeline: không mua API key AI, không AI API trả phí, không trả phí tích hợp AI, không bắt buộc local AI model; ưu tiên mã nguồn mở và tài nguyên miễn phí có kiểm tra license; ghi rõ chi phí hạ tầng có thể phát sinh. | Kiểm soát chi phí dự án | Đã phê duyệt |
| D-006 | 2026-11-21 | Quy mô mục tiêu: 18–24 năng lực, ~30 kỹ năng, 10–12 nhân vật chính/cốt truyện, 12–20 người mang năng lực có story, 20–30 NPC, 5–6 boss, 15–20 side quests, 6 khu vực, 5 chương, 4 ending (Liberation, Ascension, Extinction, New God). | Khung phạm vi sản xuất | Đã phê duyệt |
| D-007 | 2026-11-21 | THE PRICE gồm suy thoái sinh học, mất ký ức, phân mảnh nhân cách, mất cảm xúc, quá tải Nexus; phải ảnh hưởng gameplay, hội thoại, quan hệ, ký ức, ending — không chỉ là thanh phạt. | Cơ chế trung tâm của game | Đã phê duyệt |
| D-008 | 2026-11-21 | Quy trình Git: `main` ổn định, `develop`, `feature/*`, `fix/*`; không force push, không xóa lịch sử; commit rõ ràng; tag khi hoàn thành milestone; PR vào `main`. | Quản lý mã nguồn và tài liệu | Đã phê duyệt |
| D-009 | 2026-11-21 | Lưu trữ: IndexedDB cho local save; backend API + PostgreSQL cho account/cloud save. | Save hoạt động offline và đồng bộ khi có backend | Đã phê duyệt |
| D-010 | 2026-11-21 | M6 tuân thủ ranh giới nội dung trong GDD (đồng thuận, không khiêu dâm trực diện, cài đặt nội dung, phân loại độ tuổi chốt ở M6). | Ranh giới nội dung và pháp lý | Đã phê duyệt |
| D-011 | 2026-11-21 | Sáu hệ năng lực: Energy, Strength, Speed, Psychic, Biological, Shadow. Năm phe phái: VANGUARD GLOBAL, THE ASCENDANTS, THE UNDERGROUND, BLACK MARKET, CIVILIAN FRONT. | Khung thế giới và gameplay | Đã phê duyệt |
| D-012 | 2026-11-21 | Sáu khu vực chính: New Eden, Iron District, Silver Coast, Old Quarter, Blacksite 09, Vanguard Tower. Chỉ chốt chức năng/vai trò dự kiến; cốt truyện chi tiết từng khu vực chưa được phê duyệt. | Khung thế giới | Đã phê duyệt |
| D-013 | 2026-11-21 | Năm loại quan hệ: Friendship, Attraction, Romance, Trust, Conflict. Quan hệ ảnh hưởng hội thoại, nhiệm vụ, hành vi nhân vật và kết quả cốt truyện. | Hệ thống quan hệ M6 | Đã phê duyệt |
| D-014 | 2026-11-21 | Seraphine – The Healer: phụ nữ trưởng thành, năng lực Absolute Restoration, cứu chữa người nghèo. Người chơi có thể bảo vệ, giúp đỡ, xây dựng quan hệ hoặc hấp thụ năng lực. Nếu hấp thụ, bệnh nhân phụ thuộc vào cô bị ảnh hưởng; phải có phương án thay thế để bệnh nhân tiếp tục được cứu chữa. Không tự tạo thêm kết thúc hoặc chi tiết quan hệ chưa được phê duyệt. | Hồ sơ nhân vật đã chốt | Đã phê duyệt |
| D-015 | 2026-11-21 | Giới hạn nội dung 18+: bạo lực hư cấu, ngôn ngữ mạnh, tình cảm và yếu tố gợi cảm, cảnh thân mật có đồng thuận, nhân vật trong nội dung thân mật phải là người trưởng thành, không biến bạo lực cưỡng ép thành nội dung tình dục, không phát triển thành sản phẩm khiêu dâm, không mô tả tình dục trực diện, có cảnh báo nội dung và tùy chọn giảm máu me/nhạy cảm. | Ranh giới nội dung M6 | Đã phê duyệt |

## Quy trình thay đổi quyết định

1. Đề xuất thay đổi bằng văn bản: quyết định cũ, quyết định mới, lý do, tác động đến milestone nào.
2. Ghi vào nhật ký này với trạng thái "Chờ phê duyệt" — chưa áp dụng vào tài liệu/không áp dụng vào mã nguồn.
3. Chỉ khi được phê duyệt mới cập nhật tài liệu liên quan và đổi trạng thái thành "Đã phê duyệt".
4. Không sửa hoặc xóa dòng quyết định cũ; thay đổi được ghi bằng dòng mới tham chiếu ID cũ.
