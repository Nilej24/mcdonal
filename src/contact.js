function createContact(name, role, num, email) {
  const nameEl = document.createElement("h2");
  nameEl.textContent = name;

  const roleEl = document.createElement("p");
  roleEl.textContent = role;

  const numEl = document.createElement("p");
  numEl.textContent = num;

  const emailEl = document.createElement("p");
  emailEl.textContent = email;

  const element = document.createElement("section");
  element.append(nameEl, roleEl, numEl, emailEl);
  return element;
}

function contact() {
  // title
  const title = (function () {
    const element = document.createElement("h1");
    element.textContent = "Contact Us";
    return element;
  })();

  // contacts
  const owner = createContact("Nijel Manalo", "Owner", "07758665225", "nmanalo543@gmail.com");
  const chef = createContact("Gordon Ramsay", "Head Chef", "69696969 (funny I know)", "gordon@ramsay.com");
  const waiter = createContact("Dio Brando", "Waiter", "420420420 (once again, quite funny isn't it?)", "iCanStopTime@theworld.com (he's a waiter, get it???)");

  const content = document.querySelector("#content");
  content.innerHTML = "";
  content.append(title, owner, chef, waiter);
}

console.log("contact module loaded");
export default contact;
