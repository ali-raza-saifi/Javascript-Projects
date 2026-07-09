let todoList = [];

// render means to display the data on the screen. In this case, we are displaying the todoList array on the screen. We are using innerHTML to display the data on the screen. We are using a for loop to iterate through the todoList array and create a string of HTML elements. We are then using innerHTML to display the string of HTML elements on the screen.
function renderTodoList() {
let todoListHTML = '';

for(let i = 0; i < todoList.length; i++){
  const  todo= todoList[i];
  const html = `<p>${todo}</p>`;
  todoListHTML += html;
}

document.querySelector(".todoListContainer").innerHTML = todoListHTML;
}

// Additional, arrow function can be used when there is no need to use "this" keyword inside the function.It can be used when we want to write a function in a short way. It is also used when we want to pass a function as an argument to another function.
// and arrow function is always anonymous, so it cannot be called by name as comapre to normal function, which is called by name.


let addItem = () => {
  let input = document.getElementById("todoInput");
  
  
  let btn = document.querySelector(".todo_btn");
  
let inputValue = input.value;
  if (inputValue ==="")
    return;
  
  todoList.push(inputValue);
  console.log(todoList);
  renderTodoList();
  input.value = "";
};


document.querySelector(".todo_btn").addEventListener("click", addItem);










