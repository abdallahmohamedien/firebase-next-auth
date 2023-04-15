// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDFK_r8CLUJrmKt7yKxbUAuUdXdXcjkDbw",
  authDomain: "fir-next-auth-f8f0d.firebaseapp.com",
  projectId: "fir-next-auth-f8f0d",
  storageBucket: "fir-next-auth-f8f0d.appspot.com",
  messagingSenderId: "899925645813",
  appId: "1:899925645813:web:6381782d5b2e28a3d368bc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();