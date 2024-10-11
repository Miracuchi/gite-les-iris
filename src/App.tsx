import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import HeaderV2 from "./components/HeaderV2";
import { LanguageProvider } from "./components/LanguageContext";
import "./index.css";
import NotFound from "./pages/404";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <LanguageProvider>
        <header>
          {/* <Header /> */}
          <HeaderV2 />
        </header>
        <main className="min-h-[100vh] overflow-x-hidden bg-[#F5F5DC]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* Route pour la page 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </LanguageProvider>
    </Router>
  );
}

export default App;
