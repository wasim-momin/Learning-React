import React, { useState } from "react";
import { useBookContext } from "../context/BookContext";

export default function BookForm() {

  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [coverImage, setCoverImage] = useState('')

  const {addBook} = useBookContext()

  const handleSubmit = (e)=>{
    e.preventDefault()    
    addBook(title, name, coverImage)
    setName('')
    setTitle('')
    setCoverImage('')
    console.log(`Book title ${title} Book name ${name} Book cover ${coverImage}`);
    
  }

  return (
    <div className="max-w-md mx-auto bg-[#e3f2fd] p-6 rounded-xl shadow-lg mb-8">
      <input
        type="text"
        placeholder="Enter book title"
        className="w-full p-2 mb-4 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter author name"
        className="w-full p-2 mb-4 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Cover Image Url"
        className="w-full p-2 mb-4 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={coverImage}
        onChange={(e)=>setCoverImage(e.target.value)}
      />
      <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full transition-colors">
        Add Book
      </button>
    </div>
  );
}
