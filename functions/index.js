const {onRequest} = require("firebase-functions/v2/https");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started
//
exports.helloWorld = onRequest((request, response) => {
  response.send("Hello from Firebase!");
});
