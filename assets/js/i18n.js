/* =========================================================
   i18n.js — ระบบ 2 ภาษา (ไทย / อังกฤษ)
   ใช้ data-i18n="key" ใน HTML แล้วสคริปต์จะแทนข้อความให้
   ฝังคำแปลไว้ในไฟล์นี้เลย เพื่อให้เปิดแบบ file:// ได้โดยไม่ติด CORS
   ========================================================= */

const I18N = {
  th: {
    "nav.home": "หน้าแรก",
    "nav.about": "แนวคิด",
    "nav.houses": "บ้านพัก",
    "nav.experience": "ประสบการณ์",
    "nav.gallery": "แกลเลอรี",
    "nav.location": "ที่ตั้ง",
    "nav.contact": "ติดต่อ",
    "nav.cta": "สอบถามที่พัก",

    "hero.tagline": "ริมแม่น้ำแควน้อย · กาญจนบุรี",
    "hero.title": "ใช้ชีวิตช้า ๆ ริมแม่น้ำ",
    "hero.subtitle": "ชุมชนบ้านพักระยะยาวท่ามกลางธรรมชาติ ความสงบ และความเป็นส่วนตัว",
    "hero.cta": "สอบถามที่พัก",
    "hero.cta2": "ดูบ้านพัก",
    "hero.scroll": "เลื่อนลง",
    "hero.est": "ก่อตั้ง 2026",

    "pos.label": "แนวคิด",
    "pos.title": "ไม่ใช่รีสอร์ท ไม่ใช่โรงแรม",
    "pos.text": "ที่นี่คือ Riverside Long-Stay Community — ชุมชนบ้านพักริมแม่น้ำเพียงไม่กี่หลัง ออกแบบมาเพื่อการอยู่อาศัยอย่างแท้จริง ไม่ใช่แค่แวะพักหนึ่งคืน คุณจะได้ตื่นมาพร้อมเสียงน้ำ ทำงานริมระเบียง และใช้ชีวิตในจังหวะของตัวเอง",
    "pos.point1": "ส่วนตัวเพียงไม่กี่หลัง ไม่พลุกพล่าน",
    "pos.point2": "เหมาะกับการพักยาวเป็นสัปดาห์หรือเป็นเดือน",
    "pos.point3": "ใกล้ตัวเมืองกาญจนบุรี เดินทางสะดวก",

    "exp.label": "ทำไมต้องที่นี่",
    "exp.title": "ประสบการณ์ริมแม่น้ำ",
    "exp.nature.title": "ธรรมชาติ",
    "exp.nature.text": "ล้อมรอบด้วยต้นไม้ สนามหญ้าเขียว และอากาศบริสุทธิ์",
    "exp.river.title": "ริมแม่น้ำ",
    "exp.river.text": "วิวแม่น้ำแควน้อยตรงหน้า ฟังเสียงน้ำได้ทั้งวัน",
    "exp.peace.title": "ความสงบ",
    "exp.peace.text": "ห่างจากความวุ่นวาย เหมาะกับการพักผ่อนและโฟกัส",
    "exp.privacy.title": "ความเป็นส่วนตัว",
    "exp.privacy.text": "พื้นที่ส่วนตัวของแต่ละหลัง ไม่รบกวนกัน",

    "aerial.label": "ภาพมุมสูง",
    "aerial.title": "มองจากมุมสูง",
    "aerial.text": "ผังชุมชนบ้านพักทั้งเจ็ดหลัง วางตัวไปตามแนวริมแม่น้ำแควน้อย ท่ามกลางสวนเขียวและต้นไม้ใหญ่",

    "houses.label": "ที่พัก",
    "houses.title": "บ้านพักของเรา",
    "houses.subtitle": "บ้านไม้เจ็ดหลัง แต่ละหลังมีเสน่ห์เฉพาะตัว เลือกชมได้ทั้งตัวบ้าน ห้องนอน ห้องน้ำ และสวน",
    "houses.h1.name": "บ้านริมน้ำ",
    "houses.h1.desc": "บ้านไม้ติดแม่น้ำที่สุด เห็นวิวเต็มตาจากระเบียง",
    "houses.h2.name": "บ้านสวน",
    "houses.h2.desc": "ล้อมรอบด้วยสวนและสนามหญ้า เงียบสงบเป็นพิเศษ",
    "houses.h3.name": "บ้านครอบครัว",
    "houses.h3.desc": "พื้นที่กว้างขวาง เหมาะกับการพักยาวเป็นกลุ่ม",
    "houses.h4.name": "บ้านสตูดิโอ",
    "houses.h4.desc": "ขนาดกะทัดรัด มุมทำงานพร้อม เหมาะกับคนทำงานทางไกล",
    "houses.h5.name": "บ้านระเบียงไม้",
    "houses.h5.desc": "ระเบียงไม้ยื่นออกไปเหนือสวน นั่งจิบกาแฟรับลมเย็นยามเช้า",
    "houses.h6.name": "บ้านใต้ร่มไม้",
    "houses.h6.desc": "ซ่อนตัวอยู่ใต้ร่มไม้ใหญ่ ร่มรื่นและเป็นส่วนตัวตลอดวัน",
    "houses.h7.name": "บ้านปลายน้ำ",
    "houses.h7.desc": "หลังสุดท้ายปลายชุมชน เงียบสงบและเป็นส่วนตัวที่สุด",
    "houses.feature.wifi": "Wi-Fi",
    "houses.feature.workspace": "มุมทำงาน",
    "houses.feature.kitchen": "ครัว",
    "houses.feature.river": "วิวแม่น้ำ",
    "houses.feature.deck": "ระเบียงไม้",
    "houses.feature.garden": "สวนส่วนตัว",
    "houses.feature.private": "เป็นส่วนตัว",
    "houses.view.exterior": "ตัวบ้าน",
    "houses.view.bedroom": "ห้องนอน",
    "houses.view.bathroom": "ห้องน้ำ",
    "houses.view.garden": "สวน",
    "houses.cta": "สอบถามหลังนี้",

    "for.label": "เหมาะกับใคร",
    "for.title": "ที่นี่เพื่อคุณ",
    "for.nomad.title": "Digital Nomad",
    "for.nomad.text": "Wi-Fi เสถียร มุมทำงานริมน้ำ บรรยากาศที่ช่วยให้โฟกัส",
    "for.remote.title": "Remote Worker",
    "for.remote.text": "หนีเมืองมาทำงานในที่ที่หายใจได้เต็มปอด",
    "for.retiree.title": "Retiree",
    "for.retiree.text": "ใช้ชีวิตช้า ๆ อย่างสงบ ใกล้ชิดธรรมชาติ",
    "for.traveler.title": "นักท่องเที่ยว",
    "for.traveler.text": "พักผ่อนริมแม่น้ำ ใกล้แหล่งท่องเที่ยวกาญจนบุรี",

    "gallery.label": "บรรยากาศ",
    "gallery.title": "แกลเลอรี",

    "loc.label": "ที่ตั้ง",
    "loc.title": "ใกล้ตัวเมืองกาญจนบุรี",
    "loc.text": "ตั้งอยู่ริมแม่น้ำแควน้อย ห่างจากตัวเมืองกาญจนบุรีเพียงไม่กี่นาที สงบเหมือนอยู่ไกล แต่สะดวกเหมือนอยู่ใกล้",
    "loc.distance1": "ถึงตัวเมืองกาญจนบุรี",
    "loc.distance2": "ถึงสะพานข้ามแม่น้ำแคว",
    "loc.distance3": "ถึงสนามบินสุวรรณภูมิ",
    "loc.map": "เปิดใน Google Maps",

    "contact.label": "ติดต่อ",
    "contact.title": "สอบถามที่พัก",
    "contact.subtitle": "ทิ้งข้อความไว้ แล้วเราจะติดต่อกลับโดยเร็วที่สุด",
    "contact.name": "ชื่อ",
    "contact.namePh": "ชื่อของคุณ",
    "contact.email": "อีเมล",
    "contact.emailPh": "you@email.com",
    "contact.phone": "เบอร์โทร / LINE",
    "contact.phonePh": "เบอร์ติดต่อหรือ LINE ID",
    "contact.dates": "ช่วงเวลาที่สนใจ",
    "contact.datesPh": "เช่น ก.ค. – ส.ค. 2026",
    "contact.message": "ข้อความ",
    "contact.messagePh": "บอกเราเกี่ยวกับการพักของคุณ...",
    "contact.send": "ส่งข้อความ",
    "contact.or": "หรือติดต่อด่วน",
    "contact.line": "แชท LINE",
    "contact.call": "โทรเลย",
    "contact.success": "ส่งข้อความเรียบร้อย ขอบคุณครับ เราจะติดต่อกลับโดยเร็ว",

    "footer.tagline": "ชุมชนบ้านพักริมแม่น้ำแควน้อย กาญจนบุรี",
    "footer.nav": "เมนู",
    "footer.contact": "ติดต่อ",
    "footer.follow": "ติดตามเรา",
    "footer.rights": "สงวนลิขสิทธิ์"
  },

  en: {
    "nav.home": "Home",
    "nav.about": "Concept",
    "nav.houses": "Houses",
    "nav.experience": "Experience",
    "nav.gallery": "Gallery",
    "nav.location": "Location",
    "nav.contact": "Contact",
    "nav.cta": "Enquire",

    "hero.tagline": "Riverside · Kanchanaburi, Thailand",
    "hero.title": "Live slow by the river",
    "hero.subtitle": "A long-stay riverside community surrounded by nature, calm and privacy",
    "hero.cta": "Enquire now",
    "hero.cta2": "View houses",
    "hero.scroll": "Scroll",
    "hero.est": "Est. 2026",

    "pos.label": "The Concept",
    "pos.title": "Not a resort. Not a hotel.",
    "pos.text": "This is a Riverside Long-Stay Community — just a handful of riverside houses designed for living, not for a single night's stay. Wake to the sound of the river, work from the deck, and move at your own pace.",
    "pos.point1": "Only a few private houses, never crowded",
    "pos.point2": "Made for long stays — by the week or by the month",
    "pos.point3": "Minutes from Kanchanaburi town, easy to reach",

    "exp.label": "Why here",
    "exp.title": "The Riverside Experience",
    "exp.nature.title": "Nature",
    "exp.nature.text": "Surrounded by trees, green lawns and fresh air",
    "exp.river.title": "Riverside",
    "exp.river.text": "The Khwae Noi River right in front of you, all day long",
    "exp.peace.title": "Peace",
    "exp.peace.text": "Away from the noise — perfect to rest and to focus",
    "exp.privacy.title": "Privacy",
    "exp.privacy.text": "Each house has its own private space",

    "aerial.label": "From above",
    "aerial.title": "Seen from above",
    "aerial.text": "All seven houses laid out along the bank of the Khwae Noi River, among green gardens and tall trees.",

    "houses.label": "Stay",
    "houses.title": "Our Houses",
    "houses.subtitle": "Seven wooden houses, each with its own character — view the house, bedroom, bathroom and garden.",
    "houses.h1.name": "Riverside House",
    "houses.h1.desc": "Closest to the water, with full river views from the deck",
    "houses.h2.name": "Garden House",
    "houses.h2.desc": "Wrapped in garden and lawn, exceptionally quiet",
    "houses.h3.name": "Family House",
    "houses.h3.desc": "Spacious and ideal for longer group stays",
    "houses.h4.name": "Studio House",
    "houses.h4.desc": "Compact with a ready workspace, perfect for remote workers",
    "houses.h5.name": "Deck House",
    "houses.h5.desc": "A wooden deck reaching over the garden — morning coffee in the cool breeze",
    "houses.h6.name": "Canopy House",
    "houses.h6.desc": "Tucked beneath tall trees, shaded and private all day long",
    "houses.h7.name": "Cove House",
    "houses.h7.desc": "The last house at the end of the community — the quietest and most private",
    "houses.feature.wifi": "Wi-Fi",
    "houses.feature.workspace": "Workspace",
    "houses.feature.kitchen": "Kitchen",
    "houses.feature.river": "River view",
    "houses.feature.deck": "Wooden deck",
    "houses.feature.garden": "Private garden",
    "houses.feature.private": "Private",
    "houses.view.exterior": "Exterior",
    "houses.view.bedroom": "Bedroom",
    "houses.view.bathroom": "Bathroom",
    "houses.view.garden": "Garden",
    "houses.cta": "Enquire about this house",

    "for.label": "Who it's for",
    "for.title": "Made for you",
    "for.nomad.title": "Digital Nomad",
    "for.nomad.text": "Stable Wi-Fi, a riverside desk, and an atmosphere built for focus",
    "for.remote.title": "Remote Worker",
    "for.remote.text": "Escape the city and work where you can breathe",
    "for.retiree.title": "Retiree",
    "for.retiree.text": "Live slow and peacefully, close to nature",
    "for.traveler.title": "Traveler",
    "for.traveler.text": "Relax by the river, close to Kanchanaburi's highlights",

    "gallery.label": "Atmosphere",
    "gallery.title": "Gallery",

    "loc.label": "Location",
    "loc.title": "Close to Kanchanaburi town",
    "loc.text": "Set on the bank of the Khwae Noi River, just minutes from Kanchanaburi town. As quiet as far away, as convenient as nearby.",
    "loc.distance1": "to Kanchanaburi town",
    "loc.distance2": "to the River Kwai Bridge",
    "loc.distance3": "to Suvarnabhumi Airport",
    "loc.map": "Open in Google Maps",

    "contact.label": "Contact",
    "contact.title": "Enquire about your stay",
    "contact.subtitle": "Leave a message and we'll get back to you as soon as we can",
    "contact.name": "Name",
    "contact.namePh": "Your name",
    "contact.email": "Email",
    "contact.emailPh": "you@email.com",
    "contact.phone": "Phone / LINE",
    "contact.phonePh": "Phone number or LINE ID",
    "contact.dates": "Dates you're interested in",
    "contact.datesPh": "e.g. Jul – Aug 2026",
    "contact.message": "Message",
    "contact.messagePh": "Tell us about your stay...",
    "contact.send": "Send message",
    "contact.or": "Or reach us directly",
    "contact.line": "Chat on LINE",
    "contact.call": "Call now",
    "contact.success": "Message sent — thank you! We'll get back to you shortly.",

    "footer.tagline": "A riverside long-stay community on the Khwae Noi, Kanchanaburi",
    "footer.nav": "Menu",
    "footer.contact": "Contact",
    "footer.follow": "Follow us",
    "footer.rights": "All rights reserved"
  }
};

/* ---- ระบบสลับภาษา ---- */
const I18N_DEFAULT = "th";
let CURRENT_LANG = I18N_DEFAULT;

function applyLanguage(lang) {
  const nextLang = I18N[lang] ? lang : I18N_DEFAULT;
  const dict = I18N[nextLang];
  CURRENT_LANG = nextLang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // placeholder สำหรับช่องกรอกข้อมูล
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });

  document.documentElement.lang = nextLang;
  document.documentElement.setAttribute("data-lang", nextLang);

  // อัปเดตปุ่มสลับภาษา
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    const active = btn.getAttribute("data-lang-btn") === nextLang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  try { localStorage.setItem("riverside-lang", nextLang); } catch (e) {}
}

function initLanguage() {
  let saved = I18N_DEFAULT;
  try { saved = localStorage.getItem("riverside-lang") || I18N_DEFAULT; } catch (e) {}
  applyLanguage(saved);

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang-btn")));
  });
}

document.addEventListener("DOMContentLoaded", initLanguage);

/* เปิดให้สคริปต์อื่น (เช่น ตัวสลับรูปบ้าน) สั่งแปลภาษาซ้ำได้ */
window.RIVERSIDE_I18N = {
  apply: applyLanguage,
  get lang() { return CURRENT_LANG; }
};
