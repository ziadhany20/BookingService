import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const inter = Inter({ subsets: ["latin"] });

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUgmNM4kGbZl7fnbM_TwCq_LmekXnVIFk",
  authDomain: "service-booking-99250.firebaseapp.com",
  projectId: "service-booking-99250",
  storageBucket: "service-booking-99250.appspot.com",
  messagingSenderId: "97339256947",
  appId: "1:97339256947:web:940aaeee7c70ca189c7a06",
  measurementId: "G-HNZKEVFPBQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const metadata: Metadata = {
  title: "Rakan Massage",
  description: "Relax and enjoy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
