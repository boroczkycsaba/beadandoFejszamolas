let szam1 = 0;
let szam2 = 0;
let szamSumValue = 0;
let aktualisMuvelet = "+";

let questionContent = '<i class="fa-sharp fa-solid fa-question"></i>';
let okContent = '<i class="fa-sharp fa-solid fa-thumbs-up"></i>';
let questionOrOkElement = document.getElementById("questionOrOk");
let newGameButtonElement = document.getElementById("newGameButton");

let sumElement = document.querySelector('input[type="number"]');

let gameTippEndProgressElement = document.getElementById("gameTippEndProgress");
let gameTippEndTimer;
let tippEndTime = 5;

function gameTippProgressFunc() {
  gameTippEndProgressElement.value=0;
  tippEndTime = 5;
  gameTippEndTimer = setInterval(function () {
    if (tippEndTime <= 0) {
      console.debug("Sajnos nem nyert próbálkozz újra");
      clearInterval(gameTippEndTimer);
    }
    gameTippEndProgressElement.value = 5 - tippEndTime;
    tippEndTime -= 1;
  }, 500);
}

function loadPageData() {
  questionOrOkElement.innerHTML = questionContent;
  szam1 = randomFunction(99, 1);
  szam2 = randomFunction(99, 1);
  let szamElements = document.querySelectorAll(".szam");
  szamElements.forEach((szamElement) => {
    if (szamElement.classList.contains("szam1")) {
      szamElement.innerHTML = szam1;
    }
    if (szamElement.classList.contains("szam2")) {
      szamElement.innerHTML = szam2;
    }
  });
  szamSumValue = eval(szam1 + "" + aktualisMuvelet + "" + szam2);
  sumElement.disabled = false;
  sumElement.value = "";
  gameTippProgressFunc();

}

function szamEllenorzes(sumElement) {
  console.debug(`Hidden cheat: ${szamSumValue}`);
  if (sumElement.value && +sumElement.value === szamSumValue) {
    questionOrOkElement.innerHTML = okContent;
    sumElement.disabled = true;
    clearInterval(gameTippEndTimer);
    gameTippEndProgressElement.value=tippEndTime;
  }
}

function randomFunction(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

loadPageData();
