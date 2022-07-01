
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAnBzIIiOqr_80VNDYGqLCOYV9Eays9tcg",
  authDomain: "anon-chat-dd302.firebaseapp.com",
  projectId: "anon-chat-dd302",
  storageBucket: "anon-chat-dd302.appspot.com",
  messagingSenderId: "648270148933",
  appId: "1:648270148933:web:624a8e8d90ba34930eba2c",
  measurementId: "G-X41673QT86"
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase)
const auth = getAuth(firebase)
const storage = getStorage();

export { db, auth, storage };