import "./style.scss";

import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const contactBtn = document.querySelector(".contact");

const btns = [homeBtn, menuBtn, contactBtn];

homeBtn.onclick = home;
menuBtn.onclick = menu;
contactBtn.onclick = contact;

// for changing style of selected button
btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    resetBtnSelection();
    btn.classList.add("selected");
  });
});

function resetBtnSelection() {
  btns.forEach(btn => btn.classList.remove("selected"));
}

home();
homeBtn.classList.add("selected");
