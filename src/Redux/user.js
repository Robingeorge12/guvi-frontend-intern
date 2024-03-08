import { createSlice } from "@reduxjs/toolkit";
import { post_user_data } from "./userAction";

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
        console.log(action.payload)
        state.isSuccess = action.payload;
    }).addCase(post_user_data.rejected,(state,action)=>{
        state.isLoading = false;
        state.isError = true;
        console.log(action.payload.message.response.data.message);
        state.isfail = action.payload.message.response.data.message;
    })

    //  builder
    //    .addCase(login.pending, (state, action) => {
    //      state.isError = false;
    //      state.isLoading = true;
    //    })
    //    .addCase(login.fulfilled, (state, action) => {
    //      state.isError = false;
    //      state.isLoading = false;
    //      console.log(action.payload);
    //      let token = action.payload.token;
    //      state.loginSucc = action.payload.message;
    //      state.token = action.payload.token;
    //      state.users = action.payload.login_user;
    //      console.log(action.payload.login_user);
    //      localStorage.setItem(
    //        "user",
    //        JSON.stringify(action.payload.login_user)
    //      );
    //      localStorage.setItem("token", JSON.stringify(token));
    //    })
    //    .addCase(login.rejected, (state, action) => {
    //      state.isError = true;
    //      state.isLoading = false;
    //      console.log(action.payload.message.message);
    //      state.failHints = action.payload.message.message;
    //    });
  },
});

export default userSlice.reducer;
