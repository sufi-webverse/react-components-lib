import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    list: [] as any,
  },
  reducers: {
    initTodosList: (state, actions) => {
        for (let i = 0; i < actions.payload.length; i++) {
            const element = actions.payload[i];
            state.list.push({
                id: element.id,
                title: element.attributes.title
            })
        }
    },
    add: (state, actions) => {
      console.log(actions);
      state.list.push(actions.payload);
    },
    remove: (state, actions) => {
      state.list = state.list.filter((item:any) => {
        return actions.payload.id != item.id;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addAsync.pending, (state, actions) => {
        console.log("pending");
      })
      .addCase(addAsync.fulfilled, (state, actions) => {
        console.log(actions.payload);
        state.list.push(actions.payload)
      });
  },
});

export const addAsync = createAsyncThunk("todos/addAsync", async (v:string) => {
    console.log(v);
    return v;
});


export const { initTodosList, add, remove } = todosSlice.actions;

export default todosSlice.reducer;
