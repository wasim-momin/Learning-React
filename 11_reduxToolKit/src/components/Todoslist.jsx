import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  updateTodo,
  completeTodo,
} from "../features/todo/todoSlice";
import { useState } from "react";

function Todoslist() {
  const [editNote, setEditNote] = useState(false);

  const todoList = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  

  const handleUpdate = (id, text) => {
    if (editNote) {
      dispatch(updateTodo({ id, text }));
      setEditNote(false);
    } else {
      setEditNote(true);
    }
  };

const handleDelete = (id) => {
    const a = dispatch(deleteTodo(id)); // id jo hum ne pas kiye wo direct hai (action.payload) reducer refer a
  };

  const handleComplete = (id) => {
    const a = dispatch(completeTodo({id})); // id jo hum ne pas kiye wo {} bases to (action.payload.id) reducer refer b
  };


console.log('data list', todoList);

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todoList.map((todo) => (
          <li className="mt-4 bg-zinc-800 px-4 py-2 rounded" key={todo.id}>
            <div className="flex justify-between items-center">
              <input
                type="checkbox"
                className="cursor-pointer"
                id={todo.id}
                checked={todo.completed}
                onChange={handleComplete.bind(null, todo.id)}
              />
              <div className="ml-1 mr-3" style={{ flex: 1 }}>
                <input
                  type="text"
                  className={`${
                    editNote ? "bg-white text-black" : "bg-transparent"
                  } px-2 w-full rounded-sm ${
                    todo.completed ? "line-through" : ""
                  }`}
                  id={todo.id}
                  name={todo.todo}
                  readOnly={!editNote}
                  disabled={!editNote}
                  value={todo.text}
                  onChange={(e) =>
                    dispatch(updateTodo({ id: todo.id, text: e.target.value }))
                  }
                />
              </div>
              <div className="flex gap-1.5">
                <button
                  onClick={handleUpdate.bind(null, todo.id, todo.text)}
                  className="text-white bg-black border-0 py-1 px-4 focus:outline-none hover:bg-black rounded text-md disabled:opacity-50"
                  disabled={todo.completed}
                >
                  {editNote ? "📁" : "✏️"}
                </button>
                <button
                  onClick={handleDelete.bind(null, todo.id)}
                  className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todoslist;
