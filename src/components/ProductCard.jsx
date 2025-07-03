import './css/ProductCard.css';

function ProductCard(props) {
const { image, title, category, price } = props;
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/300x400/2a2a3e/FFF?text=Image+Error'; }} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-category">{category}</p>
        <div className="product-footer">
            <p className="product-price">{price}</p>
            <button className="buy-button">Beli</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;