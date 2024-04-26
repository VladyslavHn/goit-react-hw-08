import { createSlice } from "@reduxjs/toolkit";
import { apiLogin, apiRegister } from "./operations";


const authSlice = createSlice({
 name: "auth",

    initialState: {
        isSignedIn: false,
        userData: null,
        token: null,
        loading: false,
        error: false,
 
   },

   extraReducers: (builder) => {
      builder
         .addCase(apiRegister.pending, (state) => {
            state.loading = true;
            state.error = false;
         })
         .addCase(apiRegister.fulfilled, (state, action) => { 
            state.loading = false;
            state.isSignedIn = true;
             state.userData = action.payload.user;
             state.token = action.payload.token;
         })
         .addCase(apiRegister.rejected, (state) => {
            state.loading = false;
            state.error = true;
         })
         .addCase(apiLogin.pending, (state) => {
            state.loading = true;
            state.error = false;
         })
         .addCase(apiLogin.fulfilled, (state, action) => { 
            state.loading = false;
            state.isSignedIn = true;
             state.userData = action.payload.user;
             state.token = action.payload.token;
         })
         .addCase(apiLogin.rejected, (state) => {
            state.loading = false;
            state.error = true;
         })
 },
});



export const authReducer = authSlice.reducer;