import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User as FirebaseUser } from "firebase/auth";

export interface UserState {
  info: any;
}

const initialState: UserState = {
  info: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<any>) => {
      state.info = { ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
