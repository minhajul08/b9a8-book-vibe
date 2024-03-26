import { MdStarOutline } from "react-icons/md";
import './Book.css'
import { Link } from "react-router-dom";
const Book = ({book}) => {
    const {bookId,bookName,author,image,tags,rating,category} = book;
    return (
      <div className="shadow-lg rounded-lg space-y-5 border">
        <Link to={`/book/${bookId}`}><div className="w-[250px] h-[200px] flex justify-center items-center bg-[#F3F3F3] mx-auto mt-10 rounded-lg">
            <img className="w-[200px] h-[150px] bg " src={image} alt={bookName}/>
        </div></Link>
        <div className="flex gap-7 mt-5 ml-7 text-[#23BE0A] font-bold px-2">
            <p className="bg-[#F3F3F3] py-2 rounded-full px-4">{tags[0]}</p>
            <p className="bg-[#F3F3F3] py-2 rounded-full px-4">{tags[1]}</p>
        </div>
          <div className="font-bold ml-9"> 
          <h1 className="text-2xl">{bookName}</h1>
        <p >By: <span>{author}</span></p>
          </div>
        <hr></hr>
            <div className="flex justify-around gap-5 ">
                <p>{category}</p>
                <p className="flex items-center gap-2 mb-5">{rating} <span><MdStarOutline /></span></p>
                </div>   
      </div>
    );
};

export default Book;