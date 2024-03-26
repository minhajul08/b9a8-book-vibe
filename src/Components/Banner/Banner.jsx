import './Banner.css'
const Banner = () => {
    return (
        <div className="lg:w-[1200px] flex  bg-[#1313130D] justify-center items-center "> 
            <div className="space-y-7 lg:w-[526px]">
                <h1 className="text-5xl font-bold ">Books to freshen up your bookshelf</h1>
                <button className="btn  bg-green-600 border-0">View The List</button>
            </div>
            <div className="">
                <img className="bg" src="/public/cover.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;