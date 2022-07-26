import React from "react";
import s from "./App.module.scss";
import Header from "./components/Header/Header";
import TodoPanel from "./components/TodoPanel/TodoPanel";

const DEFAULT_TODO_LIST = [
  { id: 1, name: "task 1", description: "description 1", checked: false },
  { id: 2, name: "task 2", description: "description 2", checked: false },
  { id: 3, name: "task 3", description: "description 3", checked: true },
];
const App = () => {
  const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);

  const addTodo = ({ name, description }: Omit<Todo, "checked" | "id">) => {
    setTodos([
      ...todos,
      { id: todos[todos.length - 1].id + 1, description, name, checked: false },
    ]);
  };

  return (
    <div className={s.app_container}>
      <div className={s.container}>
        <Header todoCount={todos.length} />
        <TodoPanel addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
