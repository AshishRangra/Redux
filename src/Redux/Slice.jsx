import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchData } from "./Api";
const initialState = {
  value: [],
  status: "idle",
  error: null,
};
export const fetchApi = createAsyncThunk("firstRedux/fetchApi", async () => {
  try {
    const res = await FetchData();
    return res;
  } catch (error) {
    // console.log("Failed to fetch Data...");
    throw new Error("Failed to fetch Data...");
  }
});

// const userSlice = createSlice({
//   name: "firstRedux",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchApi.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchApi.fulfilled, (state, action) => {
//         state.status = "fulfilled";
//         state.value = action.payload;
//       })
//       .addCase(fetchApi.rejected, (state,action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });
const userSlice = createSlice({
  name: "firstRedux",
  initialState,
  reducers: {},
});
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchApi.pending.type:
      return {
        ...state,
        status: "loading",
      };
    case fetchApi.fulfilled.type:
      return {
        ...state,
        status: "fulfilled",
        value: action.payload,
      };
    case fetchApi.rejected.type:
      return {
        ...state,
        status: "failed",
        error: action.error.message,
      };
    default:
      return state;
  }
};
export default userSlice.reducer;
export { userReducer };
