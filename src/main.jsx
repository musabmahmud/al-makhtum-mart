import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App.jsx';
import './index.css';
import {
  BrowserRouter
} from "react-router-dom";
import { ShopContextProvider } from "./context/ShopContext.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "contact",
//     element: <Contact />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <RouterProvider router={router} />
  // </React.StrictMode>
  <BrowserRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>,
);