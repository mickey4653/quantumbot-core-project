/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const admin = require("firebase-admin");

// Initialize Firebase Admin with service account credential
admin.initializeApp();

// Import the function from the specific file
const {addMessage} = require("./api/addMessage");


// const db = admin.firestore();
// const docRef = db.collection("firstpost").doc("WVOwCQNVdD3nACFYkftH");

// docRef.get()
//     .then((doc) => {
//       if (doc.exists) {
//         console.log("Document data:", doc.data());
//       } else {
//         console.log("No such document!");
//       }
//     })
//     .catch((error) => {
//       console.error("Error getting document:", error);
//     });

// Expose the function for deployment
exports.addMessage = functions.https.onRequest(addMessage);
