(() => {
  const refs = {
    submit: document.querySelector('.reg-form__button')
  };

  refs.submit.addEventListener('click', toggleModal);
  
  function toggleModal() {
    location.reload();
  }
})();