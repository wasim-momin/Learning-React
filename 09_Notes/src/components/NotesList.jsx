import React from "react";
import { useNote } from "../conexte";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export default function NotesList({ noteList }) {
  const [editNote, setEditNote] = useState(false);
  const [noteText, setNoteText] = useState(noteList.noteText);

  const inputRef = useRef(null);

  const { deleteNote, updateNote } = useNote();

  const handleEditNote = () => {
    if (editNote) {
      updateNote(noteList.id, { ...noteList, noteText: noteText });
      setEditNote(false);
    } else {
      setEditNote((prev) => !prev);
    }
  };

  console.log("after update", noteList);

  useEffect(() => {
    if (editNote && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editNote]);

  return (
    <div className="bg-yellow-100 p-4 rounded-lg shadow relative">
      <div className="mt-2">
        {editNote ? (
          <textarea
            value={noteText}
            className={`border-black outline-none w-full bg-white rounded-sm text-gray-800 py-1 px-2 text-xs`}
            onChange={(e)=>setNoteText(e.target.value)}
            rows={6}
          ></textarea>
        ) : (
          <p
            className={`text-gray-800 py-1 px-2 text-xs text-wrap break-all`}
          >
            {noteText}
          </p>
        )}
      </div>
      <div className="absolute top-1 right-2 flex gap-2">
        <button
          className="text-green-600 hover:text-green-800"
          onClick={handleEditNote}
        >
          {" "}
          {editNote ? "📁" : "✏️"}
        </button>
        <button
          className="text-red-600 hover:text-red-800"
          onClick={() => deleteNote(noteList.id)}
        >
          🗑
        </button>
      </div>
    </div>
  );
}
