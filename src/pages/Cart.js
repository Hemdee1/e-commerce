import { useEffect, useState } from "react";
import { FaMinusCircle, FaPlusCircle, FaMinusSquare } from "react-icons/fa";
import { useGlobalContext } from "../context";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

const Cart = () => {
  const { data, setData, numberWithCommas } = useGlobalContext();

  const [loading, setLoading] = useState(true);
  const [carts, setCarts] = useState([]);

  const removeCart = (id) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          return { ...item, cart: false };
        }
        return item;
      })
    );
  };

  const handleChange = (id, option) => {
    if (option === "inc") {
      setCarts(
        carts.map((item) => {
          if (item.id === id) {
            return { ...item, amount: item.amount + 1 };
          }
          return item;
        })
      );
    }

    if (option === "dec") {
      setCarts(
        carts.map((item) => {
          if (item.id === id && item.amount <= 1) {
            return item;
          }
          if (item.id === id) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
      );
    }
  };

  const allTotalPrice = numberWithCommas(
    carts.reduce((total, cart) => {
      total += cart.price * cart.amount;
      return total;
    }, 0)
  );

  useEffect(() => {
    setTimeout(() => {
      setCarts(data.filter((item) => item.cart === true));
      setLoading(false);
    }, 1000);
  }, [data]);

  if (loading) {
    return (
      <section className="product">
        <Loading />
      </section>
    );
  }

  if (carts.length < 1) {
    return (
      <section className="product">
        <h4>Your cart is empty</h4>
      </section>
    );
  }

  return (
    <section className="cart">
      <h2 className="title">My cart</h2>
      {carts.map((item) => {
        const { id, image, price, title: init, amount } = item;

        const title = init ? init.slice(0, 30) + ".." : "";
        const totalPrice = numberWithCommas(price ? price * amount : 0);

        return (
          <article key={id}>
            <FaMinusSquare
              className="rem-icon"
              onClick={() => removeCart(id)}
            />
            <Link to={`/product/:` + id}>
              <img src={image} alt="" />
            </Link>
            <div className="box">
              <h3>{title}</h3>
              <div className="content">
                <div className="btn">
                  <FaMinusCircle onClick={() => handleChange(id, "dec")} />
                  <span>{amount}</span>
                  <FaPlusCircle onClick={() => handleChange(id, "inc")} />
                </div>
                <div className="price">
                  <h3>#{totalPrice}</h3>
                </div>
              </div>
            </div>
          </article>
        );
      })}
      <h3 className="total">
        Total : <span>#{allTotalPrice}</span>
      </h3>
      <div className="btn-cont">
        <button>checkout</button>
        <button onClick={() => setCarts([])}>clear cart</button>
      </div>
    </section>
  );
};

export default Cart;
