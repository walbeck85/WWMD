import './Hero.css';
import BoopButton from '../BoopButton/BoopButton';

function Hero({ onBoop }) {
  return (
    <section className="hero">
      <h1 className="hero__title">What Would Murphy Do?</h1>
      <div className="hero__murphy-container">
        <div className="hero__murphy-image">
          {/* Placeholder for Murphy's image */}
          <div className="hero__image-placeholder">
            Murphy Image Goes Here
          </div>
          <BoopButton onClick={onBoop} />
        </div>
      </div>
      <p className="hero__tagline">Ask Murphy for guidance</p>
    </section>
  );
}

export default Hero;
