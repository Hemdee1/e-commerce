import { useState } from "react";
import logo from "../logo.png";
import { FaShoppingBag, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { handleSearch } = useGlobalContext();

  const handleClick = () => {
    setOpenNav(!openNav);
  };

  const closeNav = () => {
    setOpenNav(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleSearch(searchValue);
    setSearchValue("");
  };

  return (
    <nav className={openNav ? "active" : ""}>
      <div className="nav-container">
        <header>
          <div className="logo-cont">
            <Link to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
          </div>
          <form className="search" onSubmit={handleSubmit}>
            <Link to="/search">
              <input
                type="text"
                placeholder="search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </Link>
          </form>
          <div className="nav-button" onClick={handleClick}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </header>
        <div className="links">
          <ul>
            <Link to="/about" onClick={closeNav}>
              <li>About</li>
            </Link>
            <Link to="/login" onClick={closeNav}>
              <li>Login</li>
            </Link>
            <Link to="/cart" onClick={closeNav}>
              <li>
                <FaShoppingBag />
              </li>
            </Link>
            <Link to="/favorite" onClick={closeNav}>
              <li>
                <FaHeart />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
