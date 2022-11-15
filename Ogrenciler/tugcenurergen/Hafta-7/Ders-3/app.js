const todoSample = ["todo 1", "todo 2", "todo 3"];

localStorage.setItem("todos", JSON.stringify(todoSample));

const sampleTodos =JSON.parse(localStorage.getItem("todos"));
console.log(sampleTodos);