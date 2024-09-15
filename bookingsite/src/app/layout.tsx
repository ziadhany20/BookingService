import "./globals.css";
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

export let firebaseapp: FirebaseApp;
// Initialize Firebase
if (typeof window !== "undefined") {
  firebaseapp = initializeApp(firebaseConfig);

  // to enable analytics
  if ("measurementId" in firebaseConfig) {
    getAnalytics(firebaseapp);
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
