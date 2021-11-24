// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6jka6Pm84-w8wWJU8u3P5WDCawpClPxc",
  authDomain: "cafeteriaespiral-2010b.firebaseapp.com",
  projectId: "cafeteriaespiral-2010b",
  storageBucket: "cafeteriaespiral-2010b.appspot.com",
  messagingSenderId: "862378385091",
  appId: "1:862378385091:web:8c55a606ffc41dbffb0c76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore()