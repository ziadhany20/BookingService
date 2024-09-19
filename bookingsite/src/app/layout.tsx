import "./globals.css";
import { ReactNode } from "react";
import { initFirebase } from "../firebase";

// Initialize Firebase when the component is rendered (in client-side)
if (typeof window !== "undefined") {
  initFirebase();
}

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="3PTkRfv-dpM4yPJeOipf1q2nAlhkaNCEDTyIHsYjxm0" />
      <body>{children}</body>
    </html>
  );
}