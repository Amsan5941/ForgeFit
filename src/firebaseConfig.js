import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // <-- CHANGE THIS

const firebaseConfig = {
  apiKey: "AIzaSyBlMiNagigm2aZzVLfwqo-573SM7By1Mvg",
  authDomain: "forgefit-fb1c6.firebaseapp.com",
  databaseURL: "https://forgefit-fb1c6-default-rtdb.firebaseio.com", // <-- IMPORTANT for Realtime Database
  projectId: "forgefit-fb1c6",
  storageBucket: "forgefit-fb1c6.firebasestorage.app",
  messagingSenderId: "244789044534",
  appId: "1:244789044534:web:099df3daed8d4068cc3f97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const db = getDatabase(app);

export { db };
