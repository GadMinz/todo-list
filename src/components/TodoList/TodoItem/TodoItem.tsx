import React from "react";
import s from "./TodoItem.module.scss";
import Button from "../../Button/Button";

interface TodoItemProps {
  todo: Todo;
  checkTodo: (id: Todo["id"]) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, checkTodo }) => {
  const onClick = () => {
    window.confirm(`Close ${todo.name}`) && checkTodo(todo.id);
  };
  return (
    <div>
      <div>
        <div
          aria-hidden
          className={s.todo_item_title}
          style={{
            opacity: todo.checked ? 0.5 : 1,
            textDecoration: todo.checked ? "line-through" : "none",
          }}
          onClick={onClick}
        >
          {todo.name}
        </div>
        <div aria-hidden className={s.todo_item_description}>
          {todo.description}
        </div>
      </div>
      <div className={s.todo_item_button_container}>
        <Button color="orange">EDIT</Button>
        <Button color="red">DELETE</Button>
      </div>
    </div>
  );
};

export default TodoItem;
