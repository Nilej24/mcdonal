function home() {
  const content = document.querySelector("#content");

  // description
  const desc = document.createElement("div");
  (function () {
    const title = document.createElement("h2");
    title.textContent = "Description";

    const text = document.createElement("p");
    text.textContent = "We won't charge you 3 great british pounds for just a can of coke, I can promise you that lol. We do burgers and fries, and maybe some other stuff if we feel like it.";

    desc.append(title, text);
  })();

  // hours
  const hours = document.createElement("div");
  (function () {
    const title = document.createElement("h2");
    title.textContent = "Hours";

    const list = document.createElement("ul");
    const sun = document.createElement("li");
    sun.textContent = "Sunday: 8am - 8pm"
    const mon = document.createElement("li");
    mon.textContent = "Monday: 6am - 6pm"
    const tue = document.createElement("li");
    tue.textContent = "Tuesday: 6am - 6pm"
    const wed = document.createElement("li");
    wed.textContent = "Wednesday: 6am - 6pm"
    const thu = document.createElement("li");
    thu.textContent = "Thursday: 6am - 10pm"
    const fri = document.createElement("li");
    fri.textContent = "Friday: 6am - 10pm"
    const sat = document.createElement("li");
    sat.textContent = "Saturday: 8am - 10pm"
    list.append(sun, mon, tue, wed, thu, fri, sat);

    hours.append(title, list);
  })();

  // location
  const location = document.createElement("div");
  (function () {
    const title = document.createElement("h2");
    title.textContent = "Location";

    const text = document.createElement("p");
    text.textContent = "543 Burger Lane, Tomato Town, Ohio";

    location.append(title, text);
  })();

  content.append(desc, hours, location);
}

console.log("home module loaded");
export default home;
