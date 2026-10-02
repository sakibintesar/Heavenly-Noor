/* ============================================================
   HEAVENLY NOOR — Main JS
   Parallax, scroll reveal, mobile nav, shop filters
   Optimized for mobile WebViews (IG, TikTok, FB in-app browsers)
   ============================================================ */
(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Hero parallax (rAF + custom property) ---------- */
  var heroMedia = document.querySelector('.hero-media');
  if (heroMedia && !reducedMotion) {
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          heroMedia.style.setProperty('--scroll-y', String(Math.min(window.scrollY, 800)));
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ---------- 2. Scroll reveal (IntersectionObserver) ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reducedMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---------- 3. Mobile nav drawer ---------- */
  var menuBtn = document.querySelector('.menu-btn');
  var navMobile = document.querySelector('.nav-mobile');
  if (menuBtn && navMobile) {
    menuBtn.addEventListener('click', function () {
      var open = navMobile.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    // Close when a link is tapped
    navMobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMobile.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- 4. Shop filters (tag-based, from IG captions) ---------- */
  var filterChips = document.querySelectorAll('.filter-chips .nb-tag');
  var productCards = document.querySelectorAll('[data-tags]');
  if (filterChips.length && productCards.length) {
    filterChips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var tag = chip.getAttribute('data-filter');

        // Toggle active chip state
        filterChips.forEach(function (c) { c.classList.remove('nb-tag--active'); });
        chip.classList.add('nb-tag--active');

        // Show/hide product cards
        var shown = 0;
        productCards.forEach(function (card) {
          var tags = (card.getAttribute('data-tags') || '').toLowerCase();
          var match = tag === 'all' || tags.indexOf(tag) !== -1;
          card.style.display = match ? '' : 'none';
          if (match) shown++;
        });

        // Update count badge if present
        var countEl = document.querySelector('[data-count]');
        if (countEl) countEl.textContent = String(shown);
      });
    });
  }

  /* ---------- 5. Mark current page in nav ---------- */
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-desktop a, .nav-mobile a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path) a.setAttribute('aria-current', 'page');
  });

  /* ---------- 6. Smooth anchor offset for sticky header ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var headerH = document.querySelector('.site-header')
          ? document.querySelector('.site-header').offsetHeight : 0;
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - headerH - 12,
          behavior: reducedMotion ? 'auto' : 'smooth'
        });
      }
    });
  });

})();
