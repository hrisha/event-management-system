// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWel7n5CNWnLVs5QLtbCCVvNcj6J1XExQ",
  authDomain: "events-management-system-2023.firebaseapp.com",
  databaseURL: "https://events-management-system-2023-default-rtdb.firebaseio.com",
  projectId: "events-management-system-2023",
  storageBucket: "events-management-system-2023.appspot.com",
  messagingSenderId: "588384555878",
  appId: "1:588384555878:web:3291163117190b9c6a2ea7",
  measurementId: "G-MR453ZBSEZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);
const firestore = getFirestore(app);

export { database, storage, firestore };
export default auth;