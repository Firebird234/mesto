const popupButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");



function openPopup() {
    popup.classList.add("popup_opened");
    popupInputData();
}

function closePopup() {
    popup.classList.remove("popup_opened");
}


popupButton.addEventListener('click', openPopup)
closeButton.addEventListener('click', closePopup)


// Находим форму в DOM
let formElement = document.querySelector(".form"); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = formElement.querySelector(".popup__info_form_name");// Воспользуйтесь инструментом .querySelector()
let jobInput = formElement.querySelector(".popup__info_form_job");// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет


let profileName = document.querySelector(".profile__title");
let profileInfo = document.querySelector(".profile__subtitle");

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileInfo.textContent = jobInput.value;
    closePopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);



function popupInputData() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileInfo.textContent;
}

