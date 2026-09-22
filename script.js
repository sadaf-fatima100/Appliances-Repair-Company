/* ═══════════════════════════════════════════════════
   HOME FIX HEROES — JAVASCRIPT
═══════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDropdown = document.getElementById('mobileDropdown');

  if (mobileToggle && mobileDropdown) {
    mobileToggle.addEventListener('click', () => {
      mobileDropdown.classList.toggle('open');
      const spans = mobileToggle.querySelectorAll('span');
      if (mobileDropdown.classList.contains('open')) {
        spans[0].style.transform = 'translateY(7px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });

    // Close mobile dropdown when a link is clicked
    mobileDropdown.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDropdown.classList.remove('open');
        const spans = mobileToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      });
    });
  }

  // Smooth appearance on scroll for service cards
  const cards = document.querySelectorAll('.service-card');
  if ('IntersectionObserver' in window) {
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, idx * 70);
          cardObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(24px)';
      card.style.transition = 'opacity 0.45s ease, transform 0.45s ease, border-color 0.28s ease, box-shadow 0.28s ease';
      cardObserver.observe(card);
    });
  }

  // Interactive Neighborhood Search Filter
  const searchInput = document.getElementById('neighborhoodSearch');
  const areaPills = document.querySelectorAll('.area-pill');
  const districtsCount = document.getElementById('districtsCount');

  if (searchInput && areaPills.length > 0) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      let matchCount = 0;

      areaPills.forEach(pill => {
        const name = (pill.getAttribute('data-name') || '').toLowerCase();
        if (query === '' || name.includes(query)) {
          pill.style.display = 'flex';
          matchCount++;
        } else {
          pill.style.display = 'none';
        }
      });

      if (districtsCount) {
        if (query === '') {
          districtsCount.textContent = '24 Key Districts';
        } else {
          districtsCount.textContent = `${matchCount} District${matchCount === 1 ? '' : 's'} Found`;
        }
      }
    });
  }

  // Scroll to top button
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
        scrollTopBtn.style.transform = 'translateY(0)';
      } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
        scrollTopBtn.style.transform = 'translateY(10px)';
      }
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Service Strip Arrows (for cycling/scrolling)
  const stripCardsWrapper = document.querySelector('.strip-cards-wrapper');
  const arrowBtns = document.querySelectorAll('.strip-arrow-btn');
  if (stripCardsWrapper && arrowBtns.length === 2) {
    arrowBtns[0].addEventListener('click', () => {
      stripCardsWrapper.scrollBy({ left: -200, behavior: 'smooth' });
    });
    arrowBtns[1].addEventListener('click', () => {
      stripCardsWrapper.scrollBy({ left: 200, behavior: 'smooth' });
    });
  }

  // Live Dubai Neighborhood Repair Ticker Rotation
  const tickerText = document.getElementById('tickerText');
  const heroLiveTicker = document.getElementById('heroLiveTicker');
  if (tickerText && heroLiveTicker) {
    const dubaiUpdates = [
      "📍 Dubai Marina: Samsung Front-Load Washer Repaired (6m ago)",
      "📍 Arabian Ranches: Bosch Double-Door Refrigerator Repaired (14m ago)",
      "📍 Downtown Dubai: Siemens Dishwasher Diagnostic Completed (22m ago)",
      "📍 Palm Jumeirah: Miele Cooking Range Gas Burner Fixed (31m ago)",
      "📍 JVC (Jumeirah Village): LG Dryer Heating Element Replaced (42m ago)",
      "📍 Dubai Hills Estate: Whirlpool Built-in Fridge Serviced (55m ago)"
    ];
    let updateIdx = 0;
    setInterval(() => {
      heroLiveTicker.style.opacity = '0';
      heroLiveTicker.style.transform = 'translateY(4px)';
      setTimeout(() => {
        updateIdx = (updateIdx + 1) % dubaiUpdates.length;
        tickerText.textContent = dubaiUpdates[updateIdx];
        heroLiveTicker.style.opacity = '1';
        heroLiveTicker.style.transform = 'translateY(0)';
      }, 400);
    }, 4800);
  }
});

