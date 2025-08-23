"use client";
import { Rubik } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./Component/WhatsAppButton";

const rubikSans = Rubik({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// Use Rubik in place of the mono as well to remove Geist Mono usage site-wide
const rubikMono = Rubik({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body
        className={`${rubikSans.variable} ${rubikMono.variable} antialiased`}
      >
        {children}
        <WhatsAppButton isFloating={true} />
      </body>
    </html>
  );
}
