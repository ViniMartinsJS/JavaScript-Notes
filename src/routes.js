import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/home";
import RegisterScreen from "./screens/auth/register";
import LoginScreen from "./screens/auth/login";
import NotesIndexScreen from "./screens/notes/index";
import UserEditScreen from "./screens/users/edit";

const RoutesApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/notes" element={<NotesIndexScreen />} />
      <Route path="/users/edit" element={<UserEditScreen />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesApp;
