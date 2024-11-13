import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './Layouts/HomeLayout';



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path: "/category/:id",
        element: <h2>category</h2>
      }
    ]
    
  },
  {
    path: "/news",
    element: <div>News</div>,
  },
  {
    path: "/auth",
    element: <div>Auth</div>,
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>,
)
