import { FaStar, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Loading from "./Loading";

const Products = () => {
  const { loading, data, handleCart, handleFav, numberWithCommas } =
    useGlobalContext();

  if (loading) {
    return (
      <main className="main">
        <Loading />
      </main>
    );
  }

  return (
    <main className="main">
      {data.map((item) => {
        const {
          id,
          image,
          price,
          rating: initial,
          title: init,
          cart,
          favorite,
        } = item;

        const newPrice = numberWithCommas(price ? price : 0);
        const oldPrice = numberWithCommas(
          price ? Math.round(price + 0.3 * price) : 0
        );
        const rating = Math.round(initial);
        const title = init ? init.slice(0, 24) + ".." : "";

        return (
          <article key={id}>
            <Link to={`/product/:` + id}>
              <div className="img-cont">
                <img src={image} alt={title} />
              </div>
            </Link>
            <div className="info-cont">
              <Link to={`/product/:` + id}>
                <h3>{title}</h3>
              </Link>
              <div className="price-cont">
                <div className="price">
                  <h4 className="new">#{newPrice}</h4>
                  <h4 className="old">#{oldPrice}</h4>
                </div>
                <div className="rating">
                  {rating}
                  <FaStar />
                </div>
              </div>
              <button onClick={() => handleCart(id)}>
                {cart ? "In Cart" : "Add to cart"}
              </button>
            </div>
            <div className="percent-cont">
              <h4>30% off</h4>
              <FaHeart
                className={favorite ? "active" : ""}
                onClick={() => handleFav(id)}
              />
            </div>
          </article>
        );
      })}
    </main>
  );
};

export default Products;
