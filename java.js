const button = document.querySelector(".button");
const mobile = document.querySelector(".mobile");
const mobile2 = document.querySelector(".mobile2");

function showMenu() {
  mobile2.classList.toggle("mobile");
}

button.addEventListener("click", showMenu);
