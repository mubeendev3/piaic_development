import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  displayTodo(id, title, completed);
});

function displayTodo(id: number, title: string, completed: boolean) {
  console.log(`
    The Todo with ID: ${id}
    Has a Title: ${title}
    Is it finished? ${completed}
  `);
}
