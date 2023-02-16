import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modal";
import userReducer from "./slices/auth";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
