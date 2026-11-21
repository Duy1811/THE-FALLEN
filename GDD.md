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

### Sáu khu vực chính (đã chốt)

| Khu vực | Vai trò dự kiến |
|---|---|
| New Eden | Thành phố chính, kết nối tương đối liền mạch; trung tâm sinh hoạt, nhiệm vụ và NPC |
| Iron District | Khu công nghiệp và lao động nặng; không gian khắc nghiệt, nơi tập trung tầng lớp lao động |
| Silver Coast | Khu ven biển, giao thương và dịch vụ; đối lập giàu — nghèo trong thành phố |
| Old Quarter | Khu phố cũ, dân cư thường; lưu giữ ký ức và lịch sử của thành phố |
| Blacksite 09 | Cơ sở bí mật của VANGUARD GLOBAL; khu vực đặc biệt, tải riêng, hạn chế truy cập |
| Vanguard Tower | Trung tâm quyền lực của VANGUARD GLOBAL; khu vực đặc biệt, tải riêng |

> Đây là mô tả chức năng và vai trò dự kiến của từng khu vực. Cốt truyện chi tiết, bản đồ và nội dung từng khu vực **chưa được phê duyệt**, chốt ở M2–M5. Không tự ý tạo cốt truyện chi tiết chưa được phê duyệt.

## 4. Nhân vật

- **Nhân vật chính:** từng là nhân viên nghiên cứu của VANGUARD GLOBAL. Có khả năng hấp thụ năng lực. Khởi đầu yếu, phải dùng kỹ năng, môi trường và thiết bị. Hấp thụ năng lực luôn có cái giá (THE PRICE). Tên, ngoại hình, hồ sơ chi tiết: **chưa thiết kế**.
- **Nhân vật chính/cốt truyện:** 10–12 người (mục tiêu quy mô) — Seraphine (mục dưới) là nhân vật đầu tiên đã có hồ sơ đã chốt; các nhân vật còn lại: **chưa thiết kế**.
- **Người mang năng lực có story:** 12–20 người — **chưa thiết kế**.
- **NPC thường:** 20–30 NPC — **chưa thiết kế**.
- **Boss:** 5–6 boss — **chưa thiết kế**.

### Seraphine – The Healer (đã chốt)

- Là **phụ nữ trưởng thành**.
- Sở hữu năng lực **Absolute Restoration** — khả năng hồi phục tuyệt đối.
- Dùng năng lực để **cứu chữa người nghèo** trong thành phố.
- Người chơi có thể: **bảo vệ** cô, **giúp đỡ** cô, **xây dựng quan hệ** với cô, hoặc **lựa chọn hấp thụ năng lực** của cô.
- Nếu người chơi hấp thụ năng lực của Seraphine, **những bệnh nhân phụ thuộc vào cô sẽ bị ảnh hưởng**.
- Phải có **phương án thay thế** để bệnh nhân tiếp tục được cứu chữa (chi tiết phương án chốt ở M5; không tự bịa chi tiết chưa được phê duyệt).
- Hấp thụ năng lực của Seraphine kích hoạt THE PRICE như mọi lần hấp thụ khác.
- Chi tiết tuyến quan hệ và kết thúc liên quan Seraphine: **chưa được phê duyệt**, không tự tạo thêm.

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

### Năm loại quan hệ (đã chốt)

| Loại quan hệ | Ảnh hưởng dự kiến |
|---|---|
| Friendship (Tình bạn) | Hội thoại thân thiện, nhiệm vụ hỗ trợ lẫn nhau, hành vi nhân vật tích cực |
| Attraction (Hấp dẫn) | Điều kiện mở tuyến lãng mạn, thay đổi hội thoại và hành vi nhân vật |
| Romance (Lãng mạn) | Quan hệ lãng mạn có sự đồng thuận; ảnh hưởng nhiệm vụ và kết quả cốt truyện (chi tiết chốt ở M6) |
| Trust (Tin cậy) | Chia sẻ thông tin, hợp tác trong nhiệm vụ, quyết định hỗ trợ hoặc phản bội |
| Conflict (Mâu thuẫn) | Đối đầu, thay đổi hành vi nhân vật, ảnh hưởng phe phái và kết quả cốt truyện |

Quan hệ ảnh hưởng đến **hội thoại, nhiệm vụ, hành vi nhân vật và kết quả cốt truyện**. Chi tiết cơ chế (số liệu, ngưỡng, tuyến cụ thể) chốt ở M6.

### Giới hạn nội dung 18+ (đã chốt)

Game có thể chứa các yếu tố sau, trong giới hạn đã chốt:

- **Bạo lực hư cấu.**
- **Ngôn ngữ mạnh.**
- **Tình cảm và yếu tố gợi cảm.**
- **Cảnh thân mật có sự đồng thuận.**
- Nhân vật trong nội dung thân mật **phải là người trưởng thành**.
- **Không** biến bạo lực cưỡng ép thành nội dung tình dục.
- **Không** phát triển game thành sản phẩm khiêu dâm; **không** mô tả tình dục trực diện.
- Có **cảnh báo nội dung** và tùy chọn **giảm mức độ máu me, nhạy cảm** trong cài đặt.

Phân loại độ tuổi chính thức và chi tiết triển khai: chốt ở M6; mọi thay đổi ghi vào DECISION_LOG. Nội dung M6 không được mâu thuẫn với THE PRICE (mất cảm xúc, phân mảnh nhân cách ảnh hưởng quan hệ).

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
