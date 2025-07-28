import { Link } from "react-router";

const CardBook = (props) => {
  const { id, title, image, author, price } = props;
  return (
    <Link to="/detail-book" className="card-book text-decoration-none">
    <div className="card border-0" id={id}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title text-truncate" style={{ maxWidth: '250px' }}>{title}</h5>
        <p className="card-text">{author}</p>
        <p className="card-text fw-semibold text-danger">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </p>
      </div>
    </div>

    </Link>
  );
};

export default CardBook;
