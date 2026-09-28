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
    }
  },
});

export const { setIsAddingTodo } = todoSlice.actions;
export default todoSlice.reducer;
