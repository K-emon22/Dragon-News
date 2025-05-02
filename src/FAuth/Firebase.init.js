import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAme9WmuynyW2fcFEkG7DRFZ3u7bW5OQKk",
  authDomain: "dragon-news-ce4b5.firebaseapp.com",
  projectId: "dragon-news-ce4b5",
  storageBucket: "dragon-news-ce4b5.firebasestorage.app",
  messagingSenderId: "859537342398",
  appId: "1:859537342398:web:805bf850c3529beb0943ef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
