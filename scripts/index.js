const editButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup-edit');
const editPopupClose = editPopup.querySelector('.popup-edit__close-button');
const inputName = editPopup.querySelector('.popup-edit__input_type_name');
const inputJob = editPopup.querySelector('.popup-edit__input_type_activity');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__activity');
const editPopupSave = editPopup.querySelector('.popup-edit__info');

const addButton = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('.popup-add');
const addPopupClose = addPopup.querySelector('.popup-add__close-button');
const inputTitle = document.querySelector('.popup-add__input_type_title');
const inputLink = document.querySelector('.popup-add__input_type_link');
const addPopupSave = addPopup.querySelector('.popup-add__info');

const picturePopup = document.querySelector('.popup-picture');
const picturePopupClose = picturePopup.querySelector('.popup-picture__close-button');
const picturePopupPhoto = picturePopup.querySelector('.popup-picture__photo');
const picturePopupCaption = picturePopup.querySelector('.popup-picture__caption');

const elementsTemplate = document.querySelector('.elements-template').content;;
const elementsCardList = document.querySelector('.elements__cards');


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'

  }
];

// Функция изменения данных пользователя
function editPopupToggle() {
  if (!(editPopup.classList.contains('popup-edit_opened'))) {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
  }
  editPopup.classList.toggle('popup-edit_opened');
}

function editFormSubmitHandler(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  editPopupToggle();
}

editButton.addEventListener('click', editPopupToggle);
editPopupClose.addEventListener('click', editPopupToggle);
editPopupSave.addEventListener('submit', editFormSubmitHandler);

// Функция открытия попапа добавления карточки
function addPopupToggle() {
  addPopup.classList.toggle('popup-add_opened');
}

addButton.addEventListener('click', addPopupToggle);
addPopupClose.addEventListener('click', addPopupToggle);
addPopupSave.addEventListener('submit', addFormSubmitHandler);

// Функция добавления лайка в карточки
function likeElement(event) {
  event.target.classList.toggle('elements__like_active');
}

// Функция создания карточки
function addElement(name, link) {
  const cardElement = elementsTemplate.cloneNode(true);
  cardElement.querySelector('.elements__title').textContent = name;
  cardElement.querySelector('.elements__photo').src = link;
  cardElement.querySelector('.elements__photo').alt = name;
  cardElement.querySelector('.elements__like').addEventListener('click', likeElement);
  cardElement.querySelector('.elements__delete').addEventListener('click', deleteElement);
  cardElement.querySelector('.elements__photo').addEventListener('click', picturePopupSlide);
  return cardElement;
}

// Функция добавления карточки
function renderAddElement(element) {
  elementsCardList.prepend(element);
}

// Функция записи данных новой карточки
function addFormSubmitHandler(event) {
  event.preventDefault();
  const name = inputTitle.value;
  const link = inputLink.value;
  inputTitle.value = '';
  inputLink.value = '';
  const element = addElement(name, link);
  renderAddElement(element);
  addPopupToggle();
}

// Инициализыция карточек
initialCards.forEach(item => {
  const element = addElement(item.name, item.link);
  renderAddElement(element);
});

// Функция удаления карточки
function deleteElement(event) {
  const cardElement = event.target.closest('.elements__card');
  cardElement.remove();
}

// Функция открытия попапа фото
function picturePopupToggle() {
  picturePopup.classList.toggle('popup-picture_opened');
}

// Функция просмотра попапа фото
function picturePopupSlide(event) {
  const cardElement = event.target.closest('.elements__photo');
  picturePopupPhoto.src = cardElement.src;
  picturePopupCaption.textContent = cardElement.alt;
  picturePopupToggle();
}

picturePopupClose.addEventListener('click', picturePopupToggle);
