import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User as FirebaseUser } from "firebase/auth";

type User = FirebaseUser | null | undefined;

export interface AuthState {
  user: User;
  loading: boolean;
  errorMessage: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateAuth: (state, action: PayloadAction<AuthState>) => {
      const { user, loading, errorMessage } = action.payload;

      state.user = user;
      state.loading = loading;
      state.errorMessage = errorMessage;
    },
  },
});

export const { updateAuth } = authSlice.actions;

export default authSlice.reducer;
