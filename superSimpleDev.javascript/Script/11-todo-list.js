let todoList = [{
  name:"ali",
  dueDate: "2026-12-2"
},
{
  name: "ahmad",
  dueDate: "2026-12-13"
}

];

// render means to display the data on the screen. In this case, we are displaying the todoList array on the screen. We are using innerHTML to display the data on the screen. We are using a for loop to iterate through the todoList array and create a string of HTML elements. We are then using innerHTML to display the string of HTML elements on the screen.
function renderTodoList() {
let todoListHTML = '';

for(let i = 0; i < todoList.length; i++){
  const  todoObject= todoList[i];
 // const name = todoObject.name;
 // const dueDate = todoObject.dueDate
// We have a short method that is destructuring
  const {name }= todoObject;
  const {dueDate} = todoObject;

  const html = `
 <div> ${name} </div>
 <div> ${dueDate} </div>
  <button class="delete-todo-btn" onclick="todoList.splice(${i}, 1); renderTodoList(); ">Delete</button>
   `;
  todoListHTML += html;
}

document.querySelector(".todoListContainer").innerHTML = todoListHTML;
}
renderTodoList();
// Additional, arrow function can be used when there is no need to use "this" keyword inside the function.It can be used when we want to write a function in a short way. It is also used when we want to pass a function as an argument to another function.
// and arrow function is always anonymous, so it cannot be called by name as comapre to normal function, which is called by name.


let addItem = () => {
  let input = document.getElementById("todoInput");
  
  
  let dateInputElement = document.querySelector(".js-due-date-input");
  let dueDate = dateInputElement.value;
  
let name = input.value;
  if (name ==="")
    return;
  
  todoList.push({
   /* 
    name: name,
    dueDate : dueDate
    we have a shorthand property name in ES6, which allows us to write the property name and value in a shorter way. Instead of writing name: name, we can write just name. This is called shorthand property name.
    */
    name,
    dueDate
    });
  renderTodoList();
  input.value = "";
};


document.querySelector(".js-add-todo-btn").addEventListener("click", addItem);










