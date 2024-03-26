import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
     
     const [books,setBooks] = useState ([]);

      useEffect (() => {
        fetch ('/public/Books.json')
        .then (res => res.json ())
        .then (data => setBooks(data))
      } ,[])
   
    return (
        <div>
            <div> <h1 className="text-5xl font-bold text-center mt-10">Books</h1></div>
            <div className="grid grid-cols-3 gap-5 mt-10">
                {
                    books.map (book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;