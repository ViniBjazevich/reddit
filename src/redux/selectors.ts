import { RootState } from "./store";

// selectors will go here
export const selectModal = (state: RootState) => state.modal;
export const selectAuthModal = (state: RootState) => state.modal.authModal;
