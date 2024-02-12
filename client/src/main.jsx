import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// React Router para crear rutas
import { BrowserRouter } from "react-router-dom";

// Configuracion de react query
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();

// Configuracion de Redux
import { Provider } from "react-redux";
import store from "./Redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <App />
        </Provider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
