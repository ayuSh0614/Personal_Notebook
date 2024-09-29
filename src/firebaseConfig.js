import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBLb_c0WPf2KofoNKWx5y2nW5mGrNfE8jM",
    authDomain: "personal-notebook-47b33.firebaseapp.com",
    projectId: "personal-notebook-47b33",
    storageBucket: "personal-notebook-47b33.appspot.com",
    messagingSenderId: "573069186572",
    appId: "1:573069186572:web:b434814f6a37173ce2c029",
    measurementId: "G-QL0PGR4FN5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, RecaptchaVerifier, signInWithPhoneNumber };
