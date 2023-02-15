export const FIREBASE_ERRORS = {
  "Firebase: Error (auth/email-already-in-use).":
    "A user with that email already exists",

  "Firebase: Error (auth/user-not-found).": "Invalid email or password",
  "Firebase: Error (auth/wrong-password).": "Invalid email or password",
};

export type ErrorKeys =
  | "Firebase: Error (auth/email-already-in-use)."
  | "Firebase: Error (auth/user-not-found)."
  | "Firebase: Error (auth/wrong-password).";
