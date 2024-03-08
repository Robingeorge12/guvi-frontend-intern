import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const post_user_data = createAsyncThunk(
  "user/post_user_data",
  async (payload, options) => {
    try {
     
      console.log(payload)
      const res = await axios.patch(
        `https://guvi-backend-intern.onrender.com/sign/${payload._id}`,
        payload
      );
      console.log(res.data.message)

      return res.data.message;
    } catch (er) {
      const { rejectWithValue } = options;
      console.log(er);
      return rejectWithValue({ message: er });
    }
  }
);
