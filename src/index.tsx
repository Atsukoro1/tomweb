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
import Photogallery from './pages/Photogallery';
import Zahrady from './pages/Zahrady';
import OrezStromu from './pages/OrezStromu';

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
  },
  {
    path: "/fotogalerie",
    element: <Photogallery/>
  },
  {
    path: "/zahrady",
    element: <Zahrady/>
  },
  {
    path: "/orezstromu",
    element: <OrezStromu/>
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={router}/>
  </React.StrictMode>
)