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
      

<    meta name="google-site-verification" content="M9WNiEqWIPxNMKLg7yYn3Ua4Vg-VPjrIKb7op2pVFE4" /> <body>{children}</body>
    </html>
  );
}