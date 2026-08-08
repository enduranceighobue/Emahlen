import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBcdqNcv7jpS5tzTjjCfRxWfvVCCtW0E0Q",
  authDomain: "emahlen-hotel.firebaseapp.com",
  databaseURL: "https://emahlen-hotel-default-rtdb.firebaseio.com",
  projectId: "emahlen-hotel",
  storageBucket: "emahlen-hotel.firebasestorage.app",
  messagingSenderId: "728637369236",
  appId: "1:728637369236:web:3e9c3244b8ef219622bd81"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);