import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getFirestore, serverTimestamp, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGE_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
if (location.hostname === "localhost") {
  self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}
const appCheck = initializeAppCheck(firebaseApp, {
  isTokenAutoRefreshEnabled: true,
  provider: new ReCaptchaV3Provider("6LeYdsUfAAAAAFViMHFbbmtW06LEMDh6nLjRl_7N"),
});
const analytics = getAnalytics(firebaseApp);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const timestamp = serverTimestamp();
const functions = getFunctions(firebaseApp);
export { auth, timestamp, db, Timestamp, analytics, functions, appCheck };
export default firebaseApp;
