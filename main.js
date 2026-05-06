/* ------------------------------------------------------------------
   TrendForce Seminar — interactions
   Vanilla JS + GSAP + ScrollTrigger + SplitType (SplitText alt)
   ------------------------------------------------------------------ */

gsap.registerPlugin(ScrollTrigger);

/* Set hero initial states immediately so elements are hidden before preloader slides away */
gsap.set('#hero-bg-img',  { opacity: 0, scale: 1.05 });
gsap.set('#hero-text-img', { clipPath: 'inset(0 100% 0 0)' });
gsap.set('.hero-meta',    { yPercent: 24, opacity: 0 });
gsap.set('#nav',          { y: -20, opacity: 0 });

/* =============================================================
   PRELOADER
   ============================================================= */
(function preloader(){
  const bar = document.getElementById('pre-bar');
  const pct = document.getElementById('pre-pct');
  const root = document.getElementById('pre');
  let p = 0;
  const t = setInterval(()=>{
    p += Math.random() * 14 + 5;
    if(p >= 100){ p = 100; clearInterval(t); finish(); }
    bar.style.width = p + '%';
    pct.textContent = Math.round(p) + '%';
  }, 80);
  function finish(){
    gsap.to(root, { y: '-101%', duration: .9, delay: .2, ease: 'power3.inOut', onComplete: ()=>{ root.remove(); startHero(); } });
  }
})();

/* =============================================================
   HERO ANIMATION
   ============================================================= */
function startHero(){
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.to('#hero-bg-img',  { opacity: 1, scale: 1, duration: 1.4, ease: 'power2.out' }, 0);
  tl.to('#hero-text-img', { clipPath: 'inset(0 0% 0 0)', duration: 1.2 }, 0.35);
  tl.to('.hero-meta',    { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.12 }, 0.5);
  tl.to('#nav',          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', clearProps: 'all' }, 0.2);

  // Photo: subtle zoom on scroll
  gsap.to('#hero-bg-img', {
    scale: 1.08,
    ease: 'none',
    scrollTrigger: { trigger: '#hero-section', start: 'top top', end: 'bottom top', scrub: true }
  });

  // Center content: lift + fade on scroll
  gsap.to('#hero-section .flex-1', {
    yPercent: -8, opacity: 0, ease: 'none',
    scrollTrigger: { trigger: '#hero-section', start: 'top top', end: '65% top', scrub: true }
  });
}

/* =============================================================
   SCROLL REVEALS
   ============================================================= */
function initReveals(){
  // Overview — serif copy line-reveal
  const ov = new SplitType('#overview-copy', { types: 'lines, words' });
  gsap.set(ov.words, { yPercent: 110, opacity: 0 });
  gsap.to(ov.words, {
    yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.012, ease: 'power3.out',
    scrollTrigger: { trigger: '#overview-copy', start: 'top 75%' }
  });

  // Agenda rows — slide in from left
  gsap.from('.agenda-row', {
    x: -60, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    scrollTrigger: { trigger: '#agenda-rows', start: 'top 75%' }
  });

  // Speaker cards — fade up
  gsap.from('.sp-card', {
    y: 60, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out',
    scrollTrigger: { trigger: '#speakers-grid', start: 'top 80%' }
  });

  // Section headings — SplitText reveal
  document.querySelectorAll('.display').forEach(h => {
    const sp = new SplitType(h, { types: 'lines, words' });
    gsap.set(sp.words, { yPercent: 110 });
    gsap.to(sp.words, {
      yPercent: 0, duration: 1, stagger: 0.05, ease: 'power3.out',
      scrollTrigger: { trigger: h, start: 'top 85%' }
    });
  });

  // Register price — scale in
  gsap.from('.reg-price', {
    scale: 0.9, opacity: 0, duration: 1.2, ease: 'power3.out',
    scrollTrigger: { trigger: '.reg-price', start: 'top 80%' }
  });


// Giveaway cards — stagger up
  gsap.from('#giveaway .grid > div', {
    y: 50, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    scrollTrigger: { trigger: '#giveaway .grid', start: 'top 82%' }
  });

// Register copy — slide in from right
  gsap.from('#register .max-w-md', {
    x: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
    scrollTrigger: { trigger: '#register .max-w-md', start: 'top 80%' }
  });

  // Venue — address bar slides in, grid fades up
  gsap.from('#venue .flex.items-start.gap-4', {
    x: -30, opacity: 0, duration: 0.8, ease: 'power3.out',
    scrollTrigger: { trigger: '#venue .flex.items-start.gap-4', start: 'top 80%' }
  });
  gsap.from('#venue .grid > *', {
    y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
    scrollTrigger: { trigger: '#venue .grid', start: 'top 80%' }
  });

  // Contact — stagger columns
  gsap.from('#contact .grid > div', {
    y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
    scrollTrigger: { trigger: '#contact .grid', start: 'top 80%' }
  });
}

/* =============================================================
   NAV: scroll-state
   ============================================================= */
ScrollTrigger.create({
  start: 60,
  end: 99999,
  onUpdate: (self) => {
    document.getElementById('nav').classList.toggle('scrolled', self.scroll() > 60);
  }
});

/* =============================================================
   CURSOR
   ============================================================= */
(function cursor(){
  if (!window.matchMedia('(pointer: fine)').matches) return;
  const c = document.getElementById('cursor');
  let tx = 0, ty = 0, cx = 0, cy = 0, rafId;
  window.addEventListener('mousemove', (e)=>{ tx = e.clientX; ty = e.clientY; });
  function raf(){
    cx += (tx - cx) * 0.2; cy += (ty - cy) * 0.2;
    c.style.transform = `translate(${cx}px, ${cy}px)`;
    rafId = requestAnimationFrame(raf);
  }
  raf();
  document.querySelectorAll('a, button, .agenda-row, .sp-card').forEach(el => {
    el.addEventListener('mouseenter', ()=>{ c.style.width='28px'; c.style.height='28px'; });
    el.addEventListener('mouseleave', ()=>{ c.style.width='8px'; c.style.height='8px'; });
  });
})();

/* =============================================================
   ACCORDION
   ============================================================= */
function initAccordion(){
  document.querySelectorAll('.ag-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const row  = btn.closest('.agenda-row');
      const body = row.querySelector('.ag-body');
      const isOpen = row.classList.contains('open');
      if(isOpen){
        body.style.maxHeight = '0';
        row.classList.remove('open');
      } else {
        body.style.maxHeight = body.scrollHeight + 'px';
        row.classList.add('open');
      }
    });
  });
}

/* =============================================================
   MOBILE MENU
   ============================================================= */
(function mobileMenu(){
  const toggle  = document.getElementById('mob-toggle');
  const drawer  = document.getElementById('mob-nav');
  if(!toggle || !drawer) return;

  const links   = drawer.querySelectorAll('.mob-nav-link, .mob-nav-footer a');
  let isOpen    = false;
  let tl        = null;

  function open(){
    isOpen = true;
    toggle.classList.add('mob-open');
    toggle.setAttribute('aria-expanded', 'true');
    drawer.classList.add('mob-open');
    drawer.setAttribute('aria-hidden', 'false');

    if(tl) tl.kill();
    tl = gsap.timeline();
    tl.to(drawer, { y: '0%', duration: .65, ease: 'power3.inOut' })
      .fromTo(links,
        { yPercent: 70, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: .5, stagger: .07, ease: 'power3.out' },
        '-=.3');
  }

  function close(){
    isOpen = false;
    toggle.classList.remove('mob-open');
    toggle.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');

    if(tl) tl.kill();
    tl = gsap.to(drawer, {
      y: '-100%', duration: .5, ease: 'power3.inOut',
      onComplete(){ drawer.classList.remove('mob-open'); }
    });
  }

  toggle.addEventListener('click', () => isOpen ? close() : open());
  links.forEach(a => a.addEventListener('click', close));

  // Close on resize to desktop
  window.addEventListener('resize', () => {
    if(window.innerWidth >= 768 && isOpen) close();
  });
})();

/* =============================================================
   HIGHLIGHT STACKING CARDS
   ============================================================= */
function initStackingCards() {
  const sections = document.querySelectorAll('[data-stacking-cards-init]');

  function getTier() {
    const w = window.innerWidth;
    if (w <= 479) return 'mobile-portrait';
    if (w <= 767) return 'mobile-landscape';
    if (w <= 991) return 'tablet';
    return 'desktop';
  }

  function parseValues(section, attr, fallback) {
    const raw = section.getAttribute(attr);
    if (!raw) return fallback;
    const vals = raw.split(',').map(v => v.trim()).filter(Boolean);
    return vals.length ? vals : fallback;
  }

  function parseRotate(section, attr) {
    const vals = parseValues(section, attr, ['0', '4', '-4']);
    return vals.map(v => parseFloat(v)).filter(v => !isNaN(v));
  }

  function pulse(el) {
    const w = el.offsetWidth, h = el.offsetHeight;
    const fs = parseFloat(getComputedStyle(el).fontSize);
    const stretch = 1.5 * fs;
    gsap.timeline()
      .to(el, { scaleX: (w + stretch) / w, scaleY: (h - stretch * 0.33) / h, duration: 0.1, ease: 'power1.out' })
      .to(el, { scaleX: 1, scaleY: 1, duration: 1, ease: 'elastic.out(1,0.3)' });
  }

  function init() {
    const tier = getTier();

    ScrollTrigger.getAll().forEach(t => {
      if (t.vars?.id?.startsWith('hl-stack')) t.kill();
    });
    sections.forEach(s => {
      s.querySelectorAll('[data-stacking-card-target]').forEach(el => {
        gsap.killTweensOf(el);
        gsap.set(el, { clearProps: 'all' });
      });
    });

    sections.forEach(section => {
      const enabled =
        (tier === 'desktop'          && section.dataset.stackingCardsDesktop === 'true') ||
        (tier === 'tablet'           && section.dataset.stackingCardsTablet  === 'true') ||
        ((tier === 'mobile-portrait' || tier === 'mobile-landscape') && section.dataset.stackingCardsMobile === 'true');
      if (!enabled) return;

      const cards = Array.from(section.querySelectorAll('[data-stacking-card]'));
      if (!cards.length) return;

      const stickyTop = parseFloat(getComputedStyle(cards[0]).top) || 0;

      const rotates = parseRotate(section, `data-stacking-cards-${tier}-rotate`);
      const xs      = parseValues(section, `data-stacking-cards-${tier}-x`,      ['0em','0em','0em']);
      const ys      = parseValues(section, `data-stacking-cards-${tier}-y`,      ['0em','0em','0em']);

      cards.forEach((card, i) => {
        const target = card.querySelector('[data-stacking-card-target]');
        if (!target) return;

        gsap.set(target, { rotate: 0, x: 0, y: 0, scale: 1, zIndex: cards.length - i });

        gsap.to(target, {
          rotate: rotates[i % rotates.length],
          x:      xs[i % xs.length],
          y:      ys[i % ys.length],
          ease: 'power1.in', overwrite: 'auto',
          scrollTrigger: {
            id: `hl-stack-rotate-${i}`,
            trigger: card,
            start: 'top 75%',
            end: `top-=${stickyTop} top`,
            scrub: true
          }
        });

        ScrollTrigger.create({
          id: `hl-stack-bounce-${i}`,
          trigger: card,
          start: `top-=${stickyTop} top`,
          onEnter: () => pulse(target)
        });
      });
    });

    ScrollTrigger.refresh();
  }

  init();

  let lastTier = getTier();
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const next = getTier();
      if (next !== lastTier) { lastTier = next; init(); }
    }, 250);
  });
}

/* =============================================================
   GLOBAL PARALLAX
   ============================================================= */
function initGlobalParallax() {
  const mm = gsap.matchMedia();
  mm.add(
    {
      isMobile:          '(max-width:479px)',
      isMobileLandscape: '(max-width:767px)',
      isTablet:          '(max-width:991px)',
      isDesktop:         '(min-width:992px)'
    },
    (context) => {
      const { isMobile, isMobileLandscape, isTablet } = context.conditions;
      const ctx = gsap.context(() => {
        document.querySelectorAll('[data-parallax="trigger"]').forEach((trigger) => {
          const disable = trigger.getAttribute('data-parallax-disable');
          if (
            (disable === 'mobile'          && isMobile) ||
            (disable === 'mobileLandscape' && isMobileLandscape) ||
            (disable === 'tablet'          && isTablet)
          ) return;

          const target    = trigger.querySelector('[data-parallax="target"]') || trigger;
          const direction = trigger.getAttribute('data-parallax-direction') || 'vertical';
          const prop      = direction === 'horizontal' ? 'xPercent' : 'yPercent';
          const scrubAttr = trigger.getAttribute('data-parallax-scrub');
          const scrub     = scrubAttr ? parseFloat(scrubAttr) : true;
          const startVal  = parseFloat(trigger.getAttribute('data-parallax-start') ?? '20');
          const endVal    = parseFloat(trigger.getAttribute('data-parallax-end')   ?? '-20');
          const scrollStart = `clamp(${trigger.getAttribute('data-parallax-scroll-start') || 'top bottom'})`;
          const scrollEnd   = `clamp(${trigger.getAttribute('data-parallax-scroll-end')   || 'bottom top'})`;

          gsap.fromTo(target, { [prop]: startVal }, {
            [prop]: endVal, ease: 'none',
            scrollTrigger: { trigger, start: scrollStart, end: scrollEnd, scrub }
          });
        });
      });
      return () => ctx.revert();
    }
  );
}

/* =============================================================
   INIT (after DOM)
   ============================================================= */
window.addEventListener('load', () => {
  initReveals();
  initAccordion();
  initStackingCards();
  initGlobalParallax();
  ScrollTrigger.refresh();
});
