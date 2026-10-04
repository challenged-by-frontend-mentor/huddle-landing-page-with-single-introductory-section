import CoverImage from "../assets/illustration-mockups.svg";

const Hero = () => {
  return (
    <section className="hero">
      <img src={CoverImage} alt="" className="hero__cover" aria-hidden="true" />
      <div className="hero__content">
        <h1 className="hero__title">Build The Community </h1>
        <p className="hero__description">
          Your Fans Will Love Huddle re-imagines the way we build communities.
          You have a voice, but so does your audience. Create connections with
          your users as you engage in genuine discussion.
        </p>
        <button type="button" className="hero__cta-btn">
          Register
        </button>
      </div>
    </section>
  );
};

export default Hero;
