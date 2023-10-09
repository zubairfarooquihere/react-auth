import { configureStore } from "@reduxjs/toolkit";
import userLoginSlice from "./user";

const store = configureStore({
  reducer: { userLogin: userLoginSlice.reducer },
});

export default store;
