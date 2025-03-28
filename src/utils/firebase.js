// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYwzHKZcSCA3KHiTo15lU4Xedy7_7Ob1s",
  authDomain: "netflix-gpt-65dfa.firebaseapp.com",
  projectId: "netflix-gpt-65dfa",
  storageBucket: "netflix-gpt-65dfa.firebasestorage.app",
  messagingSenderId: "366814857771",
  appId: "1:366814857771:web:77862fdfbd334ee331f86e",
  measurementId: "G-670KB35SNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()