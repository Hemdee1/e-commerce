import { FaStar, FaHeart } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const Favorite = () => {
  const { numberWithCommas, handleCart, handleFav, search } =
    useGlobalContext();

  if (search.length < 1) {
    return (
      <section className="product">
        <h4>No product to shown!</h4>
      </section>
    );
  }

  return (
    <section className="favorite">
      <h2 className="title">Search Products</h2>
      <main className="favorite">
        {search.map((item) => {
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
                <button
                  onClick={() => {
                    handleCart(id);
                    console.log(id);
                  }}
                >
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
    </section>
  );
};

export default Favorite;
