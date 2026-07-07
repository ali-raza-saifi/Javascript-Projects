let input = document.getElementById("todoInput");


let btn = document.querySelector(".todo_btn");

let arr = [];
let addItem = () => {
let inputValue = input.value;
  if (inputValue ==="")
    return;
  arr.push(inputValue);
  
  input.value = "";
};


let list = document.querySelector(".js-list");



