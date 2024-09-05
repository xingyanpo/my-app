import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { AntdRegistry } from '@ant-design/nextjs-registry';

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700"] });

export const metadata = {
  title: "My App",
  description: "This is my App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AntdRegistry>
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </AntdRegistry>
      </body>
    </html>
  );
}
