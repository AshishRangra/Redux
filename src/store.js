import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Redux/Slice";
// import  userReducer2 from "./Redux/Slice";
const Store = configureStore({
  reducer: {
    userData: userReducer,
    // userData2: userReducer2,
  },
});
export default Store;
