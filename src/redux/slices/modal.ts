import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
  authModal: {
    open: boolean;
    view: "login" | "signup" | "resetpassword";
  };
}

const initialState: ModalState = {
  authModal: {
    open: false,
    view: "login",
  },
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
    toggleAuthModal: (state) => {
      const prev = state.authModal.open;
      state.authModal.open = !prev;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleAuthModal } = modalSlice.actions;

export default modalSlice.reducer;
