import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
  },
  reducers: {
    addNotes: (state, action) => {
      state.notes = action.payload;
    },
  },
});

export const { addNote, addNotes } = noteSlice.actions;
export default noteSlice.reducer;
