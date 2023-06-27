import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/home";
import RegisterScreen from "./screens/auth/register";
import LoginScreen from "./screens/auth/login";
import NotesIndexScreen from "./screens/notes/index";
import UserEditScreen from "./screens/users/edit";

const isAuthenticated = () => {
  const user = localStorage.getItem("user");
  return user !== null;
}

const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        {/* <PrivateRoute path="/users/edit" element={UserEditScreen} /> */}
        <Route
          path="/notes"
          element={
            <PrivateRoute auth={() => isAuthenticated}>
              <NotesIndexScreen />
            </PrivateRoute>
          } />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
