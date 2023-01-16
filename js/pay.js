const btnP = document.querySelector('.Pagar');
const bgModal = document.querySelector('.bgModal');
const modalContainer = document.querySelector('.modalContainer');

// abrir modal

btnP.addEventListener('click', (e) => {
  e.preventDefault();
  bgModal.classList.remove('hidden');
  modalContainer.classList.toggle('modal-close');
});

window.addEventListener('click', (e) => {
  if (e.target == bgModal) {
    modalContainer.classList.toggle('modal-close');
    setTimeout(() => {
      bgModal.classList.add('hidden');
    }, 600);
  }
});
