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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:mt-10 mt-5">
                {
                    books.map (book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;