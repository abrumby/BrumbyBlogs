import { initializeApp, } from "firebase/app"
import { serverTimestamp, getFirestore, Timestamp } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import "firebase/firestore"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAT_hLBYVqxbSQjxpe4vfa9gHhy5BKy93U",
    authDomain: "brumbyblogs.firebaseapp.com",
    projectId: "brumbyblogs",
    storageBucket: "brumbyblogs.appspot.com",
    messagingSenderId: "722005979327",
    appId: "1:722005979327:web:4b918be3666a99da65560a",
    measurementId: "G-C0Q64VBRX2"
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebaseApp);
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp);
const timestamp = serverTimestamp()

export { auth, timestamp, db, Timestamp, analytics }
export default firebaseApp