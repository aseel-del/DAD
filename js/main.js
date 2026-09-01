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

  // 5. Search Modal Toggle
  const searchTriggers = document.querySelectorAll('#searchTriggerBtn, .search-trigger-btn');
  const searchModal = document.getElementById('searchModal');
  const searchClose = document.getElementById('searchCloseBtn');
  const searchInput = document.getElementById('searchInput');

  searchTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      searchModal?.classList.add('active');
      setTimeout(() => searchInput?.focus(), 100);
    });
  });

  searchClose?.addEventListener('click', () => {
    searchModal?.classList.remove('active');
  });

  searchModal?.addEventListener('click', (e) => {
    if (e.target === searchModal) {
      searchModal.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchModal?.classList.contains('active')) {
      searchModal.classList.remove('active');
    }
  });

  // 6. Hero Background Video Toggle Control
  const heroVideo = document.getElementById('heroBgVideo');
  const videoToggleBtn = document.getElementById('videoToggleBtn');
  const videoIcon = document.getElementById('videoIcon');
  const videoStatusText = document.getElementById('videoStatusText');

  videoToggleBtn?.addEventListener('click', () => {
    if (!heroVideo) return;
    if (heroVideo.paused) {
      heroVideo.play();
      if (videoIcon) videoIcon.textContent = 'pause';
      if (videoStatusText) videoStatusText.textContent = 'Video Active';
    } else {
      heroVideo.pause();
      if (videoIcon) videoIcon.textContent = 'play_arrow';
      if (videoStatusText) videoStatusText.textContent = 'Video Paused';
    }
  });
});
