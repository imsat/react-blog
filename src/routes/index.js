import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import Dashboard from "../pages/Dashboard";
import Post from "../pages/Post";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes />}>
             <Route path="/" element={<Dashboard />}></Route>
             <Route path="/posts" element={<Post />}></Route>
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
