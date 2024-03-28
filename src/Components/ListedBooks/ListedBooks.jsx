import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredSaveBook } from "../../Utility/LocalStroage";
import { HiOutlineDocumentText, HiOutlineUsers } from "react-icons/hi";

const ListedBooks = () => {
    const listedBooks = useLoaderData();
    const [bookStored, setBookStored] = useState([]);
    const [displayBook, setDisplayBook] = useState([]);
    const handelFilterBook = filter => {
        if (filter === "all") {
            setDisplayBook(bookStored)
        }
        else if (filter === "rating") {
            const data = [...bookStored]
            if (data.length > 0) {
                const result = data.sort((a, b) => (b.rating - a.rating))
                //    console.log (result)
                setDisplayBook(result);
            }
        }
        else if (filter === "yearOfPublishing") {
            const data = [...bookStored]
            if (data.length > 0) {
                const result = data.sort((a, b) => (b.yearOfPublishing - a.yearOfPublishing))
                setDisplayBook(result);
            }
        }
        else if (filter === "totalPages") {
            const data = [...bookStored]
            if (data.length > 0) {
                const result = data.sort((a, b) => (b.totalPages - a.totalPages))
                setDisplayBook(result);
            }
        }
    }

    useEffect(() => {
        const storedBookIds = getStoredSaveBook();
        if (listedBooks.length > 0) {
            const booksListed = listedBooks.filter(listedBook => storedBookIds.includes(listedBook.bookId))
            setBookStored(booksListed)
            setDisplayBook(booksListed)
        }
    }, [listedBooks])


    return (
        <div>
            <div className=" bg-[#1313130D] h-16 flex justify-center items-center my-5  mx-3 lg:mx-0">
                <h1 className="my-5 text-3xl font-bold">Books</h1></div>
            <div className="dropdown mb-10 flex justify-center ">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn  bg-[#23BE0A]">
                        Sort By
                        <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-[200px]">
                        <li onClick={() => handelFilterBook('all')}><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="All" value="All" /></li>
                        <li onClick={() => handelFilterBook('rating')}><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Rating" value="Rating" /></li>
                        <li onClick={() => handelFilterBook('yearOfPublishing')}><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Year Of Publish" value="Year Of Publish" /></li>
                        <li onClick={() => handelFilterBook('totalPages')}><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost  justify-start" aria-label="Number Of Pages" value="Number Of Pages" /></li>
                    </ul>
                </div>
            </div>

            <div className=" ">

                <button className="btn btn-ghost">Listed Books</button> <button className="btn btn-ghost">Wishlist</button>
                {
                    displayBook.map(book =>

                        <div key={book.bookId} className="grid grid-cols-1 lg:grid-cols-7  border my-5 rounded-md mx-3 lg:mx-0">
                            <div className=" flex rounded-lg col-span-2 justify-center items-center bg-[#F3F3F3] lg:my-10 my-5 mx-5">
                                <img className="w-[150px] h-[200px] my-3" src={book.image} alt={book.bookName} />
                            </div>
                            <div className="col-span-5 space-y-2 my-5  lg:my-10 font-bold mx-4 ">
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