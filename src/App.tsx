import { Routes, Route, Link } from "react-router-dom";
import Bai1 from "./components/Bai1";
import Bai2 from "./components/Bai2";
import Bai3 from "./components/Bai3";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Ứng dụng React TypeScript</h1>
        <nav>
          <Link to="/">Bài 1</Link>
          <Link to="/bai2">Bài 2</Link>
          <Link to="/bai3">Bài 3</Link>
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Bai1 />} />
          <Route path="/bai2/*" element={<Bai2 />} />
          <Route path="/bai3" element={<Bai3 />} />
        </Routes>
      </main>
    </div>
  );
}
