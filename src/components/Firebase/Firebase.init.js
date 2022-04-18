// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAj7hn2YDCgTLkeM_uP8PXv0RZxfmCcU1g",
  authDomain: "doctor-home-ac86b.firebaseapp.com",
  projectId: "doctor-home-ac86b",
  storageBucket: "doctor-home-ac86b.appspot.com",
  messagingSenderId: "886777511245",
  appId: "1:886777511245:web:c6ef7f2c3d654602214b04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app;