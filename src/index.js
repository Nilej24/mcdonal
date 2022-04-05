import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const contactBtn = document.querySelector(".contact");

homeBtn.onclick = home;
menuBtn.onclick = menu;
contactBtn.onclick = contact;

contact();
