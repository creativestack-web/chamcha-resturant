/* ==========================================================================
   CHAMCHA RESTAURANT — SITE SCRIPT
   Small, dependency-free interactions. Content itself lives in data.js.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Sticky nav on scroll ---------- */
  const nav = document.querySelector(".site-nav");
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Mobile menu drawer ---------- */
  const toggle = document.querySelector(".nav-menu-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    links.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        links.classList.remove("is-open");
        toggle.classList.remove("is-open");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add("is-visible"));
  }

  /* ---------- Signature menu preview (home page) ---------- */
  const sigGrid = document.querySelector("[data-signature-grid]");
  if (sigGrid && typeof menuData !== "undefined") {
    const featuredIds = ["chicken-karahi", "chicken-tikka", "seekh-kebab", "chicken-biryani"];
    const items = menuData.items.filter(i => featuredIds.includes(i.id));
    sigGrid.innerHTML = items.map(item => `
      <article class="sig-item">
        <span class="tag">${item.category}</span>
        <div class="sig-item-media"><img src="${item.img}" alt="Demo photo — ${item.name}" loading="lazy" width="600" height="600"></div>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      </article>
    `).join("");
  }

  /* ---------- Full menu grid + category filter (menu page) ---------- */
  const menuGrid = document.querySelector("[data-menu-grid]");
  const filterWrap = document.querySelector("[data-menu-filters]");
  const emptyState = document.querySelector("[data-menu-empty]");
  if (menuGrid && filterWrap && typeof menuData !== "undefined") {
    menuGrid.innerHTML = menuData.items.map(item => `
      <article class="menu-card" data-category="${item.category}">
        <div class="menu-card-media"><img src="${item.img}" alt="Demo photo — ${item.name}" loading="lazy" width="600" height="450"></div>
        <div class="menu-card-body">
          <span class="cat">${item.category}</span>
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          ${item.showPrice ? `<span class="demo-price">Demo price — ${item.price}</span>` : ``}
        </div>
      </article>
    `).join("");

    filterWrap.innerHTML = menuData.categories.map((cat, i) => `
      <button class="filter-btn${i === 0 ? " is-active" : ""}" data-filter="${cat}">${cat}</button>
    `).join("");

    const cards = () => Array.from(menuGrid.querySelectorAll(".menu-card"));

    filterWrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      filterWrap.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const filter = btn.dataset.filter;
      let visibleCount = 0;
      cards().forEach(card => {
        const match = filter === "All" || card.dataset.category === filter;
        card.classList.toggle("is-hidden", !match);
        if (match) visibleCount++;
      });
      if (emptyState) emptyState.classList.toggle("is-visible", visibleCount === 0);
    });
  }

  /* ---------- Gallery grid + lightbox (gallery page) ---------- */
  const galleryGrid = document.querySelector("[data-gallery-grid]");
  if (galleryGrid && typeof galleryData !== "undefined") {
    galleryGrid.innerHTML = galleryData.map(g => `
      <div class="gallery-item" data-size="${g.size}" tabindex="0" role="button" aria-label="Open ${g.alt}">
        <img src="${g.img}" alt="${g.alt}" loading="lazy" width="800" height="800">
      </div>
    `).join("");

    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = lightbox ? lightbox.querySelector("img") : null;

    const openLightbox = (src, alt) => {
      if (!lightbox || !lightboxImg) return;
      lightboxImg.src = src;
      lightboxImg.alt = alt;
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden";
    };
    const closeLightbox = () => {
      if (!lightbox) return;
      lightbox.classList.remove("is-open");
      document.body.style.overflow = "";
    };

    galleryGrid.addEventListener("click", (e) => {
      const item = e.target.closest(".gallery-item");
      if (!item) return;
      const img = item.querySelector("img");
      openLightbox(img.src, img.alt);
    });
    galleryGrid.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        const item = e.target.closest(".gallery-item");
        if (!item) return;
        e.preventDefault();
        const img = item.querySelector("img");
        openLightbox(img.src, img.alt);
      }
    });
    if (lightbox) {
      lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox || e.target.closest(".lightbox-close")) closeLightbox();
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeLightbox();
      });
    }
  }

  /* ---------- Contact placeholders (contact page) ---------- */
  const contactMount = document.querySelector("[data-contact-grid]");
  if (contactMount && typeof contactData !== "undefined") {
    contactMount.innerHTML = `
      <div class="contact-card"><span class="eyebrow">Phone</span><p>${contactData.phone}</p></div>
      <div class="contact-card"><span class="eyebrow">WhatsApp</span><p>${contactData.whatsapp}</p></div>
      <div class="contact-card"><span class="eyebrow">Instagram</span><p>${contactData.instagram}</p></div>
      <div class="contact-card"><span class="eyebrow">Opening Hours</span><p>${contactData.hours}</p></div>
    `;
  }
  document.querySelectorAll("[data-location-detail]").forEach(el => {
    if (typeof contactData !== "undefined") el.textContent = contactData.addressDetail;
  });
  document.querySelectorAll("[data-maps-link]").forEach(el => {
    if (typeof contactData !== "undefined") el.setAttribute("href", contactData.mapsUrl);
  });

});
