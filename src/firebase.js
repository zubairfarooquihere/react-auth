// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRIwWntCkKr_0kU8d400pqKn30mbAjj_0",
  authDomain: "react-auth-7a373.firebaseapp.com",
  projectId: "react-auth-7a373",
  storageBucket: "react-auth-7a373.appspot.com",
  messagingSenderId: "618209267240",
  appId: "1:618209267240:web:2ef2a09a0ce40d33612f1d",
  measurementId: "G-37195SQF0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
