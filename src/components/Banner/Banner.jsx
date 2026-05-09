import Booking from "../../assets/banner.png"

const Banner = () => {
    return (
        <div className="bg-gray-100 p-10 flex justify-around items-center rounded-4xl mt-10">
            <div className="w-100">
                <h2 className="text-4xl font-bold">Books to freshen up your bookshelf</h2>
                <button className="btn w-40 h-15 bg-[#23BE0A] text-xl text-white mt-5">View the list</button>
            </div>
            <div>
                <img src={Booking} alt="" />
            </div>
        </div>
    );
};

export default Banner;