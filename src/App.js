import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";

function App() {
  const { loginUser } = useSelector((state) => state.loginUser);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/users"
            element={
              <PrivateRoute isAuthenticated={loginUser}>
                <Users />
              </PrivateRoute>
            }
          />
          <Route
            path="/users/:id"
            element={
              <PrivateRoute isAuthenticated={loginUser}>
                <UserDetails />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
