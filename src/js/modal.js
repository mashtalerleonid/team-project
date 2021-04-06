(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalMobileBtn: document.querySelector('[data-modal-open-mobile]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    burger: document.querySelector('.menu-toggle'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalMobileBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  
  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle('is-hidden');
    refs.burger.classList.toggle('is-hidden');
  }
})();