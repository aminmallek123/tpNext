// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANAAhFzsypG0D0pxIWdg17wapotJfhguA",
  authDomain: "nextproject-c985f.firebaseapp.com",
  projectId: "nextproject-c985f",
  storageBucket: "nextproject-c985f.appspot.com",
  messagingSenderId: "824767674477",
  appId: "1:824767674477:web:0e6d64b483768b2af1a764"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app); 
export default storage; 