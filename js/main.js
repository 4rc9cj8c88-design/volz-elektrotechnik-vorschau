/* VOLZ Elektrotechnik — Interaktion (kein Inline-JS, CSP-fähig) */
(function () {
  'use strict';

  // Jahr im Footer
  var y = document.getElementById('year');
  if (y) { y.textContent = new Date().getFullYear(); }

  // Nav-Hintergrund beim Scrollen
  var nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 40) { nav.classList.add('scrolled'); }
    else { nav.classList.remove('scrolled'); }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile-Menü
  var burger = document.getElementById('burger');
  var links = document.getElementById('navlinks');
  if (burger && links) {
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      nav.classList.toggle('menu-open', open);
      burger.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        nav.classList.remove('menu-open');
      }
    });
  }

  // Reveal on scroll
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          // leichte Staffelung innerhalb einer Gruppe
          var sibs = en.target.parentElement ? en.target.parentElement.querySelectorAll('.reveal') : [en.target];
          var idx = Array.prototype.indexOf.call(sibs, en.target);
          en.target.style.transitionDelay = Math.min(idx * 70, 350) + 'ms';
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });

    // Hero Ken-Burns per Parallax leicht
    var heroImg = document.querySelector('.hero__media img');
    if (heroImg) {
      window.addEventListener('scroll', function () {
        var y = window.scrollY;
        if (y < window.innerHeight) {
          heroImg.style.transform = 'scale(1.1) translateY(' + (y * 0.12) + 'px)';
        }
      }, { passive: true });
    }
  }
})();
