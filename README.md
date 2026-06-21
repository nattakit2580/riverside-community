# Riverside Long-Stay Community — Website

เว็บไซต์แนะนำที่พักริมแม่น้ำแควน้อย กาญจนบุรี สไตล์ **Modern Riverside Retreat**
สำหรับกลุ่ม Digital Nomad, Remote Worker, Retiree และนักท่องเที่ยวที่ต้องการพักผ่อนริมแม่น้ำ

> ไม่ใช่รีสอร์ททั่วไป · ไม่ใช่โรงแรมในเมือง · เป็น **Riverside Long-Stay Community**

---

## 1. Positioning & Brand

| หัวข้อ | รายละเอียด |
|--------|------------|
| **Concept** | Riverside Long-Stay Community (บ้านพัก 3–4 หลัง) |
| **จุดแข็ง** | ธรรมชาติ · ริมแม่น้ำ · ความสงบ · ความเป็นส่วนตัว · ใกล้ตัวเมืองกาญจนบุรี |
| **กลุ่มเป้าหมาย** | Digital Nomad, Remote Worker, Retiree, นักท่องเที่ยวสายพักผ่อน |
| **อารมณ์** | Peaceful · Relaxing · Nature · Riverside Living |

### โทนสี (Color Palette)
| ชื่อ | สี | การใช้งาน |
|------|-----|-----------|
| Forest Green | `#2F4A3C` | สีหลัก หัวข้อ ปุ่ม |
| Sage | `#A3B18A` | สีรอง พื้นหลังอ่อน |
| Wood Brown | `#8B6F4E` | accent งานไม้ |
| Wood Dark | `#5C4632` | ข้อความเข้ม |
| Cream | `#F7F2E7` | พื้นหลังหลัก |
| Cream Light | `#FCFAF3` | พื้นหลังการ์ด |

### ฟอนต์
- **หัวข้อ:** Playfair Display (EN) + Noto Serif Thai (TH) — หรูสงบ
- **เนื้อหา:** Sarabun — อ่านง่าย รองรับไทย+อังกฤษ

---

## 2. โครงสร้างไฟล์ (Project Structure)

```
website RiversideCommunity/
├── index.html              # หน้าเดียว (one-page scroll) ทุก section
├── assets/
│   ├── css/
│   │   └── style.css        # Design system + ทุก style
│   ├── js/
│   │   ├── i18n.js          # คำแปล ไทย/อังกฤษ + ระบบสลับภาษา
│   │   └── main.js          # เมนู, scroll, gallery, ฟอร์ม
│   └── img/
│       └── README.md        # รายการรูปที่ต้องเตรียม + ขนาดแนะนำ
├── data/
│   └── (สำรองไว้สำหรับขยายในอนาคต)
└── README.md               # ไฟล์นี้
```

---

## 3. โครงหน้าเว็บ (Page Sections)

หน้าเดียวเลื่อนยาว (one-page) เน้นภาพใหญ่เต็มจอตามสไตล์ที่ต้องการ:

1. **Hero** — ภาพแม่น้ำเต็มจอ + headline + ปุ่ม "สอบถามที่พัก"
2. **Positioning** — ไม่ใช่รีสอร์ท ไม่ใช่โรงแรม → Long-Stay Community
3. **Experience** — 4 จุดแข็ง: ธรรมชาติ / ริมแม่น้ำ / สงบ / เป็นส่วนตัว
4. **Houses** — บ้านพัก 3–4 หลัง พร้อมรูปและจุดเด่นแต่ละหลัง
5. **For Whom** — Digital Nomad / Remote Worker / Retiree / Traveler
6. **Gallery** — แกลเลอรีบรรยากาศ (พระอาทิตย์ตก, บ้านไม้, สนามหญ้า)
7. **Location** — ใกล้ตัวเมืองกาญจนบุรี + แผนที่
8. **Contact** — ฟอร์มสอบถาม + ปุ่ม LINE/โทรด่วน
9. **Footer**

---

## 4. การพัฒนา (Roadmap)

- [x] **Phase 1 — Foundation:** โครงสร้างไฟล์, design system, โครงหน้า, ระบบ 2 ภาษา
- [ ] **Phase 2 — Content:** ใส่ภาพจริง, ข้อความจริง, ข้อมูลบ้านแต่ละหลัง, ราคา
- [ ] **Phase 3 — Form:** เชื่อมฟอร์มกับ Formspree/Netlify Forms + ลิงก์ LINE/โทรจริง
- [ ] **Phase 4 — Polish:** SEO, Open Graph, favicon, optimize รูป, animation
- [ ] **Phase 5 — Deploy:** ขึ้น Netlify/Vercel + โดเมนจริง

---

## 5. วิธีดูเว็บ (Run Locally)

ไม่ต้องติดตั้งอะไร — เปิดไฟล์ `index.html` ด้วยเบราว์เซอร์ได้เลย
หรือรันเซิร์ฟเวอร์เล็ก ๆ เพื่อให้เหมือนจริง:

```powershell
# ถ้ามี Python
python -m http.server 8000
# แล้วเปิด http://localhost:8000
```

## 6. การนำขึ้นออนไลน์ (Deploy)

- **Netlify / Vercel:** ลากโฟลเดอร์นี้วาง หรือเชื่อม Git — ได้ฟรี + รองรับฟอร์ม
- รองรับโดเมนของตัวเองได้ (เช่น riverside-kanchanaburi.com)
