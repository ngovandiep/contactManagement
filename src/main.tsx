import React from "react";
import ReactDOM from "react-dom/client";
import "./app/styles.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/Routers.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
