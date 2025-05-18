// main.jsx or index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/layout';
import Home from './pages/home';
import About from './pages/aboutpage';
import MenuPage from './pages/menu';
import GalleryPage from './pages/gallery';
import ReservationPage from './pages/reservation';
import LegalPage from './pages/legal';


const router = createBrowserRouter([
  {
    path : '/',
    element: <Layout/>,
    children:[
      {
        path: "",
        element : <Home/>
      },
      {
        path:'about',
        element: <About/>
      },
      {
        path:'menu',
        element: <MenuPage/>
      },
      {
        path:'gallery',
        element:<GalleryPage/>
      },
      {
        path:'reservation',
        element:<ReservationPage/>
      },
      {
        path:'legal',
        element:<LegalPage/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
     <RouterProvider router={router} />
  
  </React.StrictMode>
);
