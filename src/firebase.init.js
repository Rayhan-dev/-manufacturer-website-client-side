// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWKvursTf5N6G42tMhA7rENupkhzzm2bg",
  authDomain: "manufacture-website.firebaseapp.com",
  projectId: "manufacture-website",
  storageBucket: "manufacture-website.appspot.com",
  messagingSenderId: "8334100762",
  appId: "1:8334100762:web:076c36ca1a369f597304a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth