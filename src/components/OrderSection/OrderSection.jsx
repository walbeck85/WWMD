import './OrderSection.css';

function OrderSection() {
  const handleOrderClick = () => {
    // Will link to external Google Form
    window.open('#', '_blank');
  };

  return (
    <section className="order-section">
      <h2 className="order-section__title">Get Your Murphy Sweatshirt</h2>
      <div className="order-section__content">
        <div className="order-section__image">
          {/* Placeholder for sweatshirt image */}
          <div className="order-section__image-placeholder">
            Sweatshirt Image Goes Here
          </div>
        </div>
        <div className="order-section__details">
          <p className="order-section__description">
            Cozy up with the official What Would Murphy Do? sweatshirt.
            Perfect for those moments when you need Murphy's wisdom close to
            your heart.
          </p>
          <p className="order-section__charity">
            {/* Charity messaging placeholder */}
            A portion of proceeds goes to support local animal shelters.
          </p>
          <button
            className="order-section__cta"
            onClick={handleOrderClick}
          >
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default OrderSection;
