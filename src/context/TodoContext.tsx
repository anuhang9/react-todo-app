import { createContext } from "react";

export interface TodoStructure {
  todo: string;
  id: number;
  checked: boolean;
}
export interface TodoContextStructure{
  todos: TodoStructure[];
  addTodo: (todo: TodoStructure) => void;
  updateTodo: (id: number, todo: TodoStructure) => void;
  deleteTodo: (id: number) => void;
  completeTodo: (id: number) => void;
}

export const TodoContext = createContext<TodoContextStructure>({
  todos: [
    {
      todo: "this is todo",
      id: Date.now(),
      checked: false,
    },
  ],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  completeTodo: () => {},
});
