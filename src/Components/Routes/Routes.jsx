import { createBrowserRouter } from "react-router-dom";
import Roots from "../../Roots/Roots";
import ErrorPage from "../../Roots/ErrorPage/ErrorPage"
import Home from "../Home/Home";
import ListedBooks from "../ListedBooks/ListedBooks";
import BookDetails from "../BookDetails/BookDetails";
import PageToRead from "../PageToRead/PageToRead"
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
        loader: () => fetch('/public/Books.json')
      },
      {
        path:"/pageToLoad",
        element:<PageToRead></PageToRead>
      }
    ]
  }

  
]);
export default router