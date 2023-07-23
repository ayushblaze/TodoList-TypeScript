interface Todo {
  todo: string,
  completed: boolean,
};

const todos: Todo[] = [];

const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;

form.addEventListener("submit", function(event: SubmitEvent) {
  event.preventDefault();
  const newTodoText = input.value;
  const newLI = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newLI.append(newTodoText);
  newLI.append(checkbox);
  list.append(newLI);
  input.value = "";
})

// btn.addEventListener("click", function() {
//   alert(input.value);
//   input.value = "";
// });