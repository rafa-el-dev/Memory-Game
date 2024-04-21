const input = document.querySelector(".login-input");
const button = document.querySelector(".login-button");

const validateInput = ({target}) => {
  const value = target.value;
  if(value.length > 2) {
    button.removeAttribute("disabled");
    return;
  }

  button.setAttribute("disabled", "");
}

input.addEventListener("input", validateInput); 