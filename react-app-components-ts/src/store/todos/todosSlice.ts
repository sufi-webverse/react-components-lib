import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    list: ["first item"],
  },
  reducers: {
    add: (state, actions) => {
      console.log(actions);
      state.list.push(actions.payload);
    },
    remove: (state, actions) => {
      state.list = state.list.filter((item) => {
        return actions.payload != item;
      });
    },
  },
});

export const { add, remove } = todosSlice.actions;

export default todosSlice.reducer;
