import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type view = "login" | "signup" | "reset password";

interface authModal {
  open: boolean;
  view: view;
}

export interface ModalState {
  authModal: authModal;
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
    closeAuthModal: (state) => {
      state.authModal.open = false;
    },
    openAuthModal: (state, action: PayloadAction<view>) => {
      state.authModal = {
        open: true,
        view: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { closeAuthModal, openAuthModal } = modalSlice.actions;

export default modalSlice.reducer;
