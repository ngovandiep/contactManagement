// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATCcUVLHYVazVm12LtW7ZvXaf9EKoDhs8",
  authDomain: "contactmanagement-93b06.firebaseapp.com",
  projectId: "contactmanagement-93b06",
  storageBucket: "contactmanagement-93b06.appspot.com",
  messagingSenderId: "1029276601907",
  appId: "1:1029276601907:web:e45511b4aefe6b51379d46",
  measurementId: "G-S1YR3YTE41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
analytics