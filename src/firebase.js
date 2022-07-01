// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnBzIIiOqr_80VNDYGqLCOYV9Eays9tcg",
  authDomain: "anon-chat-dd302.firebaseapp.com",
  projectId: "anon-chat-dd302",
  storageBucket: "anon-chat-dd302.appspot.com",
  messagingSenderId: "648270148933",
  appId: "1:648270148933:web:624a8e8d90ba34930eba2c",
  measurementId: "G-X41673QT86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);