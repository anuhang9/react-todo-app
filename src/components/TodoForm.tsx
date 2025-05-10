import { useContext, useState } from "react";
import { TodoItem } from "./TodoItem";
import { TodoContext } from "../context/TodoContext";

export const TodoForm: React.FC = () => {
  const [inputValue, setInputValue] = useState('')
  const {addTodo} = useContext(TodoContext)

  const handleChange =(evt: React.ChangeEvent<HTMLInputElement>)=>{
    setInputValue(evt.target.value)
  }

  const handleSubmit =(evt: React.FormEvent<HTMLFormElement>)=>{
    evt.preventDefault()
    if(!inputValue)return;
    addTodo({id: Date.now(), todo:inputValue, checked: false})
    setInputValue('')
    console.log(inputValue)
  }
  return (
    <>
      <form className="m-5" onSubmit={handleSubmit}>
        <input
          className="border border-gray-700 p-1 rounded-md m-2 w-60"
          type="text"
          placeholder="Add your todo here . . ."
          value={inputValue}
          onChange={handleChange}
        />
        <button className="bg-gray-800 hover:bg-gray-700 rounded-md font-bold text-white p-1 pl-3 pr-3 m-2 cursor-pointer">
          Add Todo
        </button>
      </form>
      <TodoItem />
    </>
  );
};
