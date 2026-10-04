import CoverImage from "../assets/illustration-mockups.svg";

const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__illustration">
        <img
          src={CoverImage}
          alt="Illustration showing community interaction mockups on desktop and mobile screens"
          className="hero__cover"
        />
      </div>
      <div className="hero__content">
        <h1 id="hero-heading" className="hero__title">Build The Community Your Fans Will Love</h1>
        <p className="hero__description">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button type="button" className="hero__cta-btn">
          Register
        </button>
      </div>
    </section>
  );
};

export default Hero;
