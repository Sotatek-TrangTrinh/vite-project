import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  username: string;
}
const initialState: AuthState = {
  username: "",
};

export const authSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});

export const { updateUsername } = authSlice.actions;

export default authSlice.reducer;
