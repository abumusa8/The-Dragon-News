import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './Layouts/HomeLayout';
import CatagoryNews from './Pages/CatagoryNews';



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path: "",
        element: <Navigate></Navigate>
      },
      {
        path: "/category/:id",
        element: <CatagoryNews></CatagoryNews>,
        loader: ({params}) => fetch (`https://openapi.programming-hero.com/api/news/category/${params.id}`)
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
