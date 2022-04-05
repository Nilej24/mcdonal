function menu() {
  function menuItem(name, desc, price, img) {

    const element = document.createElement("div");
    element.append(nameEl, descEl, priceEl, imgEl);
    return element;
  }
}
