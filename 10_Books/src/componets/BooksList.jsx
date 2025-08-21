import React from "react";
import { useBookContext } from "../context/BookContext";

export default function BookList({ book }) {

const {deleteBook} = useBookContext()

  return (
    <div className="bg-[#e3f2fd] p-4 rounded-lg transition-all">
      <img
        src={`${book.coverImage}`}
        alt={book.coverImage}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <div className="flex justify-between">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">Book Title: {book.title}</h2>
      <p className="text-gray-700">Author Name: {book.name}</p>
      </div>
      <button
              className="cursor-pointer inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteBook(book.id)}
          >
              ❌
          </button>
          </div>
    </div>
  );
}
