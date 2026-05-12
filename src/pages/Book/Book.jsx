// import { use } from "react";

import { Star } from "lucide-react";
import { Link } from "react-router";

const Book = ({ data }) => {

    // const data = use(bookPromise)
    // console.log(data);
    const { image, bookName,bookId, author, totalPages, rating, category, tags, yearOfPublishing, } = data;
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-lg p-5">
                <figure className="p-4 bg-gray-100 rounded-2xl">
                    <img
                        className="h-50"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="flex justify-around items-center gap-5">
                        {
                            tags.map((tags) => (<button className="btn bg-[#e7f8ed] text-green-400 rounded-3xl" key={tags.bookId} tags={tags}>{tags}</button>))
                        }
                    </div>
                    <div className="flex justify-between items-center">
                        <h2 className=""><span className="font-bold"></span> {bookName}</h2>
                        <button className="btn rounded-4xl">{yearOfPublishing}</button>
                    </div>
                    <div className="space-y-3">
                        <h2><span className="font-bold">By: </span>{author}</h2>
                        <h2 className=""><span className="font-bold"> TotalPages:</span>{totalPages}</h2>
                    </div>
                    <div className="border-t-1 border-dashed"></div>
                    <div className="flex justify-between items-center text-xl">
                        <h2>{category}</h2>
                        <h2 className="flex text-center">{rating} <Star /></h2>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;