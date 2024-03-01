// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpdrAeG01eT_nhtYhQZ24Wp7inpby7qro",
  authDomain: "event-management-b6c55.firebaseapp.com",
  projectId: "event-management-b6c55",
  storageBucket: "event-management-b6c55.appspot.com",
  messagingSenderId: "672352200187",
  appId: "1:672352200187:web:df7e26997e127048d8d75e",
  measurementId: "G-JLGR2JGD8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);