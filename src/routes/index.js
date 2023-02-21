import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import Dashboard from "../pages/Dashboard";
import Order from "../pages/Order";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes />}>
             <Route path="/" element={<Dashboard />}></Route>
             <Route path="/order" element={<Order />}></Route>
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
