"use-strict";

let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let input = document.querySelector("#input");
let numberArr = [];
let inputArr = [];
let display_current = document.querySelector(".current-number");
let display_previous = document.querySelector(".previous-number");
let display_array = [];
let result = document.getElementById("result");
let clear = document.getElementById("clear");
let delete_last = document.getElementById("delete");

const numberOperatorsArray = [];
const last_input = input.innerHTML.substr(-1);

numbers.forEach(function (number) {
  number.addEventListener("click", function () {
    input.innerHTML += this.value;
    numberOperatorsArray.push(this.value);
  });
});

operators.forEach(function (operator) {
  operator.addEventListener("click", function () {
    input.innerHTML += this.innerHTML;
    numberOperatorsArray.push(this.innerHTML);
  });
});

result.addEventListener("click", function () {
  console.log("Number operators array is: ", numberOperatorsArray);
  let numberStringHolder = "";
  let resultArray = [];
  for (let char of numberOperatorsArray) {
    console.log("char is", char)
    const numReg = /\d/;
    if (numReg.test(char) || char === ".") {
      numberStringHolder += char;
    } else {
      resultArray = [...resultArray, Number(numberStringHolder), char]
      numberStringHolder = '';
    }
    
  }
  resultArray = [...resultArray, Number(numberStringHolder)];

  let multiply = resultArray.indexOf('*');
  while (multiply !== -1) {
    resultArray.splice(multiply-1, 3, resultArray[multiply-1] * resultArray[multiply + 1])
    multiply = resultArray.indexOf('*')
  }
  input.innerHTML = resultArray[0]

  let divide = resultArray.indexOf('/');
  while (divide !== -1) {
    resultArray.splice(divide-1, 3, resultArray[divide-1] / resultArray[divide + 1])
    divide = resultArray.indexOf('/')
  }
  input.innerHTML = resultArray[0]
  
  let add = resultArray.indexOf('+');
  while (add !== -1) {
    resultArray.splice(add-1, 3, resultArray[add-1] + resultArray[add + 1])
    add = resultArray.indexOf('+')
  }
  console.log(resultArray);
  input.innerHTML = resultArray[0]

  let subtract = resultArray.indexOf('-');
  while (subtract !== -1) {
    resultArray.splice(subtract-1, 3, resultArray[subtract-1] - resultArray[subtract + 1])
    subtract = resultArray.indexOf('-')
  }
  input.innerHTML = resultArray[0]
});

clear.addEventListener("click", function () {
  input.innerHTML = "";
  numberOperatorsArray.length = 0;
  console.log(numberOperatorsArray);
});

del.addEventListener("click", function () {
  console.log('meeeehhhhh');
});

// numbers.forEach(function (number) {
//   number.addEventListener("click", function (event) {
//     event.preventDefault();
//     numberArr.push(number.value);
//     console.log(numberArr);
//     display_current.innerHTML += number.value;
//   });
// });

// operators.forEach(function (operator) {
//   operator.addEventListener("click", function (event) {
//     event.preventDefault();
//     const last_input = display_current.innerHTML.substr(-1);
//     if (operator.innerHTML === "AC") {
//       display_current.innerHTML = "";
//     } else if (operator.innerHTML === "DEL") {
//       if (numberArr.includes(last_input, -1)) {
//         numberArr.pop();
//         display_current.innerHTML = display_current.innerHTML.slice(0, -1);
//         console.log("poop stick");
//       }
//       if(inputArr.includes(last_input)) {
//         inputArr.pop();
//         display_current.innerHTML = display_current.innerHTML.slice(0, -1);
//         console.log("fart stick");
//       }
//     } else {
//       inputArr.push(operator.innerHTML);
//       display_current.innerHTML += operator.innerHTML;

//     }
//     console.log(inputArr);
//   });
// });
