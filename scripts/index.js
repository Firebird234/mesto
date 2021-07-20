const popupButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");


function toggle() {
    popup.classList.toggle("popup_opened");
}

popupButton.addEventListener('click', toggle)
closeButton.addEventListener('click', toggle)


// Находим форму в DOM
let formElement = document.querySelector(".form"); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = formElement.querySelector(".popup__name");// Воспользуйтесь инструментом .querySelector()
let jobInput = formElement.querySelector(".popup__info");// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет


function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    let profileNme = document.querySelector(".profile__title");
    let profileinfo = document.querySelector(".profile__subtitle");
    // Вставьте новые значения с помощью textContent
    profileNme.textContent = nameInput.value;
    profileinfo.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', toggle); 

