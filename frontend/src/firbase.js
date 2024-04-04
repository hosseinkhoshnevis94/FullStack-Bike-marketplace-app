// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRBASE_API_KEY,
  authDomain: "mern-bike-app.firebaseapp.com",
  projectId: "mern-bike-app",
  storageBucket: "mern-bike-app.appspot.com",
  messagingSenderId: "959693408776",
  appId: "1:959693408776:web:4814322e0ba89ca1cb5fbd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);