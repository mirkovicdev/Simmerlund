import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/globals.css";
import { ToastProvider } from "@/components/ui/toast"; // Import ToastProvider from the correct path
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "./components";
import { platelogo } from "@/public";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--poppins",
});

export const metadata: Metadata = {
  title: "Simmerlund Coaching",
  description: "Gjør dine treningsdrømmer til virkelighet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="http://localhost:3000/public/platelogo.png" />
      </head>
      <body className={`${poppins.variable} font-poppins bg-primary`}>
        <header className="paddingX flexCenter">
          <nav className="boxWidth">
            <Navbar />
          </nav>
        </header>
        <ToastProvider>
          {children}
          <Toaster />
        </ToastProvider>
      </body>
    </html>
  );
}
