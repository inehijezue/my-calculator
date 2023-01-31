const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
let displayValue = "0";
let pendingValue;
let evalStringArray = [];

for (const button of buttons) {
  button.addEventListener("click", function(e) {
    const value = e.target.innerText;
    if (value === "C") {
      displayValue = "0";
      pendingValue = undefined;
      evalStringArray = [];
    } else if (value === "&larr;") {
      displayValue = displayValue.substring(0, displayValue.length - 1);
      if (displayValue === "") {
        displayValue = "0";
      }
    } else if (value === "=") {
      evalStringArray.push(displayValue);
      let evaluation = eval(evalStringArray.join(" "));
      displayValue = evaluation + "";
      evalString
