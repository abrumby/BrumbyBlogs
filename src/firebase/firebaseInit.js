import { initializeApp } from "firebase/app";
import { serverTimestamp } from "firebase/firestore";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAT_hLBYVqxbSQjxpe4vfa9gHhy5BKy93U",
    authDomain: "brumbyblogs.firebaseapp.com",
    projectId: "brumbyblogs",
    storageBucket: "brumbyblogs.appspot.com",
    messagingSenderId: "722005979327",
    appId: "1:722005979327:web:4b918be3666a99da65560a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const timestamp = serverTimestamp();

export {timestamp}
export default firebaseApp;