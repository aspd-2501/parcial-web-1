import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forms from "./components/forms/forms";
import Header from "./components/header/header";
import Robots from './components/robots/robots';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <header className="App-header">
        <Header />
        <Routes>
          <Route path="/" element={<Forms />} />
          <Route path="/robots" element={<Robots/>} />
        </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
