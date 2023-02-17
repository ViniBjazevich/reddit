import { RootState } from "./store";

// Modal Selectors
export const selectModal = (state: RootState) => state.modal;
export const selectAuthenticationModal = (state: RootState) =>
  selectModal(state).authenticationModal;
export const selectCommunityModal = (state: RootState) =>
  selectModal(state).communityModal;

// Auth Selectors
export const selectAuth = (state: RootState) => state.auth;
export const selectUser = (state: RootState) => selectAuth(state).user;
