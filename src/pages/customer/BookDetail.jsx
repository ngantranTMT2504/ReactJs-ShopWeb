import CardBook from "../../components/CardBook";

export const BookDetail = () => {
  const book = {
    id: 8,
    title: "Cyber Angle",
    image: "/images/book-08.jpg",
    author: "Tara Westover",
    price: 15,
    category: "science books",
  };

  const specialBooks = [
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
  ];

  return (
    <>
      <div className="bookDetail py-5">
        <div className="container">
          <div className="d-flex gap-5">
            <div className="">
              <div>
                <img src={book.image}></img>
              </div>
            </div>
            <div className="">
              <div className="info-book">
                <h1>{book.title}</h1>
                <p>{book.author}</p>
                <p className="text-danger fw-semibold ">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(book.price)}
                </p>
              </div>
              <div className="">
                <input
                  type="number"
                  className="w-25 p-2 me-2"
                  value="1"
                ></input>
                <button className="btn-custom p-2">Add to card </button>
              </div>
              <div className="py-2">
                <p>
                  Category :{" "}
                  <span className="text-primary">{book.category}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="special-book py-5 bg-light">
        <div className="container">
          <h1 className="text-center pt-5 fw-bold">Discover your new book</h1>
          <p className="mb-5 text-center">
            Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed
            quia consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt.
          </p>

          <div className="row">
            {specialBooks.map((book) => (
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

          <div className="d-flex justify-content-center">
            <button className="btn-custom py-3 px-4">discover more</button>
          </div>
        </div>
      </div>
    </>
  );
};
