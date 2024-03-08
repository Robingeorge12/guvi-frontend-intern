import { createSlice } from "@reduxjs/toolkit";
import { get_data, post_user_data } from "./userAction";

const init = {
  Userdata: [],
  isLoading: false,
  isError: false,
  isfail: "",
  isSuccess:""
};

export const userSlice = createSlice({
  name: "user",
  initialState: init,
  extraReducers: (builder) => {
     builder.addCase(post_user_data.pending, (state, action) => {
       state.isLoading = true;
       state.isError = false;
     }).addCase(post_user_data.fulfilled,(state,action)=>{
        state.isLoading = false;
        state.isError = false; 
        // console.log(action.payload)
        state.isSuccess = action.payload;
    }).addCase(post_user_data.rejected,(state,action)=>{
        state.isLoading = false;
        state.isError = true;
        // console.log(action.payload.message.response.data.message);
        state.isfail = action.payload.message.response.data.message;
    })

     builder
       .addCase(get_data.pending, (state, action) => {
         state.isError = false;
         state.isLoading = true;
       })
       .addCase(get_data.fulfilled, (state, action) => {
         state.isError = false;
         state.isLoading = false;
        //  console.log(action.payload);
      
      
         state.users = action.payload;
       })
       .addCase(get_data.rejected, (state, action) => {
         state.isError = true;
         state.isLoading = false;
        //  console.log(action.payload.message.message);
         state.failHints = action.payload.message.message;
       });
  },
});

export default userSlice.reducer;
