const sectionList = document.querySelectorAll('.content');
const button = document.createElement('button');
button.textContent = 'перейти к следующему разделу';
button.classList.add('button-style'); 

let currentSectionIndex = 0;

button.addEventListener('click', () => {
  sectionList[currentSectionIndex].style.display = 'none';
  if (currentSectionIndex === sectionList.length - 1) {
    currentSectionIndex = 0;
  } else {
    currentSectionIndex++;
  }
  sectionList[currentSectionIndex].style.display = 'block';
});

window.addEventListener('resize', () => {
  if (window.innerWidth < 1000) {
    // показываем только текущий section
    sectionList[0].style.display = 'block';
    for (let i = 1; i < sectionList.length; i++) {
      sectionList[i].style.display = 'none';
    }

    // добавляем кнопку
    const main = document.querySelector('.main');
    main.append(button);
  } else {
    // удаляем все style.display
    sectionList.forEach((section) => {
      section.removeAttribute('style');
    });

    // удаляем кнопку
    button.remove();
  }
});

// вызываем resize, чтобы сработал при загрузке страницы
window.dispatchEvent(new Event('resize'));
