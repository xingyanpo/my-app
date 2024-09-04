import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700"] });

export const metadata = {
  title: "My App",
  description: "This is my App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main className="main max-w-1500 mx-auto w-92%">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
