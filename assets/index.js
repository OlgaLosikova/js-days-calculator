const birthdayInput = document.getElementById("birthday-input");
const checkButton = document.getElementById("check-button");
const checkResult = document.getElementById("check-result");
const today = new Date();
let days = "";

const numberOfDays = () => {
  const birthdayDate = new Date(birthdayInput.value);
  const todayDay = today.getDate();
  const birthdayMonth = birthdayDate.getMonth();
  const todayMonth = today.getMonth();
  if (
    birthdayMonth >= todayMonth &&
    birthdayDate.getDate() >= todayDay &&
    birthdayInput.value != ""
  ) {
    birthdayDate.setFullYear(today.getFullYear());
  } else if (birthdayMonth <= todayMonth && birthdayInput.value != "") {
    birthdayDate.setFullYear(today.getFullYear() + 1);
    console.log(birthdayDate.getFullYear());
  }

  const difference = Math.ceil((birthdayDate - today) / (1000 * 60 * 60 * 24));
  //Склонение слова "дней" по правилам русского языка

  switch (difference.toString()[difference.toString().length - 1]) {
    case "0" || "5" || "6" || "7" || "8" || "9":
      days = "дней";
      console.log(`${checkResult.innerText} ${days}`);
      break;
    case "1":
      days = "день";
      console.log(`${checkResult.innerText} ${days}`);
      break;
    case "2" || "3" || "4":
      days = "дня";
      console.log(`${checkResult.innerText} ${days}`);
      break;
  }
  checkResult.innerText = `До вашего дня рождения осталось ${Math.abs(
    difference
  )} ${days}`;
  checkResult.style.color = "black";
  if (birthdayInput.value == "") {
    checkResult.innerText = `Введите дату рождения`;
    checkResult.style.color = "red";
  }
};
checkButton.addEventListener("click", numberOfDays);
