import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type view = "login" | "signup" | "reset password";

interface AuthenticationModal {
  open: boolean;
  view: view;
}

interface CommunityModal {
  open: boolean;
}

export interface ModalState {
  authenticationModal: AuthenticationModal;
  communityModal: CommunityModal;
}

const initialState: ModalState = {
  authenticationModal: {
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
    closeAuthenticationModal: (state) => {
      state.authenticationModal.open = false;
    },
    openAuthenticationModal: (state, action: PayloadAction<view>) => {
      state.authenticationModal = {
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
  closeAuthenticationModal,
  openAuthenticationModal,
  closeCommunityModal,
  openCommunityModal,
} = modalSlice.actions;

export default modalSlice.reducer;
