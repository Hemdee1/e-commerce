import { AiFillGoogleCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <section className="signup">
      <h2 className="title">Log In</h2>
      <form>
        <h3>Enter your details below</h3>
        <div className="form-control">
          <input type="email" name="" id="" placeholder="E-mail" />
        </div>
        <div className="form-control">
          <input type="password" name="" id="" placeholder="Password" />
        </div>
        <div className="btn-cont">
          <button>Log In</button>
        </div>
      </form>
      <h4>
        Dont have an account yet, Sign up <Link to="/signup">here</Link>
      </h4>
      <button className="g-btn">
        Sign up with Google <AiFillGoogleCircle />
      </button>
    </section>
  );
};

export default LogIn;
