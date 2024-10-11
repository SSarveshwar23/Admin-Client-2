import React from "react";
import { Route, Routes } from "react-router-dom";
import No_clients from './components/clients/No_clients';
import Create_project from "./components/clients/Create_project";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/Clients" element={<No_clients />} />
            <Route path="/client/:id" element={<Create_project />} />
        </Routes>
    );
};

export default AppRoutes;