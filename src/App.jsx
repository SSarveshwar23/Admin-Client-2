import React from "react";
import Login_and_Register from "./components/auth/Login_and_Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Create_project from "./components/clients/Create_project";
import ClientPage from "./components/clients/ClientPage";
import No_clients from "./components/clients/No_clients";
function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Login_and_Register />} />
          <Route path="/*" element={<Navbar/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
