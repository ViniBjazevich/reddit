import { RootState } from "./store";

// Modal Selectors
export const selectModal = (state: RootState) => state.modal;
export const selectAuthModal = (state: RootState) => state.modal.authModal;
