import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const post_sign = createAsyncThunk(
  "auth/post_sign",
  async (payload, options) => {
    try {
    //   console.log(payload);
      const res = await axios.post(
        `https://guvi-backend-intern.onrender.com/sign`,
        payload,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
    //   console.log(res.data.message);

      return res.data.message;
    } catch (er) {
      const { rejectWithValue } = options;
    //   console.log(er);
      return rejectWithValue({ message: er });
    }
  }
);


export const post_login = createAsyncThunk(
  "auth/post_login",
  async (payload, options) => {
    try {
    //   console.log(payload);
      const res = await axios.post(
        `https://guvi-backend-intern.onrender.com/sign/login`,
        payload,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
    //   console.log(res.data);

      return res.data;
    } catch (er) {
      const { rejectWithValue } = options;
    //   console.log(er);
      return rejectWithValue({ message: er });
    }
  }
);