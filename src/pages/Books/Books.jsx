import { Suspense, useState } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {

    const [allBooks, setAllBooks] = useState([]);

    // useEffect(() => {
    //     fetch("booksData.json")
    //     .then((res) => res.json())
    //     .then((data) => console.log(data))
    // },[])

    // const bookPromise = fetch('/public/booksData.json').then((res) => res.json());
    return (
        <div>
            <h2 className="text-5xl font-bold text-center mt-5">Books</h2>
            <Suspense fallback={<span>Loading...........</span>}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-8 mt-5">
                    {
                        data.map((data) => (<Book key={data.bookId} data={data}></Book>))
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;