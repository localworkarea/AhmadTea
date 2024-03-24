// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


// POPUP - DONE ==========================================================================
document.addEventListener("DOMContentLoaded", function() {
  // Проверяем наличие элемента с классом "win-popup"
  var winPopup = document.querySelector('.popup-done');

  if (winPopup) {
      // Добавляем класс "opened" через 1 секунду после загрузки страницы
      setTimeout(function() {
          winPopup.classList.add('opened');
      }, 1500);

      // Получаем кнопку закрытия попапа
      var closeButton = document.querySelector('.popup-done__close');

      if (closeButton) {
          // Обработчик события для клика по кнопке
          closeButton.addEventListener('click', function() {
              // Убираем класс "opened" при клике на кнопку закрытия
              winPopup.classList.remove('opened');
          });
      }
  }
});