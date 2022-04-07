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

// changes buttnon border on click to make it look nicer
btns.forEach(btn => {
  btn.addEventListener("click", (ev) => styleBtnAsSelected(ev.target));
});

function styleBtnAsSelected(btn) {
  btns.forEach(b => {b.style.border = "1px black solid"; b.style.borderLeft = "none";});
  btn.style.borderBottom = "none";
}

home();
styleBtnAsSelected(homeBtn);
