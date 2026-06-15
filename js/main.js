/* ============================================================
   OMAN LARA EVENTS – Script principal
   js/main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ----------------------------------------------------------
     1. ANIMATIONS AU SCROLL (Intersection Observer)
  ---------------------------------------------------------- */
  const fadeElements = document.querySelectorAll('.fade-in');

  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          scrollObserver.unobserve(entry.target); // ne s'anime qu'une fois
        }
      });
    },
    { threshold: 0.12 }
  );

  fadeElements.forEach((el) => scrollObserver.observe(el));


  /* ----------------------------------------------------------
     2. NAVIGATION – scroll doux + fermeture mobile
  ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* Effet de fond de la nav au scroll */
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.boxShadow = '0 4px 24px rgba(123, 79, 166, 0.1)';
    } else {
      nav.style.boxShadow = 'none';
    }
  });


  /* ----------------------------------------------------------
     3. FORMULAIRE DE CONTACT – validation légère + feedback
  ---------------------------------------------------------- */
  const submitBtn = document.getElementById('submitBtn');

  if (submitBtn) {
    submitBtn.addEventListener('click', function () {
      const prenom = document.getElementById('prenom')?.value.trim();
      const email  = document.getElementById('email')?.value.trim();
      const message = document.getElementById('message')?.value.trim();

      // Validation minimale
      if (!prenom || !email || !message) {
        showFormError('Veuillez remplir au moins votre prénom, email et message.');
        return;
      }

      if (!isValidEmail(email)) {
        showFormError('Veuillez entrer une adresse email valide.');
        return;
      }

      // Succès (simulation – brancher à un backend ou service email)
      submitBtn.textContent = '✓ Message envoyé !';
      submitBtn.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.textContent = 'Envoyer ma demande →';
        submitBtn.style.background = '';
        submitBtn.disabled = false;
      }, 4000);
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showFormError(msg) {
    let errEl = document.getElementById('form-error');
    if (!errEl) {
      errEl = document.createElement('p');
      errEl.id = 'form-error';
      errEl.style.cssText = `
        color: #c0392b;
        font-size: 0.85rem;
        margin-top: -8px;
        margin-bottom: 12px;
        padding: 10px 14px;
        background: #fdecea;
        border-radius: 6px;
        border-left: 3px solid #c0392b;
      `;
      submitBtn.parentNode.insertBefore(errEl, submitBtn);
    }
    errEl.textContent = msg;
    setTimeout(() => errEl.remove(), 4000);
  }


  /* ----------------------------------------------------------
     4. GALERIE – compteur d'images chargées
  ---------------------------------------------------------- */
  const galleryImgs = document.querySelectorAll('.gallery-item img');
  galleryImgs.forEach((img) => {
    img.addEventListener('error', function () {
      // fallback déjà géré par l'attribut onerror dans le HTML
      this.style.opacity = '0.6';
    });
  });


  /* ----------------------------------------------------------
     5. BURGER MENU (mobile) – à activer si nécessaire
     Pour l'activer : ajouter un bouton #burger-btn dans le HTML
  ---------------------------------------------------------- */
  const burgerBtn = document.getElementById('burger-btn');
  const navLinks  = document.querySelector('.nav-links');

  if (burgerBtn && navLinks) {
    burgerBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('nav-open');
      burgerBtn.setAttribute('aria-expanded', isOpen);
    });

    // Fermer le menu si on clique en dehors
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) {
        navLinks.classList.remove('nav-open');
        burgerBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

});
