const birthdayInput = document.getElementById("birthday-input");
const checkButton = document.getElementById("check-button");
const checkResult = document.getElementById("check-result");
const today = new Date();

const numberOfDays = () => {
  const birthdayDate = new Date(birthdayInput.value);
  const birthdayMonth = birthdayDate.getMonth();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  if (birthdayMonth >= todayMonth && birthdayDate.getDate() >= todayDate) {
    birthdayDate.setFullYear(today.getFullYear());
  } else if (birthdayMonth <= todayMonth) {
    birthdayDate.setFullYear(today.getFullYear() + 1);
  }

  const difference = Math.ceil((birthdayDate - today) / (1000 * 60 * 60 * 24));

  //Склонение слова "дней" по правилам русского языка
  let days = "";
  switch (difference.toString()[difference.toString().length - 1]) {
    case "0":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      days = "дней";
      break;
    case "1":
      days = "день";
      if (difference == 11) {
        days = "дней";
      }
      break;
    case "2":
    case "3":
    case "4":
      days = "дня";
      if (difference >= 12 && difference <= 14) {
        days = "дней";
      }
      break;
    default:
      days = "дней";
  }

  checkResult.innerText = `До вашего дня рождения осталось ${Math.abs(
    difference
  )} ${days}`;
  checkResult.style.color = "black";

  //Проверка пустого значения
  if (birthdayInput.value == "") {
    checkResult.innerText = `Введите дату рождения`;
    checkResult.style.color = "red";
  }
};

checkButton.addEventListener("click", numberOfDays);
