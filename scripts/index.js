let buttonOpen = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let buttonClose = popup.querySelector('.popup__close-button');
let inputName = popup.querySelector('.popup__input_type_name');
let inputJob = popup.querySelector('.popup__input_type_activity');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__activity');
let buttonSave = popup.querySelector('.popup__info');

function popupOpen() {
    popup.classList.add('popup_opened');
    inputName.value = profileName.textContent;;
    inputJob.value = profileJob.textContent;
}

function popupClose() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    inputName.getAttribute('value');
    inputJob.getAttribute('value');
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value; 
    popupClose()
}

buttonOpen.addEventListener('click', popupOpen);
buttonClose.addEventListener('click', popupClose);
buttonSave.addEventListener('submit', formSubmitHandler);