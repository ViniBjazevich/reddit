import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type view = "login" | "signup" | "reset password";

interface AuthModal {
  open: boolean;
  view: view;
}

interface CommunityModal {
  open: boolean;
}

export interface ModalState {
  authModal: AuthModal;
  communityModal: CommunityModal;
}

const initialState: ModalState = {
  authModal: {
    open: false,
    view: "login",
  },
  communityModal: {
    open: false,
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
    closeCommunityModal: (state) => {
      state.communityModal.open = false;
    },
    openCommunityModal: (state) => {
      state.communityModal.open = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  closeAuthModal,
  openAuthModal,
  closeCommunityModal,
  openCommunityModal,
} = modalSlice.actions;

export default modalSlice.reducer;
