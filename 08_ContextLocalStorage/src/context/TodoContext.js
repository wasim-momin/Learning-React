import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todo:[{
        id:1,
        message:'todo message',
        completed: false,
    }],
    addTodo: (todo)=>{},
    updateTodo:(id, todo)=>{},
    deleteTodo:(id)=>{},
    completeTodo:(id)=>{}
})

export const TodoContextProvider = TodoContext.Provider

export const useTodo = ()=>{
    return useContext(TodoContext)
}