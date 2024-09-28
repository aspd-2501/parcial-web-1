import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forms from "./components/forms/forms";
import Header from "./components/header/header";
import Robots from "./components/robots/robots";
import Footer from "./components/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Header />
          <Routes>
            <Route path="/" element={<Forms />} />
            <Route path="/robots" element={<Robots />} />
          </Routes>
        </header>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
