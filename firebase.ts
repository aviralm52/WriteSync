import { getFirestore } from "firebase/firestore";
import { getApp, getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAErzHzQnxHIMf0wtm8RisBs0xaN-kjC_g",
  authDomain: "writesync-1812c.firebaseapp.com",
  projectId: "writesync-1812c",
  storageBucket: "writesync-1812c.firebasestorage.app",
  messagingSenderId: "159636786674",
  appId: "1:159636786674:web:3a0a02d51c66ef5e3daf6b",
  measurementId: "G-56B4CBY4N0",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
