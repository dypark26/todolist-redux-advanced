// initial State
// Action Value
// Action Creator
// Reducer
// export
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const __addTodo = createAsyncThunk("addTodo", (payload, thunkAPI) => {
  setTimeout(() => {
    thunkAPI.dispatch(addTodo(payload));
  }, 3000);
});

const initialState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodoList = {
        title: action.payload.title,
        contents: action.payload.contents,
        isDone: false,
        id: uuidv4(),
      };
      state.todos = [...todos, newTodoList];
    },
    deleteTodo: (state, action) => {
      state.todos = todos.filter((todo) => todo.id !== action.payload);
    },
    switchButton: (state, action) => {
      state.todos = todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isDone: !action.payload.isDone };
        } else {
          return todo;
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, switchButton } = todosSlice.actions;

export default todosSlice.reducer;
