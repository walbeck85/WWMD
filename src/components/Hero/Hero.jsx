import './Hero.css';
import BoopButton from '../BoopButton/BoopButton';
import murphyImage from '../../assets/images/murphy-hedcut.jpg';

function Hero({ onBoop }) {
  return (
    <section className="hero">
      <h1 className="hero__title">What Would Murphy Do?</h1>
      <div className="hero__murphy-container">
        <div className="hero__murphy-image">
          <button className="hero__image-button" type="button" aria-label="Boop Murphy's nose">
            <img
              src={murphyImage}
              alt="Murphy, a black Labrador Retriever, in hedcut illustration style"
              className="hero__image"
            />
          </button>
          <BoopButton onClick={onBoop} />
        </div>
      </div>
      <p className="hero__tagline">Ask Murphy for guidance</p>
    </section>
  );
}

export default Hero;
