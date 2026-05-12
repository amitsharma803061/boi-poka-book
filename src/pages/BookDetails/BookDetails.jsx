import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find((book) => book.bookId === bookId)
    // console.log(singleBook)
    const { image, bookName, author, category, review, tags, publisher, totalPages, yearOfPublishing, rating } = singleBook;
    // console.log(typeof id, data)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 mt-5">
            <div className="bg-gray-200 rounded-2xl w-full p-20">
                <img className="w-95 ml-8" src={image} alt="" />
            </div>
            <div className="space-y-4">
                <h2 className="text-4xl font-semibold">{bookName}</h2>
                <h4>By: <span className="font-bold">{author}</span></h4>
                <div className="w-150 border-t-1 border-solid border-gray-300"></div>
                <h4>{category}</h4>
                <div className="w-150 border-t-1 border-solid border-gray-300"></div>
                <h4 className="space-x-2"><span className="font-bold">Review:</span><span className="text-gray-500">{review}</span></h4>
                <div className="flex items-center gap-6">
                    <h2>Tags</h2>
                    <div className="space-x-2">
                        {
                            tags.map((tags) => (<button className="btn bg-[#e7f8ed] text-green-400 rounded-3xl " key={tags.bookId} tags={tags}>{tags}</button>))
                        }
                    </div>
                </div>
                <div className="w-150 border-t-1 border-solid border-gray-300"></div>
                <h2 className="space-x-15"><span className="text-gray-500">Number of Page:</span><span className="font-semibold">{totalPages}</span></h2>
                <h2 className="space-x-29"><span className="text-gray-500">Publisher:</span><span className="font-semibold">{publisher}</span></h2>
                <h2 className="space-x-12"><span className="text-gray-500">Year Of Publishing:</span><span className="font-semibold">{yearOfPublishing}</span></h2>
                <h2 className="space-x-35"><span className="text-gray-500">Rating:</span><span className="font-semibold">{rating}</span></h2>
                <div className="flex items-center gap-5">
                    <button className="btn w-30 h-15 text-xl">Read</button>
                    <button className="btn w-30 h-15 text-xl bg-[#50B1C9]">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;