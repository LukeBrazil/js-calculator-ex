"use-strict";

let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let numberArr = [];
let inputArr = [];
let display_current = document.querySelector(".current-number");
let display_previous = document.querySelector(".previous-number");
let display_array = [];

numbers.forEach(function (number) {
  number.addEventListener("click", function (event) {
    event.preventDefault();
    numberArr.push(number.value);
    console.log(numberArr);
    display_current.innerHTML += number.value;
  });
});

operators.forEach(function (operator) {
  operator.addEventListener("click", function (event) {
    event.preventDefault();
    const last_input = display_current.innerHTML.substr(-1);
    if (operator.innerHTML === "AC") {
      display_current.innerHTML = "";
    } else if (operator.innerHTML === "DEL") {
      if (numberArr.includes(last_input, -1)) {
        numberArr.pop();
        display_current.innerHTML = display_current.innerHTML.slice(0, -1);
        console.log("poop stick");
      } 
      if(inputArr.includes(last_input)) {
        inputArr.pop();
        display_current.innerHTML = display_current.innerHTML.slice(0, -1);
        console.log("poop stick");
      }
    } else {
      inputArr.push(operator.innerHTML);
      display_current.innerHTML += operator.innerHTML;

    } 
    console.log(inputArr);
  });
});
