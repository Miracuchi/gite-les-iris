import Footer from "./components/Footer";
import Header from "./components/Header";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div></div>
      <Header />
      {/* <MobileHeader /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
}
