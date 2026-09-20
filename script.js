/* =========================================================
   Indonesia's Road to Independence — script.js
   All interactive behaviour: render, scroll animation, modal,
   search, filters, progress bar, bookmarks (localStorage).
   ========================================================= */

(function () {
  "use strict";

  /* ---------------- 1. PROJECT DATA ---------------- */
  /* Content and structure preserved from the project's source notes. */
  const CATEGORY_INTROS = [
    {
      category: "Nationalism",
      title: "Nationalism",
      intro: "Educated Indonesians, students, and political organizations began imagining a shared national identity in the early twentieth century.",
      link: "https://www.britannica.com/place/Indonesia"
    },
    {
      category: "Occupation",
      title: "Occupation",
      intro: "Japanese rule changed the political landscape by dismantling Dutch administrative control and opening new opportunities for Indonesian leaders.",
      link: "https://www.britannica.com/place/Indonesia"
    },
    {
      category: "Independence",
      title: "Independence",
      intro: "The proclamation in 1945 triggered a campaign of resistance, diplomacy, and negotiation that transformed nationalist aspirations into a new republic.",
      link: "https://www.britannica.com/place/Indonesia"
    },
    {
      category: "Legacy",
      title: "Legacy",
      intro: "After 1949, independence became a continuing project of state-building, national identity, and democratic renewal.",
      link: "https://www.britannica.com/place/Indonesia"
    }
  ];

  const EVENTS = [
    {
      id: "1st part",
      date: "1908-1928",
      title: "The Rise of Nationalism",
      category: "Nationalism",
      img: "assets/youth-pledge.jpg",
      alt: "Youth pledge document Image",
      desc: [
        "In the early twentieth century, Indonesian nationalism developed through educated groups political organisations and youth movements. The organisations gradually encouraged people from different ethinic and regional background to imagine themselves as one Indonesian nation."
      ]
    },
    {
      id: "budi-utomo",
      date: "1908",
      title: "Formation of Budi Utomo",
      category: "Nationalism",
      img: "assets/budi-utomo.jpg",
      alt: "Historical photograph associated with Budi Utomo",
      desc: [
        "Budi Utomo was founded in 1908 and became one of the earliest organized expressions of Indonesian nationalism. It was established by educated Indonesians and helped encourage a growing sense of national consciousness.",
        "Although its early activities were largely focused on education and cultural development, it contributed to the emergence of organized nationalist movements."
      ]
    },
    {
      id: "sarekat-islam",
      date: "1912",
      title: "Growth of Sarekat Islam",
      category: "Nationalism",
      img: "assets/sarekat-islam.jpg",
      alt: "Group portrait at a meeting of Sarekat Islam",
      desc: [
        "Sarekat Islam was founded in 1912 and became an important organization in the development of Indonesian political consciousness. It initially grew from a movement connected to trade but attracted a much wider membership.",
        "It connected religious identity, economic concerns and opposition to colonial discrimination."
      ]
    },
    {
      id: "pni",
      date: "1927",
      title: "Sukarno and the Indonesian National Party",
      category: "Nationalism",
      img: "assets/sukarno.jpg",
      alt: "Portrait of Sukarno",
      desc: [
        "In July 1927, Sukarno helped establish the Indonesian National Party, known as PNI. The party demanded independence and promoted noncooperation with Dutch colonial rule.",
        "It argued that Indonesians from different regions and communities could unite through a common struggle against colonialism."
      ]
    },
    {
      id: "youth-pledge",
      date: "28 October 1928",
      title: "The Youth Pledge",
      category: "Nationalism",
      img: "assets/photo_of_youth_pledge.jpg",
      alt: "The resolution of the Youth Pledge, 28 October 1928",
      desc: [
        "The Youth Pledge expressed the idea of one Indonesian homeland, one Indonesian nation and one Indonesian language. The pledge represented an important development in national identity and encouraged unity among young people from different ethnic and regional communities."
      ],
      principles: ["One Homeland", "One Nation", "One Language"],

      link:"https://muspada.kemenbud.go.id/sejarah-sumpah-pemuda/"
    },
    {
      id: "2nd part",
      date: "1942-1945",
      title: "Occupation and the Road to Independence",
      category: "Occupation",
      img: "assets/Sukaro reading proclamation image.jpg",
      alt: "Sukaro reading proclmation",
      desc: [
        "The Japanese occupation of Indonesia during the Second World War ended Dutch colonial control but replaced it with Japanese military rule. Indonesian leaders and youth organisations used the changing political situation to prepare for independence.",
        "The Japanese occupation began in early 1942 and disrupted the earlier continuity of Dutch colonial rule."
      ]
    },
    {
      id: "occupation",
      date: "1942",
      title: "Japanese Occupation of the Dutch East Indies",
      category: "Occupation",
      img: "assets/japanese-occupation.jpg",
      alt: "Japanese troops arriving in the Dutch East Indies, 1942",
      desc: [
        "Japan occupied the Dutch East Indies in early 1942 during the Second World War. Dutch colonial administration was replaced by Japanese military rule.",
        "The occupation brought hardship and repression, but it also created new political opportunities for Indonesian leaders and organizations."
      ]
    },
    {
      id: "putera",
      date: "1943–1945",
      title: "Preparing for Independence",
      category: "Occupation",
      img: "assets/putera.jpg",
      alt: "Sukarno speaking during the establishment of Putera",
      desc: [
        "During the Japanese occupation, Indonesian leaders became increasingly involved in organizations created under Japanese supervision. These organizations provided experience in political organization, administration and mobilization.",
        "In 1944, Japan promised to prepare Indonesia for independence, increasing political activity and strengthening demands for immediate independence."
      ]
    },
    {
      id: "proclamation",
      date: "17 August 1945",
      title: "The Proclamation of Independence",
      category: "Occupation",
      img: "assets/proclamation.jpg",
      alt: "Photo of Proclamation of Independence",
      desc: [
        "17 August 1945 - Proclamation of Independence, Sukarno and Mohammad Hatta proclaimed Indonesia's independence in Jakarta. The proclmation transformed the nationalist movement into the struggle to establish and defend an independent republic."
      ],
      link: "https://online.flipbuilder.com/puspakartika/szcp/files/basic-html/page13.html"
    },
        {
      id: "3rd Part",
      date: "1945–1949",
      title: "Revolution and Sovereignty",
      category: "Independence",
      img: "assets/round-table-conference.jpg",
      alt: "Round table conference",
      desc: [
        "The proclamation did not immediately bring complete independence. Indonesian forces fought against the Dutch, while Republican leaders used negotiations and international support to defend the new republic."
      ]
    },
    {
      id: "revolution-sovereignty",
      date: "1945–1948",
      title: "Revolution and Diplomatic Struggle",
      category: "Independence",
      img: "assets/revolution.jpg",
      alt: "A street scene during the fighting in Surabaya, 1945",
      desc: [
        "After the proclamation, Indonesia entered a Period of revolution. The Republican government organised itself while fighting spread across regions. The Battle of Surabaya in November 1945 became an important symobol of Indonesian resistance Several",
        "to defend its Indonesia also used diplomacy independence. The Linggadjati Agreement was drafted in November 1946 and signed in Manch 1947. After further - Conflict, the Treville Agreement was reached in January 1948.",
        "However, Dutch military actions Continued and the struggle remained unresolved."
      ]
    },

    // {
    //   id: "diplomacy",
    //   date: "1945–1948",
    //   title: "Revolution and Diplomatic Struggle",
    //   category: "Independence",
    //   img: "assets/revolution.jpg",
    //   alt: "Photo of Battle of Surabaya",
    //   desc: [
    //     "Indonesia combined armed resistance with diplomatic negotiations during the revolutionary period. International developments and negotiations became important as Indonesia sought recognition of its independence and sovereignty."
    //   ]
    // },
    {
      id: "round-table",
      date: "1949",
      title: "Transfer of Sovereignty",
      category: "Independence",
      img: "assets/round-table-conference.jpg",
      alt: "The Round Table Conference, 1949",
      desc: [
        "The Round Table Conference of 1949 formed an important part of the negotiations between Indonesia and the Netherlands concerning the transfer of sovereignty."
      ]
    },
    {
      id: "transfer-sovereignty",
      date: "1949-Present",
      title: "Transfer of Sovereignty",
      category: "Legacy",
      img: "assets/transfer-sovereignty.jpg",
      alt: "The Indonesian flag raised at a sovereignty ceremony",
      desc: [
        "Independence was not the end of Indonesia’s history. After sovereignty was transferred, Indonesia had to build political institutions, maintain national unity, and respond to continuing social, economic, and political challenges."
      ]
    },
    // {
    //   id: "legacy",
    //   date: "1949–Present",
    //   title: "Independence and Its Continuing Legacy",
    //   category: "Legacy",
    //   img: "assets/transfer-sovereignty.jpg",
    //   alt: "Gathering connected to Indonesia's early political organizations",
    //   desc: [
    //     "Independence was not the end of Indonesia’s history. After sovereignty was transferred, Indonesia had to build political institutions, maintain national unity, and respond to continuing social, economic, and political challenges."
    //   ],
    // },
    {
      id: "building-nation",
      date: "After 1949",
      title: "Building the Nation",
      category: "Legacy",
      img: "assets/diplomacy.jpg",
      alt: "Sukarno addressing a gathering after independence",
      desc: [
        "After the transfer of sovereignty, Indonesia continued building its political institutions and national identity.",
        "The meaning of independence extended beyond 1949 and remained connected to the continuing challenges of creating a unified and diverse nation."
      ]
    }
  ];

  const PLACEHOLDER_SVG = "data:image/svg+xml;utf8," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">' +
    '<rect width="100%" height="100%" fill="#0A0F14"/>' +
    '<text x="50%" y="50%" fill="#C9A961" font-family="Georgia,serif" font-size="22" text-anchor="middle">Image unavailable</text>' +
    "</svg>"
  );

  /* ---------------- 2. STATE ---------------- */
  const BOOKMARK_KEY = "ind-independence-bookmarks";
  let bookmarks = loadBookmarks();
  let activeFilter = "all";
  let currentModalIndex = -1;

  function loadBookmarks() {
    try {
      const raw = localStorage.getItem(BOOKMARK_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }
  function saveBookmarks() {
    try {
      localStorage.setItem(BOOKMARK_KEY, JSON.stringify(bookmarks));
    } catch (e) { /* localStorage unavailable — ignore silently */ }
  }
  function isBookmarked(id) { return bookmarks.includes(id); }
  function toggleBookmark(id) {
    if (isBookmarked(id)) bookmarks = bookmarks.filter(b => b !== id);
    else bookmarks.push(id);
    saveBookmarks();
    refreshBookmarkUI();
  }

  /* ---------------- 3. RENDER EVENTS ---------------- */
  const eventsCol = document.getElementById("eventsCol");
  const railNav = document.getElementById("railNav");
  const sectionIntroGrid = document.getElementById("sectionIntroGrid");

  function imgOnError(el) { el.onerror = null; el.src = PLACEHOLDER_SVG; }

  function renderCategoryIntroCards() {
    if (!sectionIntroGrid) return;
    sectionIntroGrid.innerHTML = CATEGORY_INTROS.map(item => `
      <article class="category-intro-card">
        <p class="section-eyebrow">${escapeHtml(item.title)}</p>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.intro)}</p>
        <div class="category-intro-actions">
          <button type="button" class="intro-filter-btn" data-filter="${escapeHtml(item.category)}">Explore ${escapeHtml(item.title)}</button>
          <a href="${item.link}" class="event-link" target="_blank" rel="noopener noreferrer">Read source</a>
        </div>
      </article>
    `).join("");
  }

  function renderEvents() {
    EVENTS.forEach((ev, i) => {
      const el = document.createElement("article");
      el.className = "event" + (ev.featured ? " is-featured" : "");
      el.id = "event-" + ev.id;
      el.dataset.category = ev.category;
      el.dataset.index = i;

      const principlesHtml = ev.principles
        ? `<div class="pledge-principles">${ev.principles.map(p => `<span>${escapeHtml(p)}</span>`).join("")}</div>`
        : "";

      const sourceLinkHtml = ev.link
        ? `<a href="${ev.link}" class="event-link" target="_blank" rel="noopener noreferrer">Read source</a>`
        : "";

      el.innerHTML = `
        <div class="event-media">
          <div class="ph-wrap">
            <img src="${ev.img}" alt="${escapeHtml(ev.alt)}" loading="lazy" onerror="this.onerror=null;this.src='${PLACEHOLDER_SVG}'">
          </div>
          <span class="cat-tag">${escapeHtml(ev.category)}</span>
        </div>
        <div class="event-body">
          <p class="event-date">${escapeHtml(ev.date)}</p>
          <h3 class="event-title">${escapeHtml(ev.title)}</h3>
          ${principlesHtml}
          ${ev.desc.map(p => `<p class="event-desc">${escapeHtml(p)}</p>`).join("")}
          <div class="event-actions">
            <button type="button" class="view-details-btn" data-open-modal="${i}">View Details</button>
            ${sourceLinkHtml}
            <button type="button" class="event-bookmark" data-bookmark="${ev.id}" aria-pressed="${isBookmarked(ev.id)}" aria-label="Save ${escapeHtml(ev.title)} to My Timeline">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="${isBookmarked(ev.id) ? "currentColor" : "none"}"/></svg>
            </button>
          </div>
        </div>`;
      eventsCol.appendChild(el);
    });
  }

  function renderRailNav() {
    EVENTS.forEach((ev, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "rail-item";
      btn.dataset.index = i;
      btn.textContent = ev.date;
      btn.setAttribute("aria-label", "Jump to " + ev.title);
      btn.addEventListener("click", () => {
        document.getElementById("event-" + ev.id).scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "center" });
      });
      railNav.appendChild(btn);
    });
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  }
  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  /* ---------------- 4. BOOKMARK UI SYNC ---------------- */
  function refreshBookmarkUI() {
    document.querySelectorAll("[data-bookmark]").forEach(btn => {
      const id = btn.getAttribute("data-bookmark");
      const saved = isBookmarked(id);
      btn.classList.toggle("is-saved", saved);
      btn.setAttribute("aria-pressed", saved);
      const path = btn.querySelector("path");
      if (path) path.setAttribute("fill", saved ? "currentColor" : "none");
    });
    document.getElementById("bookmarkCount").textContent = bookmarks.length;
    renderMyTimelineList();
    if (currentModalIndex > -1) syncModalBookmarkButton();
  }

  /* ---------------- 5. MODAL ---------------- */
  const modalOverlay = document.getElementById("modalOverlay");
  const modalImg = document.getElementById("modalImg");
  const modalCategory = document.getElementById("modalCategory");
  const modalDate = document.getElementById("modalDate");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalLink = document.getElementById("modalLink");
  const modalBookmark = document.getElementById("modalBookmark");
  const modalPrev = document.getElementById("modalPrev");
  const modalNext = document.getElementById("modalNext");
  let lastFocusedEl = null;

  function openModal(index) {
    currentModalIndex = index;
    const ev = EVENTS[index];
    modalImg.src = ev.img;
    modalImg.alt = ev.alt;
    modalImg.onerror = function () { this.onerror = null; this.src = PLACEHOLDER_SVG; };
    modalCategory.textContent = ev.category;
    modalDate.textContent = ev.date;
    modalTitle.textContent = ev.title;
    modalDesc.innerHTML = ev.desc.map(p => `<p>${escapeHtml(p)}</p>`).join("");
    if (ev.link) {
      modalLink.href = ev.link;
      modalLink.hidden = false;
      modalLink.textContent = "Read source";
    } else {
      modalLink.hidden = true;
      modalLink.removeAttribute("href");
    }
    syncModalBookmarkButton();
    modalPrev.disabled = index <= 0;
    modalNext.disabled = index >= EVENTS.length - 1;

    lastFocusedEl = document.activeElement;
    modalOverlay.hidden = false;
    document.body.style.overflow = "hidden";
    document.getElementById("modalClose").focus();
  }
  function closeModal() {
    modalOverlay.hidden = true;
    document.body.style.overflow = "";
    currentModalIndex = -1;
    if (lastFocusedEl && lastFocusedEl.focus) lastFocusedEl.focus();
  }
  function syncModalBookmarkButton() {
    const ev = EVENTS[currentModalIndex];
    const saved = isBookmarked(ev.id);
    modalBookmark.setAttribute("aria-pressed", saved);
    modalBookmark.querySelector("span").textContent = saved ? "Saved to My Timeline" : "Save to My Timeline";
  }

  document.getElementById("modalClose").addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", e => { if (e.target === modalOverlay) closeModal(); });
  modalBookmark.addEventListener("click", () => {
    if (currentModalIndex > -1) toggleBookmark(EVENTS[currentModalIndex].id);
  });
  modalPrev.addEventListener("click", () => { if (currentModalIndex > 0) openModal(currentModalIndex - 1); });
  modalNext.addEventListener("click", () => { if (currentModalIndex < EVENTS.length - 1) openModal(currentModalIndex + 1); });

  document.addEventListener("keydown", e => {
    if (modalOverlay.hidden) return;
    if (e.key === "Escape") closeModal();
    else if (e.key === "ArrowLeft" && !modalPrev.disabled) openModal(currentModalIndex - 1);
    else if (e.key === "ArrowRight" && !modalNext.disabled) openModal(currentModalIndex + 1);
  });

  sectionIntroGrid.addEventListener("click", e => {
    const btn = e.target.closest("[data-filter]");
    if (!btn) return;
    activeFilter = btn.dataset.filter;
    document.querySelectorAll(".filter-chip").forEach(c => c.classList.toggle("is-active", c.dataset.filter === activeFilter));
    applyFilter();
    const target = document.getElementById("event-" + EVENTS.find(ev => ev.category === activeFilter)?.id);
    if (target) target.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "center" });
  });

  eventsCol.addEventListener("click", e => {
    const openBtn = e.target.closest("[data-open-modal]");
    if (openBtn) { openModal(Number(openBtn.dataset.openModal)); return; }
    const bmBtn = e.target.closest("[data-bookmark]");
    if (bmBtn) { toggleBookmark(bmBtn.getAttribute("data-bookmark")); }
  });

  /* ---------------- 6. FILTERS ---------------- */
  const filterBar = document.querySelector(".filter-bar");
  filterBar.addEventListener("click", e => {
    const chip = e.target.closest(".filter-chip");
    if (!chip) return;
    activeFilter = chip.dataset.filter;
    document.querySelectorAll(".filter-chip").forEach(c => c.classList.toggle("is-active", c === chip));
    applyFilter();
  });
  function applyFilter() {
    let visibleCount = 0;
    EVENTS.forEach((ev, i) => {
      const el = document.getElementById("event-" + ev.id);
      const match = activeFilter === "all" || ev.category === activeFilter;
      el.classList.toggle("no-match", !match);
      const railItem = railNav.querySelector('[data-index="' + i + '"]');
      if (railItem) railItem.style.display = match ? "" : "none";
      if (match) visibleCount++;
    });
    document.getElementById("counterTotal").textContent = String(visibleCount).padStart(2, "0");
  }

  /* ---------------- 7. SEARCH ---------------- */
  const searchToggle = document.getElementById("searchToggle");
  const searchPanel = document.getElementById("searchPanel");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const searchClose = document.getElementById("searchClose");

  function openSearch() {
    searchPanel.hidden = false;
    searchToggle.setAttribute("aria-expanded", "true");
    searchInput.value = "";
    renderSearchResults("");
    setTimeout(() => searchInput.focus(), 10);
  }
  function closeSearch() {
    searchPanel.hidden = true;
    searchToggle.setAttribute("aria-expanded", "false");
    searchToggle.focus();
  }
  searchToggle.addEventListener("click", () => (searchPanel.hidden ? openSearch() : closeSearch()));
  searchClose.addEventListener("click", closeSearch);
  searchPanel.addEventListener("click", e => { if (e.target === searchPanel) closeSearch(); });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && !searchPanel.hidden) closeSearch();
    if ((e.key === "/" || (e.ctrlKey && e.key.toLowerCase() === "k")) && searchPanel.hidden && modalOverlay.hidden) {
      const tag = document.activeElement.tagName;
      if (tag !== "INPUT" && tag !== "TEXTAREA") { e.preventDefault(); openSearch(); }
    }
  });

  function renderSearchResults(query) {
    const q = query.trim().toLowerCase();
    const matches = EVENTS.filter(ev => {
      if (!q) return true;
      return (
        ev.date.toLowerCase().includes(q) ||
        ev.title.toLowerCase().includes(q) ||
        ev.category.toLowerCase().includes(q) ||
        ev.desc.join(" ").toLowerCase().includes(q)
      );
    });
    if (matches.length === 0) {
      searchResults.innerHTML = `<li class="search-empty">No events match “${escapeHtml(query)}”.</li>`;
      return;
    }
    searchResults.innerHTML = matches.map(ev => {
      const i = EVENTS.indexOf(ev);
      return `<li><button type="button" data-goto="${i}">
        <span class="sr-date">${escapeHtml(ev.date)}</span>
        <span class="sr-title">${escapeHtml(ev.title)}</span>
        <span class="sr-cat">${escapeHtml(ev.category)}</span>
      </button></li>`;
    }).join("");
  }
  searchInput.addEventListener("input", () => renderSearchResults(searchInput.value));
  searchResults.addEventListener("click", e => {
    const btn = e.target.closest("[data-goto]");
    if (!btn) return;
    const i = Number(btn.dataset.goto);
    closeSearch();
    activeFilter = "all";
    document.querySelectorAll(".filter-chip").forEach(c => c.classList.toggle("is-active", c.dataset.filter === "all"));
    applyFilter();
    setTimeout(() => {
      document.getElementById("event-" + EVENTS[i].id).scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "center" });
    }, 50);
  });

  /* ---------------- 8. MY TIMELINE PANEL ---------------- */
  const myTimelineBtn = document.getElementById("myTimelineBtn");
  const myTimelinePanel = document.getElementById("myTimelinePanel");
  const myTimelineClose = document.getElementById("myTimelineClose");
  const myTimelineList = document.getElementById("myTimelineList");
  const myTimelineEmpty = document.getElementById("myTimelineEmpty");

  myTimelineBtn.addEventListener("click", () => { myTimelinePanel.hidden = false; });
  myTimelineClose.addEventListener("click", () => { myTimelinePanel.hidden = true; });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && !myTimelinePanel.hidden) myTimelinePanel.hidden = true;
  });

  function renderMyTimelineList() {
    const saved = EVENTS.filter(ev => isBookmarked(ev.id));
    myTimelineEmpty.hidden = saved.length > 0;
    myTimelineList.innerHTML = saved.map(ev => {
      const i = EVENTS.indexOf(ev);
      return `<li class="mt-item">
        <img src="${ev.img}" alt="" loading="lazy" onerror="this.onerror=null;this.src='${PLACEHOLDER_SVG}'">
        <div>
          <div class="mt-date">${escapeHtml(ev.date)}</div>
          <div class="mt-title">${escapeHtml(ev.title)}</div>
          <button type="button" class="mt-open" data-mt-open="${i}">Open</button>
        </div>
        <button type="button" class="mt-remove" data-mt-remove="${ev.id}" aria-label="Remove ${escapeHtml(ev.title)} from My Timeline">&times;</button>
      </li>`;
    }).join("");
  }
  myTimelineList.addEventListener("click", e => {
    const openBtn = e.target.closest("[data-mt-open]");
    if (openBtn) { myTimelinePanel.hidden = true; openModal(Number(openBtn.dataset.mtOpen)); return; }
    const rmBtn = e.target.closest("[data-mt-remove]");
    if (rmBtn) toggleBookmark(rmBtn.getAttribute("data-mt-remove"));
  });

  /* ---------------- 9. SCROLL ANIMATIONS (IntersectionObserver) ---------------- */
  function initScrollAnimations() {
    const items = document.querySelectorAll(".event");
    if (!("IntersectionObserver" in window)) {
      items.forEach(el => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });
    items.forEach(el => io.observe(el));

    // active rail item + counter, based on which event is nearest viewport center
    const activeIO = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const idx = Number(entry.target.dataset.index);
        document.querySelectorAll(".rail-item").forEach(r => r.classList.toggle("is-active", Number(r.dataset.index) === idx));
        document.getElementById("counterCurrent").textContent = String(idx + 1).padStart(2, "0");
      });
    }, { threshold: 0.5 });
    items.forEach(el => activeIO.observe(el));
  }

  /* ---------------- 10. HEADER + PROGRESS BAR ---------------- */
  const siteHeader = document.getElementById("siteHeader");
  const progressFill = document.getElementById("progressFill");
  function onScroll() {
    siteHeader.classList.toggle("scrolled", window.scrollY > 40);
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - doc.clientHeight;
    const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progressFill.style.width = pct + "%";
  }
  document.addEventListener("scroll", onScroll, { passive: true });

  /* ---------------- INIT ---------------- */
  renderCategoryIntroCards();
  renderEvents();
  renderRailNav();
  refreshBookmarkUI();
  applyFilter();
  initScrollAnimations();
  onScroll();
})();
