import './BoopButton.css';

function BoopButton({ onClick }) {
  return (
    <button
      className="boop-button"
      onClick={onClick}
      aria-label="Boop Murphy's snoot"
    >
      <span className="boop-button__hidden-text">Boop</span>
    </button>
  );
}

export default BoopButton;
