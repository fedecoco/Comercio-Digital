// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcO81EYvu_Ejsw5g21Clbzc_QmNDIHIio",
  authDomain: "comercio-digital-dddeb.firebaseapp.com",
  projectId: "comercio-digital-dddeb",
  storageBucket: "comercio-digital-dddeb.appspot.com",
  messagingSenderId: "237038414944",
  appId: "1:237038414944:web:6daf2a872e1b811e87a705",
  measurementId: "G-HLN1V95JLG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//npm install firebase

//npm install -g firebase-tools

//firebase login
//firebase init
//firebase deploy