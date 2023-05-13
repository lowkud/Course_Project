// Получить кнопку открытия модального окна
var openModalBtnP = document.getElementById("openModalBtnP");

// Получить модальное окно
var modal = document.getElementById("myModal");

// Получить элемент <span>, который закрывает модальное окно
var closeSpan = document.getElementsByClassName("close")[0];

// Открыть модальное окно при клике на кнопку
openModalBtnP.onclick = function() {
  modal.style.display = "block";
}

// Закрыть модальное окно при клике на <span> (x)
closeSpan.onclick = function() {
  modal.style.display = "none";
}

// Закрыть модальное окно при клике вне его области
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}