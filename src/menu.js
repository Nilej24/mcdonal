import cheeseImg from "../res/cheeseburger.jpeg";
import abomImg from "../res/abomination.jpg";
import whatImg from "../res/what.png";
import saltImg from "../res/salt.jpg";
import wafflesImg from "../res/waffles.jpg";

// to make things a bit quicker
function menuItem(name, img, desc, price) {
  const nameEl = document.createElement("h3");
  nameEl.textContent = name;

  const imgEl = document.createElement("img");
  imgEl.src = img;

  const descEl = document.createElement("p");
  descEl.textContent = desc;

  const priceEl = document.createElement("p");
  priceEl.textContent = "£" + price;

  const element = document.createElement("div");
  element.append(nameEl, imgEl, descEl, priceEl);
  element.classList.add("menu-item");
  return element;
}

function menu() {
  // title
  const title = (function () {
    const element = document.createElement("h1");
    element.textContent = "Menu";
    return element;
  })();

  // burgers
  const burgers = (function () {
    const title = document.createElement("h2");
    title.textContent = "Burgers";

    const cheeseDesc = "Yes, we buy cheeseburgers from McDonalds and resell them for the exact same price!!!";
    const cheeseburger = menuItem("Cheeseburger", cheeseImg, cheeseDesc, "0.99");

    const abomDesc = "A delicious burger, probably. Too many ingredients to list. Truly an abomination...";
    const abomination = menuItem("Abomination", abomImg, abomDesc, "3.50");

    const whatDesc = "Cow meat, horse meat, bat meat, dog meat, etc. Just kidding, obviously there's no horse meat!";
    const what = menuItem("Fucking What", whatImg, whatDesc, "4.50");

    const element = document.createElement("section");
    element.append(title, cheeseburger, abomination, what);
    return element;
  })();

  // fries
  const fries = (function () {
    const title = document.createElement("h2");
    title.textContent = "Fries";

    const saltDesc = "Would you like some fries with your salt? HAHAHAHHAHAHAHA I'm so funny...";
    const salt = menuItem("Salt + Fries", saltImg, saltDesc, "1.50");

    const wafflesDesc = "They look like waffles, but don't be fooled... They are actually fries, believe it or not!!!";
    const waffles = menuItem("Suspicious Waffles", wafflesImg, wafflesDesc, "2.00");

    const element = document.createElement("section");
    element.append(title, salt, waffles);
    return element;
  })();

  const content = document.querySelector("#content");
  content.innerHTML = "";
  content.append(title, burgers, fries);
}

console.log("menu module loaded");
export default menu;
