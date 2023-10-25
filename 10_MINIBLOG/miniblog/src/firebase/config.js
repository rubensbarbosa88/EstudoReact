import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAYppHNtR8Agft1W3XTD2L1u9Gs50w1SO8",
  authDomain: "miniblog-bf599.firebaseapp.com",
  projectId: "miniblog-bf599",
  storageBucket: "miniblog-bf599.appspot.com",
  messagingSenderId: "470883957975",
  appId: "1:470883957975:web:dc27270fea4403addc4492"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)