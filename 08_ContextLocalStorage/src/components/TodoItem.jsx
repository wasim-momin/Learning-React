import { useEffect, useRef, useState } from "react";
import { useTodo } from "../context";

function TodoItem({ todo }) {
    
    const {updateTodo, deleteTodo, completeTodo} = useTodo()

    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg]=useState(todo.message)

    const inputRef = useRef(null)

    const handleEdit=()=>{
        if(isTodoEditable){
            updateTodo(todo.id, {...todo, message: todoMsg})
            setIsTodoEditable(false)
        }
        else{
            setIsTodoEditable((prev)=>!prev)
        }
    }
    useEffect(()=>{
        if(isTodoEditable && inputRef.current){
            inputRef.current.focus()
        }
    },[isTodoEditable])
    
    const handleTodoComplete = ()=>{
        completeTodo(todo.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${todo.completed ? 'bg-[#c6e9a7]': 'bg-[#ccbed7]'}`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                id={todo.id}
                name={todo.todo}
                checked={todo.completed}
                onChange={handleTodoComplete}
            />
            <input
                type="text"
                className={`${isTodoEditable ? "bg-white" : "bg-transparent"} px-2 w-full rounded-lg ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e)=>setTodoMsg(e.target.value)}
                id={todo.id}
                name={todo.todo}
                readOnly={!isTodoEditable}
                disabled={!isTodoEditable}
                ref={inputRef}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={handleEdit}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
                
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
