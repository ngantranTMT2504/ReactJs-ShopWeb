import CardBook from "../../components/CardBook";

export const Books = () => {
  const books = [
    {
      id: 1,
      title: "This Dark Road to Mercy",
      image: "/images/book-01.jpg",
      author: "Wiley Cash",
      price: 10,
    },
    {
      id: 2,
      title: "The Midnight Library",
      image: "/images/book-02.jpg",
      author: "Matt Haig",
      price: 12,
    },
    {
      id: 3,
      title: "The Silent Patient",
      image: "/images/book-03.jpg",
      author: "Alex Michaelides",
      price: 14,
    },
    {
      id: 4,
      title: "Where the Crawdads Sing",
      image: "/images/book-04.jpg",
      author: "Delia Owens",
      price: 11,
    },
    {
      id: 5,
      title: "It Ends with Us",
      image: "/images/book-05.jpg",
      author: "Colleen Hoover",
      price: 13,
    },
    {
      id: 6,
      title: "Atomic Habits",
      image: "/images/book-06.jpg",
      author: "James Clear",
      price: 16,
    },
    {
      id: 7,
      title: "The Book Thief",
      image: "/images/book-07.jpg",
      author: "Markus Zusak",
      price: 10,
    },
    {
      id: 8,
      title: "Educated",
      image: "/images/book-08.jpg",
      author: "Tara Westover",
      price: 15,
    },
  ];

  return (
    <>
      <div className="all-books py-5 bg-light">
        <div className="container">
          <h1 className="Text-uppercase mb-3 all-book-tilte">All Book</h1>
          <div>
            <div className="search d-flex justify-content-between my-4">
              <p>Showing all 12 results</p>
              <div>
                <input
                  type="text"
                  class="p-2 w-100"
                  placeholder="Inter name book"
                ></input>
              </div>
            </div>
            <div className="books-wrap">
              <div className="row">
                {books.map((book) => (
                  <div className="col-lg-3 mb-5">
                    <CardBook
                      id={book.id}
                      title={book.title}
                      image={book.image}
                      author={book.author}
                      price={book.price}
                    ></CardBook>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <button className="btn-custom py-2 px-4">See more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
