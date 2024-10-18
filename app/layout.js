import {
  ClerkProvider,
} from '@clerk/nextjs'
import localFont from "next/font/local";
import "./globals.css";
// import Header from "./dashboard/_compo/Header"
import Navbar from "./dashboard/_compo/Navbar"


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "SkillSync.AI",
  description: "Full stack AI powered decentralized platform",
};

export default function RootLayout({ children }) {
  return (

    <ClerkProvider>
      <html lang="en">

        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
         <Navbar/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
