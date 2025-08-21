import { useEffect, useState } from "react";
import { BookForm, BookList } from "./componets";
import { BookContextProvider } from "./context/BookContext";

function App() {
  const [bookList, setBookList] = useState([]);

  const addBook = (title, name, coverImage) => {
    const newBook = {
      id: Date.now(),
      title,
      name,
      coverImage,
    };
    setBookList((prev) => [...prev, newBook]);
  };

  const deleteBook = (id) => {
    setBookList((prevBookList) =>
      prevBookList.filter((prevBook) => prevBook.id !== id)
    );
  };

  useEffect(()=>{
    const bookList = JSON.parse(localStorage.getItem("bookList"))
    if(bookList && bookList.length>0){
      setBookList(bookList)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("bookList", JSON.stringify(bookList))
  },[bookList])

  return (
    <BookContextProvider value={{ bookList, addBook, deleteBook }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full  mx-auto rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Notes
          </h1>
          <div className="mb-4">
            <BookForm />
          </div>
          <div className="">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
              {bookList.map((book) => (
                <div key={book.id}>
                  <BookList book={book} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BookContextProvider>
  );
}

export default App;
