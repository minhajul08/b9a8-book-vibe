import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
     
     const [books,setBooks] = useState ([]);

      useEffect (() => {
        fetch ('books.json')
        .then (res => res.json ())
        .then (data => setBooks(data))
      } ,[])
   
    return (
        <div>
            <div> <h1 className="text-3xl font-bold text-center lg:mt-10">Books</h1></div>
            <p className=" text-xl font-normal  my-5 lg:mx-20 mx-3 text-center">Explore our curated collection, connect with fellow book enthusiasts, and embark on new adventures with every page turn. Start your literary journey today.</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:mt-10 mt-5">
                {
                    books.map (book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;