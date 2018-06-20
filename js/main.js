'use strict';

const RIGHT_ARROW = 39;
const LEFT_ARROW = 37;

const app = document.querySelector(`.app`);
const main = app.querySelector(`.main`);
const templates = document.querySelector(`#templates`).content.cloneNode(true);
const screens = templates.querySelectorAll(`section.main`);
const screensArr = Array.from(screens);
const navigationBtn = `<div class="arrows__wrap">
<style>
  .arrows__wrap {
    position: absolute;
    top: 135px;
    left: 50%;
    margin-left: -56px;
  }
  .arrows__btn {
    background: none;
    border: 2px solid black;
    padding: 5px 20px;
  }
</style>
<button class="arrows__btn"><-</button>
<button class="arrows__btn">-></button>
</div>`;

app.insertAdjacentHTML(`beforeEnd`, navigationBtn);
const arrowButtons = Array.from(app.querySelectorAll(`.arrows__btn`));
const arrowPrev = arrowButtons[0];
const arrowNext = arrowButtons[1];


const showScreen = (number) => {
  main.innerHTML = ``;
  main.appendChild(number);
};

let currentScreen = 0;
const switchScreen = (number) => {
  if (number < screensArr.length && number >= 0) {
    number = number;
  }
  else if (number < 0) {
    number = screensArr.length - 1;
  }
  else if (number >= screensArr.length) {
    number = 0;
  }
  currentScreen = number;
  showScreen(screensArr[currentScreen]);
};

switchScreen(currentScreen);

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case RIGHT_ARROW:
      switchScreen(currentScreen + 1);
      break;
    case LEFT_ARROW:
      switchScreen(currentScreen - 1);
      break;
  }
});

arrowPrev.addEventListener(`click`, () => {
  switchScreen(currentScreen - 1);
});

arrowNext.addEventListener(`click`, () => {
  switchScreen(currentScreen + 1);
});
