addEventListener("DOMContentLoaded", (ev) => {
  let button = document.querySelector(".header-sign-up-button");
  console.log(button);
  button.addEventListener("click", (e) => {
    let body = document.querySelector("body");
    body.classList.toggle("dark-mode");
  });
});
