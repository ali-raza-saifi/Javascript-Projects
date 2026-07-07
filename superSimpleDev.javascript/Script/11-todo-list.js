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
let renderList = () => {
  list.innerHTML = "";
  arr.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
};


btn.addEventListener("click", addItem);