import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAUgmNM4kGbZl7fnbM_TwCq_LmekXnVIFk",
  authDomain: "service-booking-99250.firebaseapp.com",
  projectId: "service-booking-99250",
  storageBucket: "service-booking-99250.appspot.com",
  messagingSenderId: "97339256947",
  appId: "1:97339256947:web:940aaeee7c70ca189c7a06",
  measurementId: "G-HNZKEVFPBQ"
};

// Declare a variable to hold FirebaseApp
let firebaseapp: FirebaseApp | undefined;

// Initialize Firebase only in the browser environment
export const initFirebase = (): FirebaseApp | undefined => {
  if (typeof window !== "undefined" && !firebaseapp) {
    firebaseapp = initializeApp(firebaseConfig);

    // Enable analytics if measurementId is present
    if ("measurementId" in firebaseConfig) {
      getAnalytics(firebaseapp);
    }
  }
  return firebaseapp;
};

export { firebaseapp };