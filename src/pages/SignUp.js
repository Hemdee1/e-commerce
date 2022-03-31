const LogIn = () => {
  return (
    <section className="signup">
      <h2 className="title">Sign Up</h2>
      <form>
        <h3>Enter your details below</h3>
        <div className="form-control">
          <input type="text" name="" id="" placeholder="First name" />
        </div>
        <div className="form-control">
          <input type="text" name="" id="" placeholder="Second name" />
        </div>
        <div className="form-control">
          <input type="email" name="" id="" placeholder="E-mail" />
        </div>
        <div className="form-control">
          <input type="number" name="" id="" placeholder="Phone No" />
        </div>
        <div className="btn-cont">
          <button>Sign up</button>
        </div>
      </form>
    </section>
  );
};

export default LogIn;
