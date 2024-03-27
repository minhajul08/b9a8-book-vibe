import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredSaveBook } from "../../Utility/LocalStroage";
import { HiOutlineDocumentText,HiOutlineUsers } from "react-icons/hi";

 const ListedBooks = () => {
    const listedBooks = useLoaderData ();
    const [bookStored,setBookStored] = useState ([]);
      
     useEffect (() => {
        const storedBookIds = getStoredSaveBook ();
        if (listedBooks.length > 0){
            const booksListed =listedBooks.filter(listedBook => storedBookIds.includes (listedBook.bookId))
            setBookStored (booksListed)
        }
     } ,[listedBooks])
      
    return (
        <div>
            <button className="btn btn-ghost">Listed Books</button> <button className="btn btn-ghost">Wishlist</button>
            <div className=" ">
                {
                    bookStored.map (book => 
                        <div key={book.bookId} className="grid grid-cols-1 lg:grid-cols-7  border my-5 rounded-md mx-3 lg:mx-0">
        <div className=" flex rounded-lg col-span-2 justify-center items-center bg-[#F3F3F3] lg:my-10 my-5 mx-5">
            <img className="w-[150px] h-[200px] my-3" src={book.image} alt={book.bookName}/>
        </div>
        <div className="col-span-5 space-y-2 my-5  lg:my-10 text-[#131313CC] mx-4 ">
             <h1 className="text-4xl font-bold">{book.bookName}</h1>
             <p className="text-xl font-medium">By:{book.author}</p>
             <p>{book.category}</p>
             <div className="flex gap-6">
             <p className="font-bold">Tags</p>
             <p className="text-[#23BE0A]"> #{book.tags[0]}</p>
             <p className="text-[#23BE0A]"> #{book.tags[1]}</p>
             <p className="text-[#131313CC]">Year Of Publishing: <span className="">{book.yearOfPublishing}</span></p>
             </div>
             <div className="flex gap-5">
             <p className="flex items-center gap-1"><HiOutlineUsers /> Publisher: {book.publisher}</p>
             <p className="flex items-center gap-1"><HiOutlineDocumentText />Page: {book.totalPages}</p>
             </div>
             <hr className=""></hr>
             <div className="flex gap-4">
             <p className="bg-[#328EFF26] flex items-center p-2 px-4 rounded-full text-[#328EFF]">Category {book.category}</p>
             <p className="bg-[#FFAC3326] flex items-center p-2 px-4 rounded-full text-[#FFAC33]">Rating {book.rating}</p>
                <button className="btn bg-[#23BE0A] rounded-full text-white">View Details</button>
             </div>
        </div>
        
      </div>
                        )
                }
            </div>
        </div>
    );
};

export default ListedBooks;