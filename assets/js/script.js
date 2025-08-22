/* jshint esversion: 6 */
const form = document.getElementById("username-form");
const username = document.getElementById("username");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  console.log(username.value);
  console.log(window);
  localStorage.setItem("username", username.value);
  window.location.href = "quiz-page.html";
});
