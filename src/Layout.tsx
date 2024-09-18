import Footer from "./components/Footer";
import Header from "./components/Header";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="bg-purple-700"></div>
      <Header />
      {/* <MobileHeader /> */}
      <main className="bg-pink-600">{children}</main>
      <Footer />
    </>
  );
}
