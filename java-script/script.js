addEventListener("DOMContentLoaded", (ev) => {
  let button = document.querySelector(".header-sign-up-button");
  console.log(button);
  button.addEventListener("click", (e) => {
    let body = document.querySelector("body");
    body.classList.toggle("dark-mode");
  });

  button = document.querySelector(".header-login-button");
  console.log(button);
  button.addEventListener("click", (e) => {
    alert("To enable or disable Dark Mode, please click on the Sign Up button");
  });

  button = document.querySelector(".hero-button-register");
  console.log(button);
  button.addEventListener("click", (e) => {
    alert("An error occured, please retry later...");
  });

  button = document.querySelector(".unlock-button-learn-more");
  console.log(button);
  button.addEventListener("click", (e) => {
    alert("An error occured, please retry later...");
  });

  button = document.querySelector(".calender-button-learn-more");
  console.log(button);
  button.addEventListener("click", (e) => {
    alert("An error occured, please retry later...");
  });

  button = document.querySelector(".footer-demo-button");
  console.log(button);
  button.addEventListener("click", (e) => {
    alert("Not enough coffee to get Demo...");
  });
});
