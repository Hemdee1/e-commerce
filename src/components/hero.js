import hero from "../hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <img src={hero} alt="" className="hero-img" />
      </div>
      <div className="hero-text">
        <h4>
          Welcome to our online retail shop, we offer plenties of top notch
          materials that will fit your liking. <br /> Explore below.
        </h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
          reiciendis.
        </p>
        <button>Explore</button>
      </div>
    </section>
  );
};

export default Hero;
