function calcFontSize(container, str, min, max) {
  //  проверки
  if (str.length > 100 || !str) {
    container.innerHTML = "Достигнут лимит символов!";
    return null;
  }

  if (min < 1 || !Number.isInteger(min)) {
    return null;
  }

  if (max < min || !Number.isInteger(max)) {
    return null;
  }

  //  первоначальное значение высоты
  let defaultValueHeight = container.style.height;
  //  вставляем текст
  container.innerHTML = str;

  //  получаем высоту
  let height = container.offsetHeight;
  //  получаем ширину
  let width = container.offsetWidth;
  //  устанавливаем максимальный размер шрифта
  container.style.fontSize = `${max}px`;
  //  устанавливаем высоту
  container.style.height = "100%";

  //  получаем новые значения
  let newHeight = container.offsetHeight;
  let newWidth = container.offsetWidth;

  //  возвращаем первоначальную высоту
  container.style.height = defaultValueHeight;

  //  сравниваем
  if (newHeight <= height && newWidth <= width) {
    return max;
  } else if (max === min) {
    return null;
  } else {
    calcFontSize(container, str, min, max - 1);
  }
}

//  вызов функции
calcFontSize(
  document.getElementById("container"),
  "JS подстраивает размер шрифта максимально возможный под размеры этого блока",
  1,
  100
);

//  обработка input

function setValue() {
  const input = document.querySelector(".container-value input").value;
  calcFontSize(document.getElementById("container"), input, 1, 100);
}
