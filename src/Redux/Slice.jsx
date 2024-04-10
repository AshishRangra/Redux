import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchData } from "./Api";
// import { FetchData2 } from "./Api";
const initialState = {
  value: [],
  status: "idle",
  error: null,
};
// const initialState2={
//   value2:[],
//   status2:"idle",
//   error2:null,
// }
export const fetchApi = createAsyncThunk("firstRedux/fetchApi", async () => {
  // A function that accepts a Redux action type string and a callback function that should return a promise.
  // The thunk will dispatch an action with the provided type with the returned value once the promise is resolved.
  try {
    const res = await FetchData();
    return res;
  } catch (error) {
    // console.log("Failed to fetch Data...");
    throw new Error("Failed to fetch Data...");
  }
});

export const userSlice = createSlice({
  // A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
  name: "firstRedux",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchApi.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.value = action.payload;
      })
      .addCase(fetchApi.rejected, (state,action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// export const fetchApi2=createAsyncThunk("secondRedux/fetchApi2",async()=>{
//   try{
//     const res=await FetchData2();
//     return res;
//   }
//   catch(err){
//     throw new Error("hehehehehehheehhehehhehehhahahahhhahahahahahahahhahahaahh")
//   }
// })
//  const userSlice2=createSlice({
//   name:"secondRedux",
//   initialState2,
//   reducers:{},
//   extraReducers:(builder)=>{
// builder
// .addCase(fetchApi2.pending,(state)=>{
//   state.status2="loading";
  
// })
// .addCase(fetchApi2.fulfilled,(state,action)=>{
// state.status2="fulfilled";
// state.value2=action.payload;

// })
// .addCase(fetchApi2.rejected,(state)=>{
// state.status2="failed";
// })
//   }
// })
// const userSlice = createSlice({
//   name: "firstRedux",
//   initialState,
//   reducers: {},
// });
// const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case fetchApi.pending.type:
//       return {
//         ...state,
//         status: "loading",
//       };
//     case fetchApi.fulfilled.type:
//       return {
//         ...state,
//         status: "fulfilled",
//         value: action.payload,
//       };
//     case fetchApi.rejected.type:
//       return {
//         ...state,
//         status: "failed",
//         error: action.error.message,
//       };
//     default:
//       return state;
//   }
// };
// export { userSlice.reducer, userSlice2, userSlice2.reducer };
export default userSlice.reducer;


// export { userReducer };
