(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const closeMenuLinkProgram = document.querySelector('.js-close-menu-link-program');
  const closeMenuLinkAbout = document.querySelector('.js-close-menu-link-about');
  const closeMenuLinkTraining = document.querySelector('.js-close-menu-link-training');
  const closeMenuLinkContacts = document.querySelector('.js-close-menu-link-contacts');
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const consultationButton = document.querySelector('.consultation-button__mob-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
      menuBtnRef.setAttribute('aria-expanded', !isMenuOpen);
      menuBtnRef.classList.toggle("is-open");
      mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  closeMenuLinkProgram.addEventListener('click', toggleMenu);
  closeMenuLinkAbout.addEventListener('click', toggleMenu);
  closeMenuLinkTraining.addEventListener('click', toggleMenu);
  closeMenuLinkContacts.addEventListener('click', toggleMenu);
  menuBtnRef.addEventListener('click', toggleMenu);
  consultationButton.addEventListener('click', toggleMenu);
  
  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();