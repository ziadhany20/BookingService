// firebase.ts
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAUgmNM4kGbZl7fnbM_TwCq_LmekXnVIFk",
  authDomain: "service-booking-99250.firebaseapp.com",
  projectId: "service-booking-99250",
  storageBucket: "service-booking-99250.appspot.com",
  messagingSenderId: "97339256947",
  appId: "1:97339256947:web:940aaeee7c70ca189c7a06",
  measurementId: "G-HNZKEVFPBQ"
};

// Initialize Firebase globally once
let firebaseApp: FirebaseApp | undefined;
let analytics: Analytics | undefined;

const initFirebase = (): { app: FirebaseApp, analytics: Analytics | undefined } => {
  if (!firebaseApp) {
    firebaseApp = initializeApp(firebaseConfig);
    if (typeof window !== "undefined") {
      analytics = getAnalytics(firebaseApp); // Initialize analytics if on client-side
    }
  }
  return { app: firebaseApp, analytics };
};

// Initialize Firebase and export app and analytics
const { app, analytics: firebaseAnalytics } = initFirebase();

export { app as firebaseapp, firebaseAnalytics as analytics, initFirebase };