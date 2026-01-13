import './MagicModal.css';

function MagicModal({ isOpen, onClose, response }) {
  if (!isOpen) return null;

  return (
    <div
      className="magic-modal__overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="magic-modal-title"
    >
      <div
        className="magic-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="magic-modal-title" className="magic-modal__title">
          Murphy Says...
        </h2>
        <div className="magic-modal__response">
          <p className="magic-modal__response-text">{response}</p>
        </div>
        <button
          className="magic-modal__close"
          onClick={onClose}
          aria-label="Close modal"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default MagicModal;
