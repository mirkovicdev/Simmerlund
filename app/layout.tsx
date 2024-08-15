import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/globals.css";
import { ToastProvider } from "@/components/ui/toast"; // Import ToastProvider from the correct path
import { Toaster } from "@/components/ui/toaster";
import { Footer, Navbar } from "./components";
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
        <meta property="og:image" content="/public/platelogo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${poppins.variable} font-poppins bg-primary overflowsettings`}>
        <header className="paddingX flexCenter relative z-10">
          <nav className="boxWidth relative z-10">
            <Navbar />
          </nav>
        </header>
        <ToastProvider>
          <main className="relative z-0">{children}</main>
          <Toaster />
        </ToastProvider>
        <section className="bg-primary paddingX flexStart relative z-10">
          <section className="boxWidth">
            <footer className="">
              <Footer />
            </footer>
          </section>
        </section>
      </body>
    </html>
  );
}
