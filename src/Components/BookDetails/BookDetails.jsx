import {  useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadeBook } from "../../Utility/LocalStroage";

const BookDetails = () => {
    const books = useLoaderData ();
    const {id} = useParams ();
     const idInt =parseInt (id)
    const book =books.find(book =>book.bookId ===idInt)
    console.log (book);
    const {image,bookName,author,category,rating,tags,review,totalPages,publisher,yearOfPublishing} = book;

       const handelReadBook = () => {
        saveReadeBook (idInt);
         toast ('book added')
       }
       
       
        const handelWishList = () => {
            toast ('wishlist')
        }
   
    return (
        <div className="grid grid-cols-1 lg:grid-cols-7">
        <div className=" flex rounded-lg col-span-3 justify-center items-center bg-[#F3F3F3] my-10 mx-5">
            <img className="w-[200px] h-[300px] my-3" src={image} alt={bookName}/>
        </div>
        <div className="col-span-4 space-y-2 lg:my-10 text- mx-5">
             <h1 className="text-4xl font-bold">{bookName}</h1>
             <p className="text-xl font-medium">By:{author}</p>
             <hr />
             <p>{category}</p>
             <hr />
             <p><span className="font-bold">Review: </span>{review}</p>
             <div className="flex gap-4">
             <p className="mt-5">Tags:</p>
             <p className="mt-5 bg-[#23BE0A0D] px-4 rounded-xl text-[#23BE0A]"> #{tags[0]}</p>
             <p className="mt-5 bg-[#23BE0A0D] px-4 rounded-xl text-[#23BE0A]"> #{tags[1]}</p>
             </div>
             <hr />
             <p>Number of pages<span className="font-bold lg:ml-16">{totalPages}</span></p>
             <p>Publisher: <span className="font-bold lg:ml-[113px]">{publisher}</span></p>
             <p>Year of Publishing: <span className="font-bold lg:ml-[50px]">{yearOfPublishing}</span></p>
             <p>Rating: <span className="font-bold lg:ml-[137px]">{rating}</span></p>
             <button onClick={handelReadBook} className="btn border-[#1313134D]  btn-ghost hover:bg-[#23BE0A] lg:w-[100px]">Read</button>
             <button onClick={handelWishList} className="btn bg-[#50B1C9] border-0 ml-7 lg:w-32 text-white">Wishlist</button>
        </div>
        <ToastContainer />
      </div>
       
    );
};

export default BookDetails;