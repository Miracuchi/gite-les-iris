import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";
import NotFound from "./pages/404";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Rent from "./pages/Rent";

function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <main className="bg-slate-300 overflow-x-hidden min-h-[100vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* Route pour la page 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;

{
  /* <div>
        <a href="/src/assets/ressources/bannerIris 2.jpg" target="_blank">
          <img src={banner} className="w-full" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="">Vite + React</h1>
      <div className="card ">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
}
