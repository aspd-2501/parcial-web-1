import logo from "./logo.svg";
import "./App.css";
import Detail from "./components/detail/detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forms from "./components/forms/forms";
import Header from "./components/header/header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <header className="App-header">
        <Header />
        <Routes>
          <Route path="/" element={<Forms />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
