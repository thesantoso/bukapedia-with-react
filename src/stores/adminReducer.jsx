import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    email: "tokopaedi@gmail.com",
    password: null, //cust123
    adminStatus: false,
    error: false,
    loading: false,
  },
  reducers: {},
});

// export const {
//   saveToken,
//   setPassword,
//   checkEmail,
//   userLogout,
//   setError,
//   resetError,
// } = userSlice.actions;

export default adminSlice.reducer;
