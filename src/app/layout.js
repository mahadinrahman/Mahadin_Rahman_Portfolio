import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorFollower from "@/components/CursorFollower";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jensen Omega | Software Developer Portfolio",
  description: "Professional portfolio of Jensen Omega, a Software Developer specializing in website development, app development, and strategic digital solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-brand-dark text-stone-100 font-sans selection-accent" suppressHydrationWarning>
        <SmoothScroll>
          <CursorFollower />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
