import { useState } from "react";
import { InputSection, NotesList } from "./components";
import { NoteContextProvider } from "./conexte";
import { useEffect } from "react";

function App() {

  const [noteList, setNoteList] = useState([])

  const addNote = (noteList)=>{
    setNoteList((prev)=>[{...noteList}, ...prev])
  }

  const updateNote = (id, noteList) =>{
    setNoteList((prev)=>prev.map((note)=>(note.id === id ? noteList: note)))
  }

  const deleteNote = (id)=>{
    setNoteList((prev)=>prev.filter((note)=>note.id !== id))
  }

  useEffect(()=>{
    const NoteListData = JSON.parse(localStorage.getItem("noteList"))
    setNoteList(NoteListData)
  },[])

  useEffect(()=>{
    localStorage.setItem("noteList", JSON.stringify(noteList))
  },[noteList])

  return (
    <NoteContextProvider value={{noteList, addNote, updateNote, deleteNote}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Notes
          </h1>
          <div className="mb-4">
            <InputSection />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {
              noteList.map((note)=>(
                <div key={note.id} id={note.id}>
                    <NotesList noteList = {note}/>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </NoteContextProvider>
  );
}

export default App;
