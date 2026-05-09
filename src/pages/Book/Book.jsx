// import { use } from "react";

import { Star } from "lucide-react";

const Book = ({ data }) => {

    // const data = use(bookPromise)
    // console.log(data);
    const { image, bookName, author, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = data;
    return (
        <div className="card bg-base-100 w-96 shadow-lg p-5">
            <figure className="p-4 bg-gray-100 rounded-2xl">
                <img
                    className="h-50"
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className="">
                    <button className="btn w-30 rounded-4xl text-[#23BE0A]">Page: {totalPages}</button>
                    <button className="btn w-30 rounded-4xl text-[#23BE0A] ml-5">In {yearOfPublishing}</button>
                </div>
                <h2 className="card-title"><span className="font-bold">BookName:</span> {bookName}</h2>
                <h2> <span className="font-bold">Publisher:</span>{publisher}</h2>
                <p>{review}</p>
                <div className="space-y-3">
                    <h2><span className="font-bold">By: </span>{author}</h2>
                    <h2>{tags}</h2>
                </div>
                <div className="flex justify-between items-center text-xl">
                    <h2>{category}</h2>
                    <h2 className="flex text-center">{rating} <Star /></h2>
                </div>
            </div>
        </div>
    );
};

export default Book;