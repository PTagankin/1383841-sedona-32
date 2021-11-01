const modalOpen = document.querySelector('.search');
const modal = document.querySelector('.modal-container');
const modalClose = document.querySelector('.modal-close-button');
const popups = document.querySelector('.popup');
const popup = document.querySelector('.popover');


function handler1() {
  popup.classList.remove('popover-disable');
}

function handler2() {
  popup.classList.add('popover-disable');
}

modalOpen.addEventListener('click', function() {
  modal.classList.remove('modal-closed');
}) 

modalClose.addEventListener('click', function(){
  modal.classList.add('modal-closed');
})

popups.addEventListener('click', handler1);