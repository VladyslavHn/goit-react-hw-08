export const selectIsSignedIn = (state) => state.auth.isSignedIn;
export const selectUserData = (state) => state.auth.userData;
export const selectToken = (state) => state.auth.token;
export const selectLoading = (state) => state.auth.loading;
export const selectIsError = (state) => state.auth.error;