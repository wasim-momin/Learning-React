import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello world wwww",
    },
  ],
};

export const todoSlide = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((prevTodo) =>
        prevTodo.id === action.payload.id
          ? { ...prevTodo, text: action.payload.text }
          : prevTodo
      );
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlide.actions;

export default todoSlide.reducer;
