import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  filter: "all",
  isAddingTodo: false,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setIsAddingTodo : (state, action) => {
      state.isAddingTodo = action.payload;
    },

    addTodo :(state,action) => {
      const newTodo = {
        id:crypto.randomUUID(),
        text:action.payload,
        completed:false, 
        createdAt:new Date().toISOString(), 
        updatedAt:new Date().toISOString(),
      };
      state.items.unshift(newTodo);
      state.isAddingTodo = false;
    },
  },
});

export const { setIsAddingTodo,addTodo } = todoSlice.actions;
export default todoSlice.reducer;
