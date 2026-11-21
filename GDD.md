# GDD — Game Design Document: THE FALLEN – Kỷ Nguyên Siêu Nhân

> Trạng thái: **Implemented** ở mức thiết kế khung (Giai đoạn A). Mọi nội dung dưới đây là thiết kế, **chưa được triển khai trong mã nguồn**. Tên nhân vật, địa danh cụ thể và kịch bản chi tiết chưa chốt — ghi là "chưa thiết kế" thay vì tự bịa.

## 1. Tổng quan

| Hạng mục | Nội dung |
|---|---|
| Tên | THE FALLEN – Kỷ Nguyên Siêu Nhân |
| Thể loại | Hành động 3D góc nhìn thứ ba, khám phá thế giới, nhiệm vụ và cốt truyện, single-player |
| Nền tảng | PC Browser, Mobile Browser (website, không native app) |
| Đồ họa | Stylized Realistic 3D / Semi-realistic low-poly; đô thị khoa học viễn tưởng; cân bằng chất lượng và hiệu năng; tương thích mobile và PC cấu hình thấp |
| Bối cảnh | Năm 2042 |
| Thiết bị ưu tiên | Mobile-first (iPhone 15 Pro Max); PC sau |

## 2. Gameplay

- **Điều khiển góc nhìn thứ ba:** di chuyển, camera tự do, điều khiển chạm trên mobile và bàn phím/chuột trên PC.
- **Khởi đầu yếu:** nhân vật chính bắt đầu yếu, phải dựa vào kỹ năng người chơi, môi trường (vật che, địa hình, vật phẩm) và thiết bị thay vì sức mạnh áp đảo.
- **Hấp thụ năng lực:** đánh bại hoặc tiếp cận người mang năng lực để hấp thụ; mỗi lần hấp thụ kích hoạt THE PRICE (mục 6).
- **Chiến đấu:** cận chiến, tấn công tầm xa cơ bản, né tránh, sử dụng năng lực đã hấp thụ; kết hợp năng lực theo phong cách người chơi (khoảng 30 kỹ năng).
- **Khám phá:** thành phố chính kết nối tương đối liền mạch; khu vực đặc biệt tải riêng khi vào.
- **Nhiệm vụ:** nhiệm vụ chính theo 5 chương + 15–20 side quests; lựa chọn của người chơi ảnh hưởng quan hệ phe phái và ending.
- **Thiết bị:** trang bị thu thập trong thế giới hỗ trợ lối chơi khi năng lực còn yếu.

## 3. Thế giới

- **NEXUS:** công nghệ tạo ra Enhanced — con người được cường hóa năng lực.
- **VANGUARD GLOBAL:** tổ chức kiểm soát công nghệ NEXUS và thao túng xã hội; là thế lực trung tâm của xung đột.
- **Thành phố chính:** khu vực mở, kết nối tương đối liền mạch, là trung tâm sinh hoạt, nhiệm vụ và NPC.
- **Khu vực đặc biệt:** 6 khu vực tổng cộng; khu vực đặc biệt được tải riêng (streaming/loading riêng) để tối ưu mobile.
- **Bối cảnh 2042:** đô thị khoa học viễn tưởng, kiểm soát xã hội bởi VANGUARD GLOBAL, tầng lớp Enhanced và thường dân.

## 4. Nhân vật

- **Nhân vật chính:** từng là nhân viên nghiên cứu của VANGUARD GLOBAL. Có khả năng hấp thụ năng lực. Khởi đầu yếu, phải dùng kỹ năng, môi trường và thiết bị. Hấp thụ năng lực luôn có cái giá (THE PRICE). Tên, ngoại hình, hồ sơ chi tiết: **chưa thiết kế**.
- **Nhân vật chính/cốt truyện:** 10–12 người (mục tiêu quy mô) — danh sách và hồ sơ: **chưa thiết kế**.
- **Người mang năng lực có story:** 12–20 người — **chưa thiết kế**.
- **NPC thường:** 20–30 NPC — **chưa thiết kế**.
- **Boss:** 5–6 boss — **chưa thiết kế**.

> Không tự thêm nhân vật ngoài danh sách quy mô này khi chưa cập nhật GDD và DECISION_LOG.

## 5. Hệ năng lực

Sáu hệ năng lực, tổng cộng 18–24 năng lực thu thập được, khoảng 30 kỹ năng. Danh sách dưới đây là **khung thiết kế** (ví dụ định hướng), chưa chốt danh sách cuối và chưa triển khai.

| Hệ | Định hướng thiết kế | Ví dụ năng lực (khung) |
|---|---|---|
| Energy | Tấn công và phòng thủ bằng năng lượng | Bắn năng lượng, lá chắn năng lượng, xung điện |
| Strength | Sức mạnh thể chất, cận chiến | Đấm phá, ném vật, cường hóa cơ bắp |
| Speed | Tốc độ, né tránh, di chuyển nhanh | Lướt nhanh, phản xạ tăng, phân thân bóng |
| Psychic | Tâm linh, điều khiển tâm trí | Đọc suy nghĩ, đẩy vật bằng ý niệm, gây rối loạn |
| Biological | Sinh học, hồi phục, biến đổi cơ thể | Hồi máu, độc sinh học, tái tạo |
| Shadow | Bóng tối, ẩn mình, ám sát | Tàng hình, dịch chuyển bóng, nhát chém bóng |

Quy tắc thiết kế:

- Mỗi năng lực hấp thụ được phải gắn với một biểu hiện của THE PRICE (mục 6).
- Năng lực phải khả thi trên mobile (hiệu ứng tối ưu, không phụ thuộc WebGPU).
- Danh sách cuối cùng chốt ở M3, ghi vào FEATURE_MATRIX và cập nhật GDD này.

## 6. THE PRICE — Cái giá của sức mạnh

Hấp thụ năng lực luôn có cái giá. THE PRICE gồm 5 biểu hiện và **phải ảnh hưởng thật đến gameplay, hội thoại, quan hệ, ký ức và ending — không chỉ là một thanh phạt**.

| Biểu hiện | Ảnh hưởng gameplay | Ảnh hưởng hội thoại / quan hệ / ký ức / ending |
|---|---|---|
| Suy thoái sinh học | Giảm thể lực tối đa, hiệu ứng hình thể thay đổi theo mức độ | NPC phản ứng với ngoại hình; một số ending bị khóa hoặc mở |
| Mất ký ức | Mất đánh dấu bản đồ, mất ghi nhớ nhiệm vụ cũ, gợi ý nhiệm vụ mờ dần | Hội thoại quên chi tiết; ký ức cốt truyện biến mất; ảnh hưởng điều kiện ending |
| Phân mảnh nhân cách | Xuất hiện "tiếng nói" can thiệp lựa chọn, thay đổi hành vi AI đồng đội | Lựa chọn hội thoại bị ảnh hưởng; quan hệ nhân vật thay đổi; ending thay đổi |
| Mất cảm xúc | Mất hiệu ứng buff cảm xúc, phản ứng nhân vật phẳng hơn | Hội thoại lạnh nhạt; quan hệ lãng mạn/thân thiết bị ảnh hưởng; ending thay đổi |
| Quá tải Nexus | Rủi ro mất kiểm soát năng lực (hiệu ứng ngẫu nhiên có kiểm soát), giới hạn số năng lực dùng đồng thời | VANGUARD có thể phát hiện; mở/đóng nhánh nhiệm vụ và ending |

Nguyên tắc:

- THE PRICE là hệ thống trung tâm, không phải hình phạt phụ. Mọi năng lực mới phải thiết kế kèm biểu hiện giá.
- Mức độ THE PRICE được lưu trong save (IndexedDB, sau này đồng bộ backend ở M7).
- Thiết kế chi tiết cơ chế (số liệu, ngưỡng, hiệu ứng) chốt ở M3–M5.

## 7. Phe phái

| Phe phái | Vai trò trong thế giới (khung thiết kế) |
|---|---|
| VANGUARD GLOBAL | Tổ chức kiểm soát NEXUS và thao túng xã hội; phe của nhân vật chính trong quá khứ |
| THE ASCENDANTS | Phe theo đuổi tiến hóa Enhanced vượt trội |
| THE UNDERGROUND | Phe kháng cự ngầm chống VANGUARD |
| BLACK MARKET | Phe chợ đen, buôn bán công nghệ/năng lực phi pháp |
| CIVILIAN FRONT | Phe dân thường, đại diện người không Enhanced |

Quan hệ giữa các phe và với nhân vật chính ảnh hưởng nhiệm vụ, hội thoại và ending. Chi tiết quan hệ: **chưa thiết kế**, chốt ở M4–M5.

## 8. Nhiệm vụ

- **Nhiệm vụ chính:** 5 chương, theo tuyến truyện chính.
- **Side quests:** 15–20 nhiệm vụ phụ, khám phá thế giới và nhân vật.
- Nhiệm vụ liên kết phe phái, THE PRICE và lựa chọn người chơi; kết quả ảnh hưởng ending.

## 9. Ending

Bốn ending mục tiêu:

| Ending | Định hướng (khung) |
|---|---|
| Liberation | Giải phóng — phá vỡ kiểm soát của VANGUARD |
| Ascension | Thăng hoa — trở thành Enhanced tối thượng |
| Extinction | Tuyệt chủng — hủy diệt NEXUS/Enhanced |
| New God | Tân thần — nhân vật chính trở thành thực thể chi phối mới |

Điều kiện đạt từng ending liên quan THE PRICE, quan hệ phe phái và lựa chọn cuối game. Chi tiết: **chưa thiết kế**, chốt ở M5.

## 10. Quan hệ và nội dung người lớn (M6)

- Hệ thống quan hệ với nhân vật (thân thiết, đồng minh, thù địch) ảnh hưởng hội thoại, nhiệm vụ và ending.
- Tùy chọn quan hệ lãng mạn với một số nhân vật, theo nguyên tắc: **đồng thuận rõ ràng, không ép buộc, không nội dung khiêu dâm trực diện**.
- Cài đặt nội dung trong game: cho phép tắt/mờ các yếu tố nhạy cảm.
- Phân loại độ tuổi và ranh giới nội dung chi tiết: **chưa chốt**, phải thiết kế và phê duyệt ở M6 trước khi triển khai; mọi thay đổi ghi vào DECISION_LOG.
- Nội dung M6 không được mâu thuẫn với THE PRICE (mất cảm xúc, phân mảnh nhân cách ảnh hưởng quan hệ).

## 11. Quy mô và giới hạn sản xuất

| Hạng mục | Mục tiêu |
|---|---|
| Năng lực thu thập | 18–24 |
| Kỹ năng | Khoảng 30 |
| Nhân vật chính/cốt truyện | 10–12 |
| Người mang năng lực có story | 12–20 |
| NPC | 20–30 |
| Boss | 5–6 |
| Side quests | 15–20 |
| Khu vực | 6 |
| Chương | 5 |
| Ending | 4 |

Giới hạn sản xuất:

- Ưu tiên hoàn thành vòng lặp gameplay cốt lõi trên mobile trước khi mở rộng nội dung.
- Mọi tài nguyên tuân thủ Zero Paid AI Pipeline và ASSET_MANIFEST (nguồn miễn phí, kiểm tra license, tối ưu cho mobile).
- Không tự thêm tính năng ngoài GDD; thêm tính năng phải cập nhật GDD, FEATURE_MATRIX và DECISION_LOG.
