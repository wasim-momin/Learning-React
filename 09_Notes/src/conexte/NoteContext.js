import { createContext, useContext } from "react";

export const NoteContext = createContext({
  noteList: [
    {
      id: 1,
      notetext: "notes",
    },
  ],
  addNote:(noteText)=>{},
  updateNote:(id, noteText)=>{},
  deleteNote:(id)=>{}
});

export const NoteContextProvider = NoteContext.Provider;

export const useNote = () => {
  return useContext(NoteContext);
};
