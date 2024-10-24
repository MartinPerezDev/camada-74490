import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkP2Wzm_WYVGftprQm36VkWRAbzSQ6z98",
  authDomain: "ecommerce-74490.firebaseapp.com",
  projectId: "ecommerce-74490",
  storageBucket: "ecommerce-74490.appspot.com",
  messagingSenderId: "254794138038",
  appId: "1:254794138038:web:a8a179430d8eb490574117"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db;