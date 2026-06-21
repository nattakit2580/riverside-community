/* =========================================================
   main.js — hero image, sticky header, menu, reveal, scroll-spy, form
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ---- Hero background (local + fallback) ---- */
  const heroBg = document.querySelector(".hero__bg");
  if (heroBg) {
    const local = "assets/img/hero.jpg";
    const fallback = "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=2400&q=80";
    const set = (url) => heroBg.style.setProperty("--hero-img", `url("${url}")`);
    const probe = new Image();
    probe.onload = () => set(local);
    probe.onerror = () => set(fallback);
    probe.src = local;
  }

  /* ---- Sticky header ---- */
  const header = document.getElementById("header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 60);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- Mobile menu ---- */
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");
  if (toggle) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll(".nav__links a").forEach((a) =>
      a.addEventListener("click", () => nav.classList.remove("open"))
    );
  }

  /* ---- Reveal + stagger on scroll ---- */
  const targets = document.querySelectorAll(".reveal, [data-stagger]");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.14 });
    targets.forEach((t) => io.observe(t));
  } else {
    targets.forEach((t) => t.classList.add("in"));
  }

  /* ---- Scroll-spy for side index ---- */
  const sideLinks = Array.from(document.querySelectorAll(".side-index a"));
  const sections = sideLinks
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);
  if (sections.length && "IntersectionObserver" in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const id = "#" + e.target.id;
          sideLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === id));
        }
      });
    }, { rootMargin: "-45% 0px -45% 0px" });
    sections.forEach((s) => spy.observe(s));
  }

  /* ---- Contact form ---- */
  const form = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const action = form.getAttribute("action") || "";
      const done = () => {
        success.classList.add("show");
        form.reset();
        success.scrollIntoView({ behavior: "smooth", block: "center" });
      };
      if (action.includes("your-id")) { done(); return; } // demo mode
      try {
        const res = await fetch(action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
        res.ok ? done() : form.submit();
      } catch (err) { form.submit(); }
    });
  }
});
