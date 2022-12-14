import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
const firebaseConfig = {

    apiKey: "AIzaSyDr60ekEEFhS2N9BQi-MGWQ1xsPq6589q8",

    authDomain: "airbnb-947fb.firebaseapp.com",

    projectId: "airbnb-947fb",

    storageBucket: "airbnb-947fb.appspot.com",

    messagingSenderId: "632326844942",

    appId: "1:632326844942:web:336932e429be1847bb025f"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
