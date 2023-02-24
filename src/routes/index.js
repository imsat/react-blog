import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import Dashboard from "../pages/Dashboard";
import Post from "../pages/Post";
import PostDetails from "../pages/PostDetails";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes />}>
             <Route path="/" element={<Dashboard />}></Route>
             <Route path="/posts" element={<Post />}></Route>
             <Route path="/posts/:id" element={<PostDetails />}></Route>
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
