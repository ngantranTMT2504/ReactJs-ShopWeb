export const Cart = () => {
  const cart = [
    {
      id: 1,
      title: "This Dark Road to Mercy",
      image: "/images/book-01.jpg",
      author: "Wiley Cash",
      price: 10,
      quality: 2,
    },
    {
      id: 2,
      title: "The Midnight Library",
      image: "/images/book-02.jpg",
      author: "Matt Haig",
      price: 12,
      quality: 1,
    },
  ];

  const subtotal = 20;

  const total = 20;

  return (
    <>
      <div className="cart py-5">
        <div className="container">
          <h1>Cart</h1>
          <div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((book) => (
                  <tr>
                    <td scope="row">
                      <a href="#">
                        <i class="bi bi-x-circle"></i>
                      </a>
                    </td>
                    <td>
                      <img src={book.image} class="img-cart"></img>
                    </td>
                    <td>{book.title}</td>
                    <td>
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(book.price)}
                    </td>
                    <td>
                      <input
                        type="number"
                        value={book.quality}
                        class="cart-quality p-2"
                      ></input>
                    </td>

                    <td>
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(book.price * book.quality)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="my-4">
            <input className="p-2 me-4" placeholder="couple code"></input>
            <button className="btn-custom px-4 py-2">Apply Couple</button>
          </div>
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
              <div className="card">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col" colSpan="2">
                        <h4>Cart Total</h4>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Subtotal</th>
                      <td className="text-danger fw-semibold">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(subtotal)}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Total</th>
                      <td className="text-danger fw-semibold">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(total)}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="w-100">
                  <button className="btn-custom py-3 px-4 w-100">Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
