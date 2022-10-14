import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { useState } from "react";

function Todo(darkMode, setDarkMode) {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="container">
      <TodoForm
        setDarkMode={setDarkMode}
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <TodoList setTodoList={setTodoList} todoList={todoList} />
    </div>
  );
}

export default Todo;
