import { createContext, useContext } from "react";

export const BookContext = createContext({
    bookList:[{}],
    addBook: (title, name, coverImage)=>{},
    deleteBook : (id)=>{}
})

export const BookContextProvider = BookContext.Provider

export const useBookContext = ()=>{
    return useContext(BookContext)
}