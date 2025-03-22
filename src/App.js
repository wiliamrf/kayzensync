//import imglogo from  './img/KaizenSync.jpeg' ; //'/img/KaizenSync.jpeg'
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuLateral from "./components/MenuLateral";
import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import Pacientes from "./pages/Pacientes";
import Pagamentos from "./pages/Pagamentos";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
          <MenuLateral />
          <main className="conteudo">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/agenda" element={<Agenda />} />
                  <Route path="/pacientes" element={<Pacientes />} />
                  <Route path="/pagamentos" element={<Pagamentos />} />
              </Routes>
          </main>
      </div>
    </Router>
  );
}

export default App;
