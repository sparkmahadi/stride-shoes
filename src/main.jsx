import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer
        position="top-center"
      />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
