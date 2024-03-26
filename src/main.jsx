import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import Roots from './Roots/Roots';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Roots/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PageToRead from './Components/PageToRead/PageToRead';
import BookDetails from './Components/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/listedBooks",
        element:<ListedBooks></ListedBooks>,
        loader: () => fetch ('/public/Books.json')
      },
      {
        path:"/book/:id",
        element:<BookDetails></BookDetails>,
        loader: () => fetch('Books.json')
      },
      {
        path:"/pageToLoad",
        element:<PageToRead></PageToRead>
      }
    ]
  }

  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)