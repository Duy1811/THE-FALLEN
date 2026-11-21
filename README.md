# THE FALLEN – Kỷ Nguyên Siêu Nhân

> **Trạng thái hiện tại:** M1 Project Foundation — **Partial**. Đã có ứng dụng khung, WebGL 2 diagnostic, test và workflow CI; kiểm thử Safari/WebGL 2 trên iPhone 15 Pro Max thật vẫn chưa thực hiện. **Chưa có gameplay.**
> Tài liệu thiết kế và [DECISION_LOG.md](DECISION_LOG.md) vẫn là cơ sở quyết định; xem [PROJECT_STATE.md](PROJECT_STATE.md) và [TEST_REPORT.md](TEST_REPORT.md) để phân biệt Implemented / Verified / Blocked.

## Giới thiệu

**THE FALLEN – Kỷ Nguyên Siêu Nhân** là game hành động 3D góc nhìn thứ ba, single-player, kết hợp khám phá thế giới, nhiệm vụ và cốt truyện. Người chơi vào vai một cựu nhân viên nghiên cứu của tổ chức VANGUARD GLOBAL — người có khả năng hấp thụ năng lực của kẻ khác, nhưng mỗi lần hấp thụ đều phải trả một cái giá.

Bối cảnh: năm 2042. Công nghệ NEXUS tạo ra những con người Enhanced. VANGUARD GLOBAL kiểm soát công nghệ và thao túng xã hội. Thành phố chính kết nối tương đối liền mạch; các khu vực đặc biệt được tải riêng.

## Mục tiêu

- Xây dựng một game web 3D chạy trên trình duyệt, ưu tiên **mobile-first** (thiết bị kiểm thử chính: iPhone 15 Pro Max), tương thích PC cấu hình thấp.
- Đồ họa **Stylized Realistic 3D / Semi-realistic low-poly**, cân bằng chất lượng hình ảnh và hiệu năng.
- Hệ năng lực 6 nhóm (Energy, Strength, Speed, Psychic, Biological, Shadow) với quy mô mục tiêu 18–24 năng lực, khoảng 30 kỹ năng.
- Cơ chế **THE PRICE** (suy thoái sinh học, mất ký ức, phân mảnh nhân cách, mất cảm xúc, quá tải Nexus) ảnh hưởng thật đến gameplay, hội thoại, quan hệ, ký ức và ending — không chỉ là một thanh phạt.
- 5 phe phái, 5 chương, 6 khu vực, 4 ending (Liberation, Ascension, Extinction, New God).
- Tuân thủ **Zero Paid AI Pipeline**: không mua API key AI, không dùng AI API trả phí, ưu tiên phần mềm mã nguồn mở và tài nguyên miễn phí có kiểm tra license.

## Nền tảng

- PC Browser và Mobile Browser (website, không phát triển native app).
- WebGL 2 là nền tảng đồ họa **bắt buộc**; WebGPU chỉ là tùy chọn khi thiết bị hỗ trợ.
- Ưu tiên phát triển và kiểm thử trên mobile trước; PC được sử dụng khi có thông báo sẵn sàng.

## Công nghệ đã chốt

| Lớp | Công nghệ |
|---|---|
| Frontend | React, TypeScript, Vite |
| 3D | Three.js, WebGL 2 (bắt buộc), WebGPU (tùy chọn) |
| Physics | Rapier |
| Asset 3D | GLB / glTF |
| Lưu trữ local | IndexedDB |
| Backend | API + PostgreSQL (tài khoản / cloud save) |
| Kiểm thử | Vitest, Playwright |
| Quản lý | GitHub (mã nguồn và tài liệu chính) |

> Stack này đã chốt, không tự ý thay đổi. Chi tiết: [TECHNICAL_ARCHITECTURE.md](TECHNICAL_ARCHITECTURE.md), quyết định: [DECISION_LOG.md](DECISION_LOG.md).

## Chạy ứng dụng M1

Yêu cầu Node.js **22.12+** và npm. M1 chỉ là trang kiểm tra kỹ thuật; chưa có nhân vật, gameplay, physics, save hay backend.

```bash
npm ci
npm run dev                 # Vite bind 0.0.0.0; mặc định cổng 5173
npm run typecheck
npm run build
npm run test:unit
npx playwright install --with-deps chromium webkit  # tải browser cho Playwright
npm run test:e2e            # Chromium mobile viewport + WebKit giả lập iPhone 15 Pro Max
npm run preview             # xem bản build sau npm run build
```

Mở `http://localhost:5173` trên máy chạy server; trên thiết bị khác, dùng địa chỉ LAN của máy hoặc **preview tạm thời** do môi trường phát triển cung cấp. Không có website public/hosting được triển khai. CI chạy các lệnh build, typecheck, Vitest và Playwright khi mở PR vào `main` ([workflow](.github/workflows/ci.yml)). Nếu không cài được browser Playwright do giới hạn mạng của môi trường, xem [TEST_REPORT.md](TEST_REPORT.md) thay vì coi đó là test thành công.

### Cấu trúc frontend M1

| Đường dẫn | Vai trò |
|---|---|
| `src/app/` | UI React cho trang nền tảng và thông báo tình trạng thiết bị |
| `src/graphics/` | WebGL 2 detection và scene hình học Three.js **chỉ để chẩn đoán**, không phải thế giới game; WebGPU chỉ hiện trạng thái API |
| `src/main.tsx`, `src/styles.css` | Entry point và CSS mobile-first, không tải asset ngoài |
| `tests/e2e/` | Playwright: trang chính, fallback WebGL 2, WebGPU tùy chọn, viewport mobile, renderer khi có WebGL 2 |
| `.github/workflows/ci.yml` | GitHub Actions cho `npm ci`, typecheck, build, unit và E2E |
| `evidence/` | Log kiểm thử cục bộ nhỏ; ảnh chụp và output build không commit |

Các lớp `Game`, `Data`, `Save` và physics Rapier là **kiến trúc dự kiến cho milestone sau** theo [TECHNICAL_ARCHITECTURE.md](TECHNICAL_ARCHITECTURE.md), không được khởi tạo chức năng game trong M1. Chỉ WebGL 2 được cấp cho `THREE.WebGLRenderer`; nếu không có WebGL 2 hoặc mất context, UI hiển thị lý do và cách thử lại. WebGPU **không** được dùng để render và dấu hiệu “phát hiện API” **không** đồng nghĩa adapter dùng được.

### Xác minh trên thiết bị thật để nghiệm thu M1

1. Mở preview tạm thời (hoặc dev server có thể truy cập) **trên Safari của iPhone 15 Pro Max thật**.
2. Kiểm tra trang không tràn ngang, khung hình học Three.js xuất hiện và thẻ WebGL 2 báo **SẴN SÀNG**; ghi lại phiên bản iOS/Safari, thời điểm, ảnh chụp hoặc log.
3. Kiểm tra WebGPU không ảnh hưởng kết quả WebGL 2; kiểm thử thông báo không hỗ trợ bằng tự động hóa, không cần làm hỏng thiết bị.
4. Ghi bằng chứng vào [TEST_REPORT.md](TEST_REPORT.md) trước khi đánh dấu M1 hoàn thành. Mô phỏng Playwright không chứng minh iPhone thật đã chạy.

## Roadmap (tóm tắt)

| Milestone | Nội dung | Trạng thái |
|---|---|---|
| M1 | Project Foundation | Partial — ứng dụng khung và test cục bộ đã có; chờ xác minh CI và iPhone Safari thật |
| M2 | Character & 3D World | Not Started |
| M3 | Abilities & Combat | Not Started |
| M4 | NPC & World Systems | Not Started |
| M5 | Story & Missions | Not Started |
| M6 | Relationships & Adult Content | Not Started |
| M7 | Backend & Save System | Not Started |
| M8 | Polish, QA & Handoff | Not Started |

Chi tiết từng milestone: [ROADMAP.md](ROADMAP.md). Trạng thái chi tiết: [PROJECT_STATE.md](PROJECT_STATE.md).

## Hướng dẫn sử dụng repository

- **Đọc trạng thái dự án:** [PROJECT_STATE.md](PROJECT_STATE.md) → [NEXT_TASK.md](NEXT_TASK.md).
- **Thiết kế game:** [GDD.md](GDD.md).
- **Kiến trúc kỹ thuật:** [TECHNICAL_ARCHITECTURE.md](TECHNICAL_ARCHITECTURE.md).
- **Quyết định đã chốt:** [DECISION_LOG.md](DECISION_LOG.md) — không tự ý thay đổi; thay đổi phải ghi lý do và trạng thái phê duyệt.
- **Ma trận tính năng / triển khai:** [FEATURE_MATRIX.md](FEATURE_MATRIX.md), [IMPLEMENTATION_MATRIX.md](IMPLEMENTATION_MATRIX.md).
- **Tài nguyên:** [ASSET_MANIFEST.md](ASSET_MANIFEST.md).
- **Lỗi / kiểm thử:** [BUG_TRACKER.md](BUG_TRACKER.md), [TEST_REPORT.md](TEST_REPORT.md).
- **Lịch sử thay đổi:** [CHANGELOG.md](CHANGELOG.md).
- **Bàn giao sang cuộc trò chuyện mới:** [HANDOFF_REPORT.md](HANDOFF_REPORT.md).

### Quy tắc Git

- `main`: nhánh ổn định. `develop`: nhánh phát triển. `feature/*`: tính năng. `fix/*`: sửa lỗi.
- Không force push, không xóa lịch sử, không ghi đè thay đổi của người dùng.
- Commit rõ ràng, gắn tag khi hoàn thành milestone, dùng Pull Request để đưa thay đổi vào `main`.
- Không tự tạo branch mới nếu chưa cần thiết, không tự merge vào `main`.

### Quy tắc trạng thái

Chỉ dùng 5 trạng thái sau trong toàn bộ tài liệu:

- **Verified:** đã chạy hoặc kiểm tra thực tế, có bằng chứng.
- **Implemented:** đã triển khai nhưng chưa xác minh đầy đủ.
- **Partial:** hoàn thành một phần.
- **Blocked:** đang bị chặn.
- **Not Started:** chưa bắt đầu.

> Không được đánh dấu Verified chỉ vì tài liệu đã được viết.

## Chi phí cần lưu ý

Dự án tuân thủ Zero Paid AI Pipeline, nhưng các chi phí hạ tầng sau đây **có thể phát sinh** và phải được ghi rõ khi triển khai: hosting, domain, database, storage. Không giả định dịch vụ miễn phí là miễn phí vĩnh viễn hoặc không giới hạn. Chi tiết: [TECHNICAL_ARCHITECTURE.md](TECHNICAL_ARCHITECTURE.md#chi-phí-hạ-tầng-có-thể-phát-sinh), [ASSET_MANIFEST.md](ASSET_MANIFEST.md#quy-tắc-nguồn-và-license).
