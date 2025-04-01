//import imglogo from  './img/KaizenSync.jpeg' ; //'/img/KaizenSync.jpeg'
import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import MenuLateral from "./components/MenuLateral";
import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import Pacientes from "./pages/Pacientes";
import Pagamentos from "./pages/Pagamentos";
import LoginPage from "./pages/LoginPage"; 
import { AuthProvider, AuthContext } from "./context/AutoContext";
import "./App.css";

function PrivateRoute({ element }) {
  const { user } = useContext(AuthContext);
  return user ? element : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthProvider>
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/*"
            element={
              <PrivateRoute
                element={
                  <>
                    <MenuLateral />
                    <main className="conteudo">
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/agenda" element={<Agenda />} />
                        <Route path="/pacientes" element={<Pacientes />} />
                        <Route path="/pagamentos" element={<Pagamentos />} />
                      </Routes>
                    </main>
                  </>
                }
              />
            }
          />
        </Routes>
      </div>
    </Router>
  </AuthProvider>
);
}

export default App;
