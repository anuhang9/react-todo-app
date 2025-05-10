import { TodoForm } from "../components/TodoForm"

export const Home: React.FC =()=>{
    return(
        <div className="flex items-center flex-col p-10">
            <TodoForm/>
        </div>
    )
}