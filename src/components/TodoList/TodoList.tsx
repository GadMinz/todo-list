import React from "react";
import TodoPanel from "../TodoPanel/TodoPanel";
import TodoItem from "./TodoItem/TodoItem";

interface TodoListProps {
  todos: Todo[];
  todoIdForEdit: number | null;
  checkTodo: (id: Todo["id"]) => void;
  deleteTodo: (id: Todo["id"]) => void;
  selectTodoIdForEdit: (id: Todo["id"]) => void;
  changeTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  todoIdForEdit,
  checkTodo,
  deleteTodo,
  selectTodoIdForEdit,
  changeTodo,
}) => {
  return (
    <div>
      {todos.map((todo: Todo) => {
        if (todo.id === todoIdForEdit) {
          // @ts-ignore
          return (
            <TodoPanel
              key={todo.id}
              mode="edit"
              changeTodo={changeTodo}
              editTodo={todo}
            />
          );
        }
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            checkTodo={checkTodo}
            selectTodoIdForEdit={selectTodoIdForEdit}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
