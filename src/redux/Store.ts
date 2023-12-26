import { configureStore, createSlice } from "@reduxjs/toolkit";
let firstVisit = localStorage.getItem("darkmode");
firstVisit == null && localStorage.setItem("darkmode", "false");
const loc = JSON.parse(localStorage.getItem("darkmode")!);
const themeSlice = createSlice({
  name: "theme",
  initialState: { darkmode: loc },
  reducers: {
    changeTheme: (state) => {
      state.darkmode = !state.darkmode;
      localStorage.setItem("darkmode", JSON.stringify(state.darkmode));
    },
  },
});
export const { changeTheme } = themeSlice.actions;
export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});
