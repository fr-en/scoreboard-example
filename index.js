const homeNumScr = document.getElementById("home-num-screen");
const homeNum = document.getElementById("home-num");
const homeBtn1 = document.getElementById("home-btn-1");
const homeBtn2 = document.getElementById("home-btn-2");
const homeBtn3 = document.getElementById("home-btn-3");
const guestNumScr = document.getElementById("guest-num-screen");
const guestNum = document.getElementById("guest-num");
const guestBtn1 = document.getElementById("guest-btn-1");
const guestBtn2 = document.getElementById("guest-btn-2");
const guestBtn3 = document.getElementById("guest-btn-3");
const newGame = document.getElementById("new-game-btn");

let homeCount = 0;
let guestCount = 0;

function eventListeners() {
  homeBtn1.addEventListener("click", () => updateScore("home",1));
  homeBtn2.addEventListener("click", () => updateScore("home",2));
  homeBtn3.addEventListener("click", () => updateScore("home",3 ));

  guestBtn1.addEventListener("click", () => updateScore("guest",1));
  guestBtn2.addEventListener("click", () => updateScore("guest",2 ));
  guestBtn3.addEventListener("click", () => updateScore("guest",3 ));

  newGame.addEventListener("click", newGameStart);
}
eventListeners();

function updateScore(team, amount) {
  if(team === "home"){
    homeCount += amount;
    homeNum.textContent = homeCount;
  }
  else if(team === "guest") {
    guestCount += amount;
    guestNum.textContent = guestCount;
  }
  showHighest()
}

function newGameStart() {
  homeCount = 0;
  guestCount = 0;
  homeNum.textContent = 0;
  guestNum.textContent = 0;
  showHighest();
}

function showHighest() {

  let homeScore = parseInt(homeNum.textContent);
  let guestScore = parseInt(guestNum.textContent);

  homeNumScr.classList.toggle("box-light", homeScore > guestScore);
  guestNumScr.classList.toggle("box-light", homeScore < guestScore);
}
