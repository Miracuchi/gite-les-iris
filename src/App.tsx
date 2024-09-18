import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";

function App() {
  // const [count, setCount] = useState(0);
  // const banner = "/src/assets/ressources/bannerIris 2.jpg";
  return (
    <Router>
      <header>
        <Header />
        {/* <MobileHeader /> */}
      </header>
      <main>
        <Routes>
          <Route></Route>
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
