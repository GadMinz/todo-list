import React from "react";
import s from "./TodoPanel.module.scss";

interface TodoPanelProps {}

const DEFAULT_TODO = {
  name: "",
  description: "",
};

const TodoPanel: React.FC<TodoPanelProps> = () => {
  const [todo, setTodo] = React.useState(DEFAULT_TODO);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };
  return (
    <div className={s.todo_panel_container}>
      <div className={s.fields_container}>
        <div className={s.field_container}>
          <label htmlFor="name">
            <div>name</div>
            <input
              type="text"
              id="name"
              value={todo.name}
              name="name"
              onChange={onChange}
            />
          </label>
        </div>
        <div className={s.field_container}>
          <label htmlFor="description">
            <div>description</div>
            <input
              type="text"
              id="description"
              value={todo.description}
              name="description"
              onChange={onChange}
            />
          </label>
        </div>
      </div>
      <div className={s.button_container}>
        <button>ADD</button>
      </div>
    </div>
  );
};

export default TodoPanel;
