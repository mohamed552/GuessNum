"use strict";
//All variables*****************/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const result = function (message) {
  document.querySelector(".message").textContent = message;
};
const autoNumber = function (number) {
  document.querySelector(".number").textContent = number;
};
//check Button**********/
document.querySelector(".check").addEventListener("click", function () {
  const userInput = Number(document.querySelector(".guess").value);
  //if input is totally different*************/
  if (!userInput) {
    result("Enter a number between 1 ➡ 20 ");
    document.querySelector("body").style.backgroundColor = "red";
    // When player win*****************/
  } else if (userInput === secretNumber) {
    result("🎊Correct Number!");
    autoNumber(secretNumber);
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // When guess is wrong*****************/
  } else if (userInput !== secretNumber) {
    if (score > 1) {
      result(userInput > secretNumber ? "Too high📈" : "Too low📉");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      result("💥You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});
//Again button*****************/
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  result("Start guessing...");
  document.querySelector(".score").textContent = score;
  autoNumber("?");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
