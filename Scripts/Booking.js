// Получить кнопку, которая открывает модальное окно для формы
var btnForm = document.getElementById("myBtn");

// Получить модальное окно для формы
var modalForm = document.getElementById("myMod");

// Получить элемент <span>, который закрывает модальное окно для формы
var spanForm = document.getElementsByClassName("closeW")[0];

// При нажатии на кнопку открытия модального окна для формы, открыть модальное окно
btnForm.onclick = function() {
  modalForm.style.display = "block";
}

// При нажатии на элемент <span>, который закрывает модальное окно для формы, закрываем модальное окно
spanForm.onclick = function() {
  modalForm.style.display = "none";
}

// При нажатии где угодно вне модального окна для формы, закрываем модальное окно
window.onclick = function(event) {
  if (event.target == modalForm) {
    modalForm.style.display = "none";
  }
}