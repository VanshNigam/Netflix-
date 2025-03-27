// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB513TGf0ChfdSdXeypwAmlfJWEvZBL_7k",
  authDomain: "netflixgpt-7cd9c.firebaseapp.com",
  projectId: "netflixgpt-7cd9c",
  storageBucket: "netflixgpt-7cd9c.firebasestorage.app",
  messagingSenderId: "986270626478",
  appId: "1:986270626478:web:a10beae1aae465ee5bf33f",
  measurementId: "G-74CT0M925L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);