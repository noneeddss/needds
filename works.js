/* =====================================================================
   needd.s — ВСІ ВІДЕО САЙТУ. Редагуєш тільки цей файл.

   video:  посилання на YouTube (звичайне, Shorts або youtu.be).
           Порожньо ""  → на сайті стоїть чорновий слот.
   role:   "shot" = Shot + cut (знімав і монтував)
           "cut"  = тільки монтаж
           ""     = без позначки
   cat:    категорія (назва перекладається сама на EN/UA/SK):
           g_brand  g_fashion  g_event  g_talk  g_perf  g_prod  g_trend
   title:  (необов'язково) своя назва замість категорії.
   thumb:  (необов'язково) своя обкладинка, напр. "media/thumbs/bf.jpg".

   Щоб додати відео: скопіюй рядок { ... }, встав нижче, не забудь кому.
   ===================================================================== */

window.WORKS = {

  // Фон першого екрана: 10–15 с без звуку, mp4 до 20 МБ, клади в media/
  heroVideo: "media/hero.mp4",

  // Шоуріл у блоці About
  showreel: "https://youtu.be/HQoUpLeevp0",

  // WORK → Horizontal 16:9
  horizontal: [
    { cat: "g_brand",   role: "cut",  video: "" },   // Black Friday GymBeam
    { cat: "g_fashion", role: "shot", video: "" },   // GRIND
    { cat: "g_trend",   role: "shot", video: "" },   // GB Calendar
    { cat: "g_event",   role: "shot", video: "" },
  ],

  // WORK → Vertical 9:16 (карусель)
  vertical: [
    { cat: "g_perf",    role: "cut",  video: "" },   // Just Whey BF / Big Sale
    { cat: "g_prod",    role: "cut",  video: "" },   // YUMMIES з озвучкою
    { cat: "g_fashion", role: "shot", video: "" },   // GRIND вертикал
    { cat: "g_trend",   role: "shot", video: "" },   // GB Calendar вертикал
    { cat: "g_event",   role: "shot", video: "" },
    { cat: "g_talk",    role: "shot", video: "" },
  ],

  // AI generation → відео (вертикальні)
  aiVideo: [
    { video: "" },   // натуральна косметика
    { video: "" },   // GTA 6
    { video: "" },   // Pumpkin Spice Is Dead
    { video: "" },
  ],

  // AI generation → фото: до 18 картинок, клади в media/ai/
  // напр. "media/ai/01.jpg", "media/ai/02.jpg", ...
  aiPhoto: [
  ],

  // Edits (горизонтальні, свої)
  edits: [
    { title: "LOTR · Cinematic", video: "https://youtu.be/cwnMyu-77NM" },
    { title: "Flow · Lordly", video: "https://youtu.be/-s0ET_N-pV4" },
    { title: "Pure Water · JJK × HxH", video: "https://youtu.be/TVh7PRJXNME" },
    { title: "Dutch · We Need Money", video: "https://youtu.be/-3TiSK-NG2w" },
    { title: "Spider-Man · Andrew Garfield", video: "https://youtu.be/rAFFBYHnQm0" },
  ],

  // Extensions & packs: демо-відео і посилання на покупку
  tools: {
    ease:  { video: "", link: "" },
    timer: { video: "", link: "" },
    svx:   { video: "", link: "https://payhip.com/b/VSNw3" },
    ovl:   { video: "", link: "" },
  },
};
