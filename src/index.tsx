import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

// Pages
import Navbar from './components/Navbar';
import Contact from "./pages/Contact";
import Main from "./pages/Main";
import Work from "./pages/Work";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "/kontakt",
    element: <Contact/>,
  },
  {
    path: "/prace",
    element: <Work/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={router}/>
    fdsfsdfds
    
  </React.StrictMode>
)