import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoStructure } from "../context/TodoContext";

export const TodoItem: React.FC = () => {
  const [inputEdit, setInputEdit] = useState('');
  const [currentEditing, setCurrentEditing] = useState<number | null>(null);

  const { todos, updateTodo, completeTodo, deleteTodo } = useContext(TodoContext);

  const handleEditData =(id:number, todo: TodoStructure)=>{
    updateTodo(id, {...todo, todo: inputEdit})
    setCurrentEditing(null)
  }

  const handleToggle =(id:number)=>{
    completeTodo(id)
  }

  const handleDelete =(id: number)=>{
    deleteTodo(id)
  }
  const handleChangeEdit =(evt: React.ChangeEvent<HTMLInputElement>)=>{
    setInputEdit(evt.target.value)
  }


  const enableEditMode = (id: number, todo:string)=>{
    setCurrentEditing(id)
    setInputEdit(todo)

  }
  return (
    <>
      {todos.map((currentTodo) => {
        return (
          <div className={`border border-gray-700 p-3 ${currentTodo.checked ? 'bg-green-100 border border-green-700 ' : "bg-gray-100"} rounded-md m-2`} key={currentTodo.id}>
            <input className="cursor-pointer h-5 w-5 m-2" type="checkbox" onClick={()=>handleToggle(currentTodo.id)} checked={currentTodo.checked}/>
            <input
              className={`${currentEditing !== currentTodo.id ? '': 'border border-gray-700 rounded-md'} p-1 m-2 w-96 ${currentTodo.checked ? "line-through": ""}`}
              type="text"
              value={currentEditing === currentTodo.id ? inputEdit : currentTodo.todo}
              onChange={handleChangeEdit}
              disabled={currentEditing !== currentTodo.id}
            />
            {
              currentEditing === currentTodo.id ?( <button className={`cursor-pointer border border-gray-700 m-2 p-1 rounded-md bg-gray-300 hover:bg-gray-200 ${currentTodo.checked ? 'bg-green-900 border border-green-700 hover:bg-green-800' : "bg-gray-100"}`} onClick={()=>handleEditData(currentTodo.id, currentTodo)}>
              🔖
              </button>)
              :
            (<button className={`cursor-pointer border border-gray-700 m-2 p-1 rounded-md bg-gray-300 hover:bg-gray-200 ${currentTodo.checked ? 'bg-green-900 border border-green-700 hover:bg-green-800' : "bg-gray-100"}`} onClick={()=>enableEditMode(currentTodo.id, currentTodo.todo)}>
            ✏️
            </button>)
            }
            <button className={`cursor-pointer border border-gray-700 m-2 p-1 rounded-md bg-gray-300 hover:bg-gray-200 ${currentTodo.checked ? 'bg-green-900 border border-green-700 hover:bg-green-800' : "bg-gray-100"}`} onClick={()=>handleDelete(currentTodo.id)}>
            ❌
            </button>
          </div>
        );
      })}
    </>
  );
};
