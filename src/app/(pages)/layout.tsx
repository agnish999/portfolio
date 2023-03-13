import Footer from "@/components/Footer";
import GlobalProvider from "@/components/GlobalProvider";
import Navbar from "@/components/Navbar";
import { Open_Sans } from "next/font/google";
import "../globals.css";

export const metadata = {
  title: "Manik Agnish",
  description: "Portfolio website",
};

const openSans = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <GlobalProvider>
          <Navbar />
          {children}
          <Footer />
        </GlobalProvider>
      </body>
    </html>
  );
}
