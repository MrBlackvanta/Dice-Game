"use strict";

const player = document.querySelector(".player");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const btnroll = document.querySelector(".btn--roll");
const dice = document.querySelector(".dice");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");
const currentScore = document.querySelectorAll(".current-score");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");

let randomDice = Math.floor(Math.random() * 6) + 1;

let point0 = 0;
let point1 = 0;
let title0 = 0;
let title1 = 0;

btnroll.addEventListener("click", function () {
  if (Number(score0.textContent) < 100 && Number(score1.textContent) < 100) {
    randomDice = Math.floor(Math.random() * 6) + 1;
    dice.classList.remove("hidden");
    dice.setAttribute("src", `img/dice-${randomDice}.png`);
    if (randomDice === 1) {
      player0.classList.toggle("player--active");
      player1.classList.toggle("player--active");
      for (let i = 0; i < currentScore.length; i++) {
        currentScore[i].textContent = 0;
      }
    } else {
      if (player0.classList.contains("player--active")) {
        point0 += randomDice;
        current0.textContent = point0;
      } else if (player1.classList.contains("player--active")) {
        point1 += randomDice;
        current1.textContent = point1;
      }
    }
  }
});

btnHold.addEventListener("click", function () {
  if (Number(score0.textContent) < 100 && Number(score1.textContent) < 100) {
    if (player0.classList.contains("player--active")) {
      title0 += point0;
      score0.textContent = title0;
      point0 = 0;
    } else if (player1.classList.contains("player--active")) {
      title1 += point1;
      score1.textContent = title1;
      point1 = 0;
    }
    for (let i = 0; i < currentScore.length; i++) {
      currentScore[i].textContent = 0;
    }
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
    if (Number(score0.textContent) >= 100) {
      player0.classList.add("player--winner");
      dice.classList.add("hidden");
      player1.classList.toggle("player--active");
      point0 += randomDice;
      current0.textContent = point0;
    } else if (Number(score1.textContent) >= 100) {
      player1.classList.add("player--winner");
      dice.classList.add("hidden");
      player0.classList.toggle("player--active");
      point1 += randomDice;
      current1.textContent = point1;
    }
  }
});

btnNew.addEventListener("click", function () {
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  dice.classList.add("hidden");
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  point0 = 0;
  point1 = 0;
  title0 = 0;
  title1 = 0;
});
