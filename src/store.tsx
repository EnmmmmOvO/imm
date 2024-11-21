import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    mobileNavOpen: false,
  },
  reducers: {
    closeMobileNav: (state) => {
      state.mobileNavOpen = false;
    },
    openMobileNav: (state) => {
      state.mobileNavOpen = true;
    },
  },
});

export const {
  closeMobileNav,
  openMobileNav,
} = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;