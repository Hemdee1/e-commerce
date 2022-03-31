import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error">
      <h2 className="title">Error</h2>
      <p>Oops!!! The page you're looking for doesn't exist.</p>
      <Link to="/">
        <button>go back home</button>
      </Link>
    </section>
  );
};

export default Error;
