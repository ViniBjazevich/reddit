import { RootState } from "./store";

// Modal Selectors
export const selectModal = (state: RootState) => state.modal;
export const selectAuthModal = (state: RootState) => state.modal.authModal;

// Auth Selectors
export const selectAuth = (state: RootState) => state.auth;
export const selectUser = (state: RootState) => state.auth.user;