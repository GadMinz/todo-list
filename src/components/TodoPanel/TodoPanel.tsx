import React from "react";
import s from "./TodoPanel.module.scss";
import Button from "../Button/Button";

interface AddTodoPanelProps {
  mode: "add";
  addTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void;
}

interface EditTodoPanelProps {
  mode: "edit";
  editTodo: Omit<Todo, "id" | "checked">;
  changeTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void;
}

type TodoPanelProps = AddTodoPanelProps | EditTodoPanelProps;

const DEFAULT_TODO = {
  name: "",
  description: "",
};

const TodoPanel: React.FC<TodoPanelProps> = (props) => {
  const isEdit = props.mode === "edit";
  const [todo, setTodo] = React.useState(
    isEdit ? props.editTodo : DEFAULT_TODO
  );

  const onClick = () => {
    if (todo.description === "" || todo.description === "") {
      alert("Empty name or description");
      return;
    }
    if (isEdit) {
      return props.changeTodo(todo);
    }
    props.addTodo(todo);
    setTodo(DEFAULT_TODO);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  return (
    <div className={s.todo_panel_container}>
      <div className={s.fields_container}>
        <div className={s.field_container}>
          <label htmlFor="name">
            <div>name</div>
            <input
              autoComplete="off"
              id="name"
              value={todo.name}
              onChange={onChange}
              name="name"
            />
          </label>
        </div>
        <div className={s.field_container}>
          <label htmlFor="description">
            <div>description</div>
            <input
              autoComplete="off"
              id="description"
              value={todo.description}
              onChange={onChange}
              name="description"
            />
          </label>
        </div>
      </div>
      <div className={s.button_container}>
        {!isEdit && (
          <Button color="blue" onClick={onClick}>
            ADD
          </Button>
        )}
        {isEdit && (
          <Button color="orange" onClick={onClick}>
            EDIT
          </Button>
        )}
      </div>
    </div>
  );
};

export default TodoPanel;
