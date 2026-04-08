import { DM_Sans, DM_Serif_Display, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/homepage/homePageIntro/Navbar";
import Footer from "@/components/homepage/footer/footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

export const metadata = {
  title: "COSENG Limited",
  description: "Empowering Businesses and Individuals",
  icons: {
    icon: "/images/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${dmSerif.variable} ${bebasNeue.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}