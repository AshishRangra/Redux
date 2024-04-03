import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Redux/Slice";

const Store = configureStore({
  reducer: {
    userData: userReducer,
  },
});
export default Store;
