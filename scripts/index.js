let openButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close-button');
let inputName = popup.querySelector('.popup__input_type_name');
let inputJob = popup.querySelector('.popup__input_type_activity');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__activity');
let saveButton = popup.querySelector('.popup__info');

function popupToggle () {
    if (popup.classList.toggle('popup_opened')) {
        inputName.value = profileName.textContent;
        inputJob.value = profileJob.textContent;
      }
  }
  
openButton.addEventListener('click', popupToggle);
closeButton.addEventListener('click', popupToggle);

function formSubmitHandler (evt) {
        evt.preventDefault();
        profileName.textContent = inputName.value;
        profileJob.textContent = inputJob.value; 
        popupToggle ();
      }

saveButton.addEventListener('submit', formSubmitHandler);

