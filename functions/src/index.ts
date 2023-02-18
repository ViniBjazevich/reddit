import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

const db = admin.firestore();

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// Example of cloud function that runs when request hits it
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const createUserDocument = functions.auth
  .user()
  .onCreate(async (user) => {
    db.collection("user")
      .doc(user.uid)
      .set(JSON.parse(JSON.stringify(user)));
  });
