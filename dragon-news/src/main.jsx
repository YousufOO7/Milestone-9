import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main.jsx';
import CategoryNews from './Pages/CategoryNews.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Navigate to={'/category/01'}></Navigate>
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({params}) => fetch (`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
