import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/home";
import RegisterScreen from "./screens/auth/register";
import LoginScreen from "./screens/auth/login";
import NotesIndexScreen from "./screens/notes/index";
import UserEditScreen from "./screens/users/edit";

const PrivateRoute = ({ path, element: Element }) => {
  const isUserAuthenticated = () => {
    const user = localStorage.getItem("user");
    return user !== null;
  };

  return (
    <Route
      path={path}
      element={isUserAuthenticated() ? <Element /> : <Navigate to="/login" />}
    />
  );
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <PrivateRoute path="/notes" element={NotesIndexScreen} />
        <PrivateRoute path="/users/edit" element={UserEditScreen} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
