import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import todosReducer from "./todos/todosSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todosReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
