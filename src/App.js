import React, { lazy, useEffect } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { themeChange } from "theme-change";
import "./App.css";
import checkAuth from "./app/auth";
import initializeApp from "./app/init";
// Importing pages
const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
initializeApp();
const token = checkAuth();

function App() {
  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false);
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/app/*" element={<Layout />} />

          <Route
            path="*"
            element={
              <Navigate to={token ? "/app/welcome" : "/login"} replace />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
