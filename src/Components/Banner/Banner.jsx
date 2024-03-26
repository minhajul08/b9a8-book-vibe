import { NavLink } from 'react-router-dom';
import img from '/src/assets/cover.png'
// import ListedBooks from '../ListedBooks/ListedBooks';
const Banner = () => {

//   const   handelBook = () => {
//         console.log ('button click')
//      }

    return (
        <div className="lg:w-[1200px] flex  bg-[#1313130D] justify-center items-center mx-2 lg:mx-0 rounded-lg my-5"> 
            <div className="lg:w-[526px] mx-3">
                <h1 className="lg:text-5xl text-2xl font-bold ">Books to freshen up your bookshelf</h1>
                <NavLink to={'/listedBooks'}><button className="btn mt-5 lg:mt-10 bg-green-600 border-0">View The List</button></NavLink>
            </div>
            <div className="">
                <img className="" src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;