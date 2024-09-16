import React from "react";
import { Route, Routes } from "react-router-dom";

const Login = React.lazy(() => import("../views/Login"));
const Welcome = React.lazy(() => import("../views/Welcome"));
const Main = React.lazy(() => import("../views/Main"));

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <Login />
          </React.Suspense>
        }
      />

      <Route
        path="/welcome"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <Welcome />
          </React.Suspense>
        }
      />

      <Route
        path="/main"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <Main />
          </React.Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
