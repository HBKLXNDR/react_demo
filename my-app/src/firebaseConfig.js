// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDK3qQd4aZy7lJDa7stsjV3tVrymwGzTfY",
    authDomain: "fir-project-9b37f.firebaseapp.com",
    projectId: "fir-project-9b37f",
    storageBucket: "fir-project-9b37f.appspot.com",
    messagingSenderId: "934409588137",
    appId: "1:934409588137:web:5c6409ca3cb7b514a048b8",
    measurementId: "G-W23T28ZFPH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);