import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,connectAuthEmulator,
  sendPasswordResetEmail,
  confirmPasswordReset } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANdZt64VPjqZHIB-QwERkm_GVlo_nh0Ks",
  authDomain: "queuing-system-6e62f.firebaseapp.com",
  projectId: "queuing-system-6e62f",
  storageBucket: "queuing-system-6e62f.appspot.com",
  messagingSenderId: "474819130528",
  appId: "1:474819130528:web:f9b508c6d1b6b2d13585c5",
  measurementId: "G-179YQMG8M8"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore(initializeApp(firebaseConfig));

// Get a list of cities from your database
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(initializeApp(firebaseConfig));

export const passwordReset = async (email: string) => {
  return await sendPasswordResetEmail(auth, email)
}

export const confirmThePasswordReset = async (
  oobCode:string, newPassword:string
) => {
  if(!oobCode && !newPassword) return;
  
  return await confirmPasswordReset(auth, oobCode, newPassword)
}