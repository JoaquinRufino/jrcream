import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyBEUVKb30UdEamw-QzJirBIYN4kauuWwYQ",
    authDomain: "jrcream-ecommerce.firebaseapp.com",
    projectId: "jrcream-ecommerce",
    storageBucket: "jrcream-ecommerce.appspot.com",
    messagingSenderId: "255705218083",
    appId: "1:255705218083:web:7f503b770f68c5db99c596"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);