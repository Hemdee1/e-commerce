import { useState } from "react";
import { FaStar, FaArrowCircleLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import Loading from "../components/Loading";
import { useEffect } from "react";

const ProductDetails = () => {
  const { data, numberWithCommas, handleCart } = useGlobalContext();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);

  const {
    description,
    image,
    price,
    rating: initial,
    title,
    order,
    cart,
  } = product[0] || "";

  const newPrice = numberWithCommas(price ? price : 0);
  const oldPrice = numberWithCommas(
    price ? Math.round(price + 0.3 * price) : 0
  );
  const rating = Math.round(initial) || "";

  const navigate = useNavigate();
  const { id: number } = useParams();
  const id = +number.slice(1, number.length);

  useEffect(() => {
    setTimeout(() => {
      setProduct(data.filter((item) => item.id === id));
      setLoading(false);
    }, 1000);
  }, [data, id]);

  if (loading) {
    return (
      <section className="product">
        <Loading />
      </section>
    );
  }

  return (
    <section className="product">
      <FaArrowCircleLeft className="backIcon" onClick={() => navigate(-1)} />
      <article>
        <div className="img-cont">
          <img src={image} alt={title} />
        </div>
        <div className="prod-info">
          <h3>{title}</h3>
          <div className="price">
            <h4 className="p">Price: </h4>
            <h4 className="new">#{newPrice}</h4>
            <h4 className="old">#{oldPrice}</h4>
          </div>
          <div className="rating">
            <h4 className="title">Rating:</h4>
            <div className="rate">
              <h4>{rating}</h4>
              <FaStar />
            </div>
          </div>
          <div className="order">
            <h4>
              No of Order: <span>{order}</span>
            </h4>
          </div>
          <div className="prod-desc">
            <h4>Description:</h4>
            <p>{description}</p>
          </div>
        </div>
        <button onClick={() => handleCart(id)}>
          {cart ? "In Cart" : "Add to cart"}
        </button>
      </article>
    </section>
  );
};

export default ProductDetails;
