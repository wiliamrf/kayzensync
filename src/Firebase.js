// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtZypX00UrsEtNV6kIS9ChmKn7-8Oa-4Q",
  authDomain: "kaizensync-6be0d.firebaseapp.com",
  projectId: "kaizensync-6be0d",
  storageBucket: "kaizensync-6be0d.firebasestorage.app",
  messagingSenderId: "859979132323",
  appId: "1:859979132323:web:c9c1629f993608b8c17e16",
  measurementId: "G-F54GF4ZRS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {auth};