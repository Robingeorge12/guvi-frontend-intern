import { createSlice } from "@reduxjs/toolkit";
import { post_login, post_sign } from "./authAction";

const init = {
  users: [],
  allData: [],
  isLoading: false,
  isError: false,
  failHints: "",
  token: null,
  loginSucc: "",
};
 
export const authSlice = createSlice({
  name: "auth",
  initialState: init,
  extraReducers: (builder) => {

     builder.addCase(post_sign.pending, (state, action) => {
       state.isLoading = true;
       state.isError = false;
     }).addCase(post_sign.fulfilled,(state,action)=>{
        state.isLoading = false;
        state.isError = false;
        console.log(action.payload)
        state.users = action.payload
    }).addCase(post_sign.rejected,(state,action)=>{
        state.isLoading = false;
        state.isError = true;
        console.log(action.payload.message.response.data.message)
        state.failHints = action.payload.message.response.data.message;
    })


     builder
       .addCase(post_login.pending, (state, action) => {
         state.isError = false;
         state.isLoading = true;
       })
       .addCase(post_login.fulfilled, (state, action) => {
         state.isError = false;
         state.isLoading = false;


         console.log(action.payload);


        //  let token = action.payload.token;
         state.loginSucc = action.payload.message;
         state.token = action.payload.token;
         state.users = action.payload.isSendUser;
     

         console.log(action.payload.isSendUser);
     
         localStorage.setItem(
           "login_data",
           JSON.stringify(action.payload.isSendUser)
         );
       })
       .addCase(post_login.rejected, (state, action) => {
         state.isError = true;
         state.isLoading = false;
         console.log(action.payload.message.response.data.message);
         state.failHints = action.payload.message.response.data.message;
       });
  },
});

export default authSlice.reducer