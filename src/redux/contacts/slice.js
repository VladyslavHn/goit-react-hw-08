import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { apiAddContact, apiDeleteContact, apiGetContacts  } from "./operations";


const contactsSlice = createSlice({
 name: "contacts",

   initialState: {
      contacts: null,
      loading: false,
      error: null,
   },

   extraReducers: (builder) => {
      builder
         .addCase(apiGetContacts.fulfilled, (state, action) => { 
            state.loading = false;
            state.error = null;
            state.contacts = action.payload;
         })
         .addCase(apiAddContact.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.contacts.push(action.payload)
         })
         .addCase(apiDeleteContact.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id);
         })
      .addMatcher(isAnyOf(apiGetContacts.pending, apiAddContact.pending, apiDeleteContact.pending), (state) => {
         state.loading = true;
            state.error = false;
         })
         .addMatcher(isAnyOf(apiGetContacts.rejected, apiAddContact.rejected, apiDeleteContact.rejected), (state) => {
         state.loading = false;
            state.error = true;
      })
   
 },
});



export const contactsReducer = contactsSlice.reducer;