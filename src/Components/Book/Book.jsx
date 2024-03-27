/* eslint-disable react/prop-types */
import { MdStarOutline } from "react-icons/md";
import './Book.css'
import { Link } from "react-router-dom";
const Book = ({book}) => {
    const {bookId,bookName,author,image,tags,rating,category} = book;
    return (
      <div className="shadow-lg rounded-lg lg:space-y-5 space-y-3 border mx-2 lg:mx-0">
        <Link to={`/book/${bookId}`}><div className="lg:w-[250px] lg:h-[200px] flex justify-center items-center bg-[#F3F3F3] mx-10 lg:mx-auto mt-10 rounded-lg">
            <img className="lg:w-[200px] lg:h-[150px] bg w-full my-3 lg:my-0  " src={image} alt={bookName}/>
        </div></Link>
        <div className="flex gap-7 mt-5 lg:ml-7  text-[#23BE0A] font-medium px-2 justify-center lg:justify-start">
            <p className="bg-[#F3F3F3] py-2 rounded-full px-4">{tags[0]}</p>
            <p className="bg-[#F3F3F3] py-2 rounded-full px-4">{tags[1]}</p>
        </div>
          <div className="font-bold ml-3 lg:ml-9 lg:text-start text-center"> 
          <h1 className="text-3xl lg:text-2xl">{bookName}</h1>
        <p >By: <span>{author}</span></p>
          </div>
        <hr></hr>
            <div className="flex lg:justify-around justify-center font-medium gap-5 ml-3">
                <p>{category}</p>
                <p className="flex items-center gap-2 mb-5">{rating} <span><MdStarOutline /></span></p>
                </div>   
      </div>
    );
};

export default Book;