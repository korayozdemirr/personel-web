import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:["light", "dark",false]
  };

export const themSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeSelect: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { themeSelect } = themSlice.actions;
export default themSlice.reducer;
