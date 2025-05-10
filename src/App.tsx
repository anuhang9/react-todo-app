import { useEffect, useState } from 'react'
import './App.css'
import { TodoContext } from './context/TodoContext'
import { Home } from './page/Home'
import { TodoStructure } from './context/TodoContext'

const App: React.FC =()=> {
  const [todos, setTodos] = useState<TodoStructure[]>([]);

  const addTodo =(todo:TodoStructure)=>{
    setTodos((existTodo)=>[...existTodo, {...todo}])  
  }
  const updateTodo =(id:number, todo:TodoStructure)=>{
    setTodos((existTodo)=> existTodo.map((selectedTodo)=> selectedTodo.id === id ? todo : selectedTodo))
  }

  const deleteTodo =(id: number)=>{
    setTodos((existTodo)=>existTodo.filter((slectedTodo)=>slectedTodo.id !== id))
  }

  const completeTodo =(id:number)=>{
    setTodos((existTodo)=>existTodo.map((selectedTodo)=>selectedTodo.id === id ? {...selectedTodo, checked: !selectedTodo.checked }: selectedTodo))
    console.log(todos)
  }

  useEffect(()=>{
    const localStorageTodo = localStorage.getItem('myTodos');
    if(localStorageTodo){
      let dataChangeInJson = JSON.parse(localStorageTodo)
      if(dataChangeInJson.length>0){
        setTodos(dataChangeInJson)
      }
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("myTodos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoContext.Provider value={{todos, addTodo, updateTodo, deleteTodo, completeTodo}}>
      <Home/>
    </TodoContext.Provider>
  )
}

export default App