import { NavLink } from 'react-router-dom';
import ListedBooks from '../ListedBooks/ListedBooks';
import './Banner.css'
const Banner = () => {

//   const   handelBook = () => {
//         console.log ('button click')
//      }

    return (
        <div className="lg:w-[1200px] flex  bg-[#1313130D] justify-center items-center rounded-lg my-5"> 
            <div className="lg:w-[526px]">
                <h1 className="text-5xl font-bold ">Books to freshen up your bookshelf</h1>
                <NavLink to={'/listedBooks'}><button className="btn mt-10 bg-green-600 border-0">View The List</button></NavLink>
            </div>
            <div className="">
                <img className="" src="/public/the dating for man.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;