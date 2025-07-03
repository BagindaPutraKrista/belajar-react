import './css/Hero.css';

function Hero(props) {
const { title, description } = props;
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <button className="cta-button" onclick="window.location.href='#';">Jelajahi Sekarang</button>
      </div>
    </section>
  );
};

export default Hero;