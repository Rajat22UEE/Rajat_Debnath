import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/ui/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rajat_Debnath",
  description: "My personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <div className="flex ">
          <Sidebar />
        <main className="transition-all duration-300">
          {children}
        </main>
        </div>
      </body>
    </html>
  );
}
