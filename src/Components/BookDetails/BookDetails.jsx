import { MdStarOutline } from "react-icons/md";
import { Link, useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const books = useLoaderData ();
    const {id} = useParams ();
    // const book = books.find(book => book.id ===id)
    const book =books.find(book =>book.bookId ==id)
    console.log (book);
    const {bookId,image,bookName,author,category,rating,tags,review,totalPages,publisher,yearOfPublishing} = book;
   
    return (
        <div className="grid grid-cols-7">
        <div className=" flex rounded-lg col-span-3 justify-center items-center bg-[#F3F3F3] my-10 mx-5">
            <img className="w-[200px] h-[300px] my-3" src={image} alt={bookName}/>
        </div>
        <div className="col-span-4 space-y-2 my-10 text-[#131313CC] ">
             <h1 className="text-4xl font-bold">{bookName}</h1>
             <p className="text-xl font-medium">By:{author}</p>
             <hr />
             <p>{category}</p>
             <hr />
             <p><span className="font-bold">Review: </span>{review}</p>
             <div className="flex gap-6">
             <p className="mt-5">Tags:</p>
             <p className="mt-5"> #{tags[0]}</p>
             <p className="mt-5"> #{tags[1]}</p>
             </div>
             <hr />
             <p>Number of pages<span className="font-bold ml-9">{totalPages}</span></p>
             <p>Number of pages<span className="font-bold ml-9">{publisher}</span></p>
             <p>Number of pages<span className="font-bold ml-9">{yearOfPublishing}</span></p>
             <p>Number of pages<span className="font-bold ml-9">{rating}</span></p>
             <button className="btn border-[#1313134D] btn-ghost">Read</button>
             <button className="btn bg-[#50B1C9] border-0 ml-5">Wishlist</button>
        </div>
            
      </div>
    );
};

export default BookDetails;