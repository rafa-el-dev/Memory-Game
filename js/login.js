const input = document.querySelector(".login-input");
const button = document.querySelector(".login-button");
const form = document.querySelector(".login-form");

// Function to validate the input and enable the button
const validateInput = ({target}) => {
  const value = target.value;
  if(value.length > 2) {
    button.removeAttribute("disabled");
    return;
  }

  button.setAttribute("disabled", "");
}

// Function to handle the form submit, store the username in local storage and redirect
const handleSubmit = (event) => {
  event.preventDefault();
  localStorage.setItem("player", input.value);
  window.location = "../index.html";
}

input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);