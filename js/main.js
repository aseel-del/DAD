/* 
 * Main Interactive JavaScript for Dar Aldawa Corporate Website
 * Includes Trilingual Switching, Mega Menu, Scroll Reveal Animations, & Back-to-Top
 * Engineered by BoldPro
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Language Switcher Engine
  let currentLang = localStorage.getItem('dad_lang') || 'en';

  function applyLanguage(lang) {
    if (!I18N_DATA[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('dad_lang', lang);

    const isArabic = lang === 'ar';
    document.documentElement.lang = lang;
    document.body.dir = isArabic ? 'rtl' : 'ltr';

    // Update current language label on dropdown trigger
    const currentLangLabel = document.getElementById('currentLangLabel');
    if (currentLangLabel) {
      currentLangLabel.textContent = lang.toUpperCase();
    }

    // Update active class in .lang-menu-item, .lang-link, .lang-option
    document.querySelectorAll('.lang-menu-item, .lang-link, .lang-option').forEach(link => {
      if (link.getAttribute('data-lang') === lang) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Translate all elements with data-i18n
    const dict = I18N_DATA[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict && dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });
  }

  // Bind click events on all language buttons
  document.querySelectorAll('.lang-menu-item, .lang-link, .lang-option').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const selected = btn.getAttribute('data-lang');
      if (selected) {
        applyLanguage(selected);
        document.getElementById('langDropdownMenu')?.classList.remove('active');
      }
    });
  });

  // Dropdown click toggle for mobile / touch
  const langDropdownBtn = document.getElementById('langDropdownBtn');
  const langDropdownMenu = document.getElementById('langDropdownMenu');

  langDropdownBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdownMenu?.classList.toggle('active');
  });

  document.addEventListener('click', () => {
    langDropdownMenu?.classList.remove('active');
  });

  // Mobile Navigation Drawer Toggle
  const mobileToggleBtn = document.getElementById('mobileMenuToggleBtn');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const mobileBackdrop = document.getElementById('mobileNavBackdrop');
  const mobileDrawerClose = document.getElementById('mobileDrawerClose');

  function openMobileMenu() {
    mobileDrawer?.classList.add('active');
    mobileBackdrop?.classList.add('active');
    mobileToggleBtn?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileDrawer?.classList.remove('active');
    mobileBackdrop?.classList.remove('active');
    mobileToggleBtn?.classList.remove('active');
    document.body.style.overflow = '';
  }

  mobileToggleBtn?.addEventListener('click', () => {
    if (mobileDrawer?.classList.contains('active')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  mobileDrawerClose?.addEventListener('click', closeMobileMenu);
  mobileBackdrop?.addEventListener('click', closeMobileMenu);

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  document.querySelectorAll('.mobile-lang-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      const l = btn.getAttribute('data-lang');
      if (l) {
        applyLanguage(l);
        closeMobileMenu();
      }
    });
  });

  // Apply initial language
  applyLanguage(currentLang);

  // 2. Sticky Header with Scroll Shadow & Back to Top Button
  const stickyNav = document.querySelector('.sticky-nav') || document.querySelector('.site-header');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 20) {
      stickyNav?.classList.add('scrolled');
    } else {
      stickyNav?.classList.remove('scrolled');
    }

    if (scrollY > 400) {
      backToTopBtn?.classList.add('is-active');
    } else {
      backToTopBtn?.classList.remove('is-active');
    }
  });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 3. Scroll Reveal Animation Engine (IntersectionObserver)
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  // 4. Animated Metric Counters on Scroll
  const metricsSection = document.querySelector('.metrics-bar-section') || document.querySelector('.metrics-bar');
  let countersAnimated = false;

  function animateCounters() {
    const counters = document.querySelectorAll('.metric-big-num, .metric-number');
    counters.forEach(counter => {
      const targetStr = counter.textContent.trim();
      const hasPlus = targetStr.includes('+');
      const target = parseInt(targetStr.replace(/\D/g, ''), 10);
      if (isNaN(target)) return;
      let count = 0;
      const duration = 1400;
      const stepTime = 25;
      const totalSteps = duration / stepTime;
      const increment = target / totalSteps;

      const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
          counter.textContent = hasPlus ? `${target}+` : `${target}`;
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(count) + (hasPlus ? '+' : '');
        }
      }, stepTime);
    });
  }

  if (metricsSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
          countersAnimated = true;
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    observer.observe(metricsSection);
  }

  // =========================================================================
  // 5. LIVE SPOTLIGHT SEARCH ENGINE
  // =========================================================================
  const SEARCH_DATABASE = [
    // Products
    { title: "Amoxicillin & Clavulanate (Augmax)", category: "products", badge: "Anti-Infective", desc: "Broad-spectrum oral suspension and film-coated tablets.", icon: "medication", url: "portfolio.html?cat=anti-infectives" },
    { title: "Ciprofloxacin (Ciprodad)", category: "products", badge: "Anti-Infective", desc: "Fluoroquinolone antibiotic for serious bacterial infections.", icon: "medication", url: "portfolio.html?cat=anti-infectives" },
    { title: "Azithromycin (Azidad)", category: "products", badge: "Anti-Infective", desc: "Macrolide antibiotic 500mg capsules and pediatric suspension.", icon: "medication", url: "portfolio.html?cat=anti-infectives" },
    { title: "Atorvastatin (Lipidad)", category: "products", badge: "Cardiovascular", desc: "HMG-CoA reductase inhibitor for lipid management and heart health.", icon: "cardiology", url: "portfolio.html?cat=cardiovascular" },
    { title: "Metformin HCl (Glucodad)", category: "products", badge: "Cardiovascular", desc: "First-line oral anti-hyperglycemic agent for Type 2 Diabetes.", icon: "cardiology", url: "portfolio.html?cat=cardiovascular" },
    { title: "Losartan Potassium (Tensodad)", category: "products", badge: "Cardiovascular", desc: "Angiotensin II receptor blocker for hypertension therapy.", icon: "cardiology", url: "portfolio.html?cat=cardiovascular" },
    { title: "Omeprazole (Gastrofast)", category: "products", badge: "Gastrointestinal", desc: "Proton pump inhibitor for GERD and peptic ulcer disease.", icon: "nutrition", url: "portfolio.html?cat=gastrointestinal" },
    { title: "Pantoprazole (Pantodad)", category: "products", badge: "Gastrointestinal", desc: "Delayed-release tablets and IV formulation for acid reflux.", icon: "nutrition", url: "portfolio.html?cat=gastrointestinal" },
    { title: "Fluoxetine (Moodad)", category: "products", badge: "CNS", desc: "Selective serotonin reuptake inhibitor (SSRI) for mental wellness.", icon: "psychology", url: "portfolio.html?cat=cns" },
    { title: "Pregabalin (Neurodad)", category: "products", badge: "CNS", desc: "Neuropathic pain relief and focal seizure adjunct therapy.", icon: "psychology", url: "portfolio.html?cat=cns" },
    { title: "Salbutamol Inhaler (Ventodad)", category: "products", badge: "Respiratory", desc: "Fast-acting bronchodilator aerosol inhaler for asthma management.", icon: "pulmonology", url: "portfolio.html?cat=respiratory" },
    { title: "Montelukast (Asmadad)", category: "products", badge: "Respiratory", desc: "Leukotriene receptor antagonist chewable tablets for asthma prevention.", icon: "pulmonology", url: "portfolio.html?cat=respiratory" },

    // Therapeutics
    { title: "Cardiovascular & Diabetes Portfolio", category: "therapeutics", badge: "45+ Products", desc: "Hypertension, dyslipidemia, coronary health, and glycemic regulation.", icon: "favorite", url: "portfolio.html?cat=cardiovascular" },
    { title: "Anti-Infectives & Antimicrobials", category: "therapeutics", badge: "60+ Products", desc: "Penicillins, cephalosporins, macrolides, and systemic antifungals.", icon: "shield", url: "portfolio.html?cat=anti-infectives" },
    { title: "Central Nervous System (CNS)", category: "therapeutics", badge: "28+ Products", desc: "Neuropsychiatry, pain management, anti-epileptic, and cognitive therapies.", icon: "psychology", url: "portfolio.html?cat=cns" },
    { title: "Gastroenterology & Hepatology", category: "therapeutics", badge: "32+ Products", desc: "Proton pump inhibitors, motility agents, and liver protective agents.", icon: "healing", url: "portfolio.html?cat=gastrointestinal" },
    { title: "Respiratory & Allergy Solutions", category: "therapeutics", badge: "24+ Products", desc: "Metered dose inhalers, anti-histamines, and cough preparations.", icon: "air", url: "portfolio.html?cat=respiratory" },

    // Company & Facilities
    { title: "50-Year Milestones & Heritage (1975–2025)", category: "company", badge: "Golden Jubilee", desc: "Five decades of pharmaceutical leadership and innovation across MENA.", icon: "military_tech", url: "404.html" },
    { title: "7 Manufacturing Plants (Jordan & Algeria)", category: "company", badge: "Production", desc: "World-class sterile, injectable, solid oral, and liquid formulation facilities.", icon: "factory", url: "404.html" },
    { title: "Research & Development Center (R&D)", category: "company", badge: "Innovation", desc: "State-of-the-art bioequivalence, formulation, and stability laboratories.", icon: "biotech", url: "404.html" },
    { title: "Quality Assurance & CGMP Certifications", category: "company", badge: "Compliance", desc: "Strict adherence to USP, BP, EP standards and global regulatory bodies.", icon: "verified", url: "404.html" },
    { title: "Global Presence (40+ Export Markets)", category: "company", badge: "Global", desc: "Supplying life-saving medicines across Middle East, Africa, and Europe.", icon: "public", url: "index.html#reach" },
    { title: "Investor Relations & Financial Reports", category: "company", badge: "Investors", desc: "Annual disclosures, general assembly reports, and corporate governance.", icon: "bar_chart", url: "404.html" },
    { title: "Pharmacovigilance & Safety Reporting", category: "company", badge: "Safety", desc: "24/7 dedicated medical adverse event reporting system for patient safety.", icon: "health_and_safety", url: "404.html" },

    // News
    { title: "Dar Aldawa Celebrates 50th Golden Jubilee Anniversary", category: "news", badge: "Press Release", desc: "Honoring 50 years of delivering trusted quality medicine to global markets.", icon: "feed", url: "news.html" },
    { title: "Algerian Plant Expansion Boosts Sterile Oncology Capacity", category: "news", badge: "Expansion", desc: "Phase 3 production line brings high-potency oral and injectable capabilities.", icon: "feed", url: "news.html" },
    { title: "Dar Aldawa Signs Strategic Biotechnology R&D Partnership", category: "news", badge: "R&D", desc: "Collaborative agreement to accelerate biosimilar and novel drug development.", icon: "feed", url: "news.html" },
    { title: "Dar Aldawa Receives European CGMP Renewal Certification", category: "news", badge: "Regulatory", desc: "Audits confirm international compliance across Jordanian manufacturing units.", icon: "feed", url: "news.html" }
  ];

  const searchModal = document.getElementById('searchModal');
  const searchInput = document.getElementById('searchInput');
  const searchClose = document.getElementById('searchCloseBtn');
  const searchClear = document.getElementById('searchClearBtn');
  const searchResultsList = document.getElementById('searchResultsList');
  const searchCountText = document.getElementById('searchResultCountText');
  const catTabs = document.querySelectorAll('.search-cat-tab');
  const searchTriggers = document.querySelectorAll('#searchTriggerBtn, .nav-search-btn');

  let activeCategory = 'all';
  let selectedIndex = -1;

  function openSearch() {
    searchModal?.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      searchInput?.focus();
      renderSearchResults();
    }, 100);
  }

  function closeSearch() {
    searchModal?.classList.remove('active');
    document.body.style.overflow = '';
  }

  searchTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openSearch();
    });
  });

  searchClose?.addEventListener('click', closeSearch);

  searchModal?.addEventListener('click', (e) => {
    if (e.target === searchModal) closeSearch();
  });

  searchClear?.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    searchClear.style.display = 'none';
    searchInput?.focus();
    renderSearchResults();
  });

  searchInput?.addEventListener('input', () => {
    if (searchClear) {
      searchClear.style.display = searchInput.value ? 'flex' : 'none';
    }
    selectedIndex = -1;
    renderSearchResults();
  });

  catTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      catTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.getAttribute('data-filter') || 'all';
      selectedIndex = -1;
      renderSearchResults();
    });
  });

  function highlightMatch(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  function renderSearchResults() {
    if (!searchResultsList) return;
    const query = (searchInput?.value || '').trim().toLowerCase();

    let filtered = SEARCH_DATABASE.filter(item => {
      const matchCat = activeCategory === 'all' || item.category === activeCategory;
      const matchQuery = !query || 
        item.title.toLowerCase().includes(query) || 
        item.desc.toLowerCase().includes(query) ||
        item.badge.toLowerCase().includes(query);
      return matchCat && matchQuery;
    });

    if (filtered.length === 0) {
      searchResultsList.innerHTML = `
        <div class="search-empty-state">
          <span class="material-symbols-outlined" style="font-size: 36px; color: #94A3B8;">search_off</span>
          <div style="font-weight: 700; color: #0D2137; font-size: 15px;">No results found for "${query}"</div>
          <div style="font-size: 13px; color: #64748B;">Try searching for <em>Cardiovascular</em>, <em>Amoxicillin</em>, <em>Algeria</em>, or <em>Milestones</em>.</div>
        </div>
      `;
      if (searchCountText) searchCountText.textContent = `0 results found`;
      return;
    }

    if (searchCountText) {
      searchCountText.textContent = query 
        ? `${filtered.length} matching result${filtered.length > 1 ? 's' : ''}` 
        : `Showing ${filtered.length} featured items`;
    }

    searchResultsList.innerHTML = filtered.map((item, idx) => `
      <a href="${item.url}" class="search-result-item ${idx === selectedIndex ? 'selected' : ''}" data-index="${idx}">
        <div class="search-result-left">
          <div class="search-result-icon-box">
            <span class="material-symbols-outlined" style="font-size: 20px;">${item.icon}</span>
          </div>
          <div>
            <div class="search-result-title">${highlightMatch(item.title, query)}</div>
            <div class="search-result-desc">${highlightMatch(item.desc, query)}</div>
          </div>
        </div>
        <span class="search-result-badge">${item.badge}</span>
      </a>
    `).join('');
  }

  // Keyboard Navigation for Search Modal
  document.addEventListener('keydown', (e) => {
    if (searchModal?.classList.contains('active')) {
      const items = searchResultsList?.querySelectorAll('.search-result-item') || [];
      
      if (e.key === 'Escape') {
        closeSearch();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
        updateSelection(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIndex = Math.max(selectedIndex - 1, 0);
        updateSelection(items);
      } else if (e.key === 'Enter' && selectedIndex >= 0 && items[selectedIndex]) {
        e.preventDefault();
        items[selectedIndex].click();
      }
    } else {
      // Global shortcut Cmd+K or Ctrl+K to open search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
      }
    }
  });

  function updateSelection(items) {
    items.forEach((item, idx) => {
      if (idx === selectedIndex) {
        item.classList.add('selected');
        item.scrollIntoView({ block: 'nearest' });
      } else {
        item.classList.remove('selected');
      }
    });
  }

  // =========================================================================
  // 6. CINEMATIC VIDEO CONTROLS & FULL HD LIGHTBOX
  // =========================================================================
  const heroVideo = document.getElementById('heroBgVideo');
  const videoToggleBtn = document.getElementById('videoToggleBtn');
  const videoIcon = document.getElementById('videoIcon');
  const videoStatusText = document.getElementById('videoStatusText');

  const watchFilmBtn = document.getElementById('watchFilmBtn');
  const videoLightboxModal = document.getElementById('videoLightboxModal');
  const videoLightboxClose = document.getElementById('videoLightboxClose');
  const lightboxVideoPlayer = document.getElementById('lightboxVideoPlayer');

  // Background Ambient Video Play/Pause
  videoToggleBtn?.addEventListener('click', () => {
    if (!heroVideo) return;
    if (heroVideo.paused) {
      heroVideo.play();
      if (videoIcon) videoIcon.textContent = 'pause';
      if (videoStatusText) videoStatusText.textContent = 'Ambient Video';
    } else {
      heroVideo.pause();
      if (videoIcon) videoIcon.textContent = 'play_arrow';
      if (videoStatusText) videoStatusText.textContent = 'Video Paused';
    }
  });

  // Watch 50th Anniversary Film Lightbox Modal
  function openVideoLightbox() {
    videoLightboxModal?.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (lightboxVideoPlayer) {
      lightboxVideoPlayer.currentTime = 0;
      lightboxVideoPlayer.play().catch(() => {});
    }
    // Pause background video while lightbox is playing
    if (heroVideo && !heroVideo.paused) {
      heroVideo.pause();
    }
  }

  function closeVideoLightbox() {
    videoLightboxModal?.classList.remove('active');
    document.body.style.overflow = '';
    if (lightboxVideoPlayer) {
      lightboxVideoPlayer.pause();
    }
    // Resume background video
    if (heroVideo && heroVideo.paused) {
      heroVideo.play().catch(() => {});
    }
  }

  watchFilmBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    openVideoLightbox();
  });

  videoLightboxClose?.addEventListener('click', closeVideoLightbox);

  videoLightboxModal?.addEventListener('click', (e) => {
    if (e.target === videoLightboxModal) closeVideoLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoLightboxModal?.classList.contains('active')) {
      closeVideoLightbox();
    }
  });
});
