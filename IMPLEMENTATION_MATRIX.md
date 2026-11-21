# IMPLEMENTATION_MATRIX — Ma trận triển khai THE FALLEN

> Quy tắc bắt buộc: **không đánh dấu hoàn thành nếu chưa có bằng chứng**. "Tài liệu" chỉ chứng minh thiết kế đã viết; "Mã nguồn" và "Test" phải có bằng chứng thực tế (commit, CI, TEST_REPORT) mới được đánh dấu Implemented/Verified.

| # | Tính năng | Tài liệu | Mã nguồn | Test | Trạng thái | Bằng chứng |
|---|---|---|---|---|---|---|
| F-01 | Bộ tài liệu nền tảng (Giai đoạn A) | Implemented — 14 tệp Markdown + `.gitignore` | Không áp dụng (không có mã nguồn game) | Không áp dụng | Implemented | Tệp trong repo; kiểm tra liên kết/nhất quán đã thực hiện |
| F-02 | Scaffolding React + TS + Vite + Three.js | Implemented — TECHNICAL_ARCHITECTURE | Implemented — `src/app/`, `src/graphics/`, Vite/TS configs, workflow CI | Verified sandbox — typecheck/build/4 Vitest/5 Chromium Playwright; CI typecheck/build/unit/E2E thành công | Partial — chưa có iPhone thật | 2026-11-21: [log M1](evidence/M1_LOCAL_VERIFICATION.md), [CI `2012aa6`, job `136788903622`: 10 passed / 0 skipped / 0 failed](https://github.com/Duy1811/THE-FALLEN/actions/runs/44885207389/job/136788903622), [TEST_REPORT](TEST_REPORT.md) |
| F-03 | Kiểm tra WebGL 2 | Implemented — TECHNICAL_ARCHITECTURE | Implemented — `getWebGL2Context`, Three.js renderer, fallback, WebGPU API tùy chọn | Verified sandbox — unit, Chromium renderer `ready`, fallback giả lập; E2E chạy CI; iPhone thật Blocked | Partial — chưa xác nhận thiết bị thật | 2026-11-21: [log M1](evidence/M1_LOCAL_VERIFICATION.md), [CI `2012aa6`, job `136788903622`: 10 passed / 0 skipped / 0 failed](https://github.com/Duy1811/THE-FALLEN/actions/runs/44885207389/job/136788903622), [TEST_REPORT](TEST_REPORT.md) |
| F-04 | Nhân vật góc nhìn thứ ba | Implemented — GDD, ROADMAP M2 | Not Started | Not Started | Not Started | — |
| F-05 | Thành phố chính | Implemented — GDD, ROADMAP M2 | Not Started | Not Started | Not Started | — |
| F-06 | Khu vực tải riêng | Implemented — GDD, ROADMAP M2 | Not Started | Not Started | Not Started | — |
| F-07 | Asset pipeline GLB | Implemented — TECHNICAL_ARCHITECTURE, ASSET_MANIFEST | Not Started | Not Started | Not Started | — |
| F-08 | Physics Rapier | Implemented — TECHNICAL_ARCHITECTURE | Not Started | Not Started | Not Started | — |
| F-09 | 6 hệ năng lực | Implemented — GDD mục 5 | Not Started | Not Started | Not Started | — |
| F-10 | Hấp thụ năng lực | Implemented — GDD mục 2, 5 | Not Started | Not Started | Not Started | — |
| F-11 | THE PRICE | Implemented — GDD mục 6 | Not Started | Not Started | Not Started | — |
| F-12 | Hệ chiến đấu | Implemented — GDD mục 2 | Not Started | Not Started | Not Started | — |
| F-13 | NPC và AI | Implemented — GDD mục 4, ROADMAP M4 | Not Started | Not Started | Not Started | — |
| F-14 | 5 phe phái | Implemented — GDD mục 7 | Not Started | Not Started | Not Started | — |
| F-15 | Tương tác môi trường/thiết bị | Implemented — GDD mục 2 | Not Started | Not Started | Not Started | — |
| F-16 | 5 chương nhiệm vụ chính | Implemented — GDD mục 8 | Not Started | Not Started | Not Started | — |
| F-17 | 15–20 side quests | Implemented — GDD mục 8 | Not Started | Not Started | Not Started | — |
| F-18 | 5–6 boss | Implemented — GDD mục 4 | Not Started | Not Started | Not Started | — |
| F-19 | 4 ending | Implemented — GDD mục 9 | Not Started | Not Started | Not Started | — |
| F-20 | Hệ thống quan hệ | Implemented — GDD mục 10 | Not Started | Not Started | Not Started | — |
| F-21 | Quan hệ lãng mạn theo ranh giới | Implemented — GDD mục 10 | Not Started | Not Started | Not Started | — |
| F-22 | Cài đặt nội dung/phân loại độ tuổi | Implemented — GDD mục 10 | Not Started | Not Started | Not Started | — |
| F-23 | Local save IndexedDB | Implemented — TECHNICAL_ARCHITECTURE mục 5 | Not Started | Not Started | Not Started | — |
| F-24 | Account/cloud save API + PostgreSQL | Implemented — TECHNICAL_ARCHITECTURE mục 6 | Not Started | Not Started | Not Started | — |
| F-25 | Tối ưu và QA toàn diện | Implemented — ROADMAP M8 | Not Started | Not Started | Not Started | — |
| F-26 | Sáu khu vực chính | Implemented — GDD mục 3, D-012 | Not Started | Not Started | Not Started | — |
| F-27 | Năm loại quan hệ | Implemented — GDD mục 10, D-013 | Not Started | Not Started | Not Started | — |
| F-28 | Seraphine – The Healer | Implemented — GDD mục 4, D-014 | Not Started | Not Started | Not Started | — |
| F-29 | Giới hạn nội dung 18+ và cài đặt nội dung | Implemented — GDD mục 10, D-015 | Not Started | Not Started | Not Started | — |

## Quy tắc cập nhật

- Khi triển khai một tính năng: cập nhật cột Mã nguồn, Test, Trạng thái và Bằng chứng (commit ID, link CI, mục trong TEST_REPORT).
- Chỉ đánh dấu **Verified** khi đã chạy/kiểm tra thực tế và có bằng chứng trong [TEST_REPORT.md](TEST_REPORT.md).
- Không xóa dòng; thay đổi trạng thái phải kèm ngày và bằng chứng.
