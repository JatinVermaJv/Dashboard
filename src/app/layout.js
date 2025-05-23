import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QuestionHistoryProvider } from "./context/QuestionHistoryContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dashboard",
  description: "A perfectly Designed Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QuestionHistoryProvider>
          {children}
        </QuestionHistoryProvider>
      </body>
    </html>
  );
}