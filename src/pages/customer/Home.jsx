import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import CardBook from "../../components/CardBook";

const Home = () => {
  const books = [
    {
      title: "This Dark Road to Mercy",
      image: "/images/hero-cover1.jpg",
    },
    {
      title: "Tales of Castle Black",
      image: "/images/hero-cover2.jpg",
    },
    {
      title: "Secrets of the Sea",
      image: "/images/hero-cover3.jpg",
    },
    {
      title: "Secrets of the Sea",
      image: "/images/hero-cover4.jpg",
    },
  ];

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

  const bestSeller = {
    id: 8,
    title: "Bellow one",
    image: "/images/bestseller-book.jpg",
    author: "Tara Westover",
    price: 15,
  };

  const author = {
    name: "Melissa Miner",
    image: "/images/author-image.jpg",
    books: [
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
    ],
  };

  return (
    <>
      <Navbar />

      <div className="py-5">
        <div className="banner py-5">
          <div className="d-flex justify-content-between algn-items-center gap-5">
            <div className="w-50 banner-content">
              <h4>Good books</h4>

              <h1>A good book for a great mood</h1>
              <p className="my-3">
                Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit,
                sed quia consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt.
              </p>

              <div>
                <button className="btn-custom py-2 px-4">Discover now</button>
              </div>
            </div>

            <div className="w-100 px-0 my-auto overflow-hidden">
              <div>
                <Splide
                  options={{
                    type: "loop",
                    perPage: 3,
                    gap: "1rem",
                    focus: "center",
                    pagination: false,
                    arrows: true,
                    breakpoints: {
                      768: {
                        perPage: 1,
                      },
                      1024: {
                        perPage: 2,
                      },
                    },
                  }}
                >
                  {books.map((book, index) => (
                    <SplideSlide key={index}>
                      <div>
                        <img
                          src={book.image}
                          alt={book.title}
                          className="img-fluid"
                        />
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
            </div>
          </div>
        </div>

        <div className="special-book py-5 bg-light">
          <div className="container">
            <h1 className="text-center pt-5">Discover your new book</h1>
            <p className="mb-5 text-center">
              Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit,
              sed quia consequuntur magni dolores eos qui ratione voluptatem
              sequi nesciunt.
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
              <button className="btn-custom py-2 px-4">discover more</button>
            </div>
          </div>
        </div>

        <div className="Best-seller py-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-7 px-0 py-5 my-auto overflow-hidden book-img">
                <div className="d-flex justify-content-center py-5">
                  <img src={bestSeller.image}></img>
                </div>
              </div>

              <div className="col-lg-5 my-auto px-5 ">
                <h4>World's Best Seller</h4>
                <h1 className="bestseller-title">{bestSeller.title}</h1>
                <p className="my-3">
                  Nemo enim ipsam voluptatem quia voluptas sit aut odit aut
                  fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt.
                </p>
                <div>
                  <button className="btn-custom py-2 px-4">Buy now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="author py-5">
          <div className="container">
            <h1 className="mb-5">Author of the Month</h1>
            <div className="row">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-6">
                    <div>
                      <img src={author.image} className="img-fluid"></img>
                    </div>
                  </div>
                  <div className="col-lg-6 my-auto">
                    <div className="author-infor my-auto">
                      <h2 className="fw-bold">{author.name}</h2>
                      <p className="my-3">
                        Nemo enim ipsam voluptatem quia voluptas sit aut odit
                        aut fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt.
                      </p>
                      <div className="d-flex justify-content-center">
                        <button className="btn-custom py-2 px-4">
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="boos-wrapper">
                  {author.books.map((book) => (
                    <div className="d-flex gap-3 mb-3">
                      <div>
                        <img
                          src={book.image}
                          className="img-fluid"
                          width="120px"
                        ></img>
                      </div>
                      <div className="my-auto">
                        <h5 className="fw-bold">{book.title}</h5>
                        <p className="text-danger fw-semibold">
                          {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                          }).format(book.price)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
