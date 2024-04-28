import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { apiLogin, apiLogout, apiRefreshUser, apiRegister } from "./operations";


const authSlice = createSlice({
 name: "auth",

    initialState: {
        isSignedIn: false,
        userData: '',
        token: null,
        loading: false,
        error: false,
 
   },

   extraReducers: (builder) => {
      builder
         .addCase(apiRegister.fulfilled, (state, action) => { 
            state.loading = false;
            state.isSignedIn = true;
             state.userData = action.payload.user;
             state.token = action.payload.token;
         })
         .addCase(apiLogin.fulfilled, (state, action) => { 
            state.loading = false;
            state.isSignedIn = true;
             state.userData = action.payload.user;
             state.token = action.payload.token;
         })
         .addCase(apiRefreshUser.fulfilled, (state, action) => { 
            state.loading = false;
            state.isSignedIn = true;
             state.userData = action.payload;
         })
         .addCase(apiLogout.fulfilled, (state) => { 
            state.loading = false;
            state.isSignedIn = false;
             state.userData = null;
             state.token = null;
         })
         .addMatcher(isAnyOf(apiRegister.pending, apiLogin.pending, apiRefreshUser.pending, apiLogout.pending), (state) => {
         state.loading = true;
            state.error = false;
         })
         .addMatcher(isAnyOf(apiRegister.rejected, apiLogin.rejected, apiRefreshUser.rejected, apiLogout.rejected), (state) => {
         state.loading = false;
            state.error = true;
      })
 },
});



export const authReducer = authSlice.reducer;