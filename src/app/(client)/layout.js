import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

export default function Layout({children}) {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  )
}
