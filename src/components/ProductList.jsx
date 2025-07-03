import ProductCard from './ProductCard';
import './css/ProductList.css';

// Data dummy, nantinya bisa diambil dari API
const trendingGames = [
  { id: 1, title: 'Cyberpunk 2077', category: 'PC / Steam', price: 'Rp 450.000', image: 'https://tse1.mm.bing.net/th/id/OIP.sRQ9OTAYkR4W-4G3Ry-dwgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: 2, title: 'Elden Ring', category: 'PlayStation 5', price: 'Rp 729.000', image: 'https://assets-prd.ignimgs.com/2021/06/12/elden-ring-button-03-1623460560664.jpg' },
  { id: 3, title: 'Valorant Points', category: 'Voucher', price: 'Mulai Rp 50.000', image: 'https://tse1.mm.bing.net/th/id/OIP.GSnO2Eie9NtsS83kIh-67QHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: 4, title: 'Baldur\'s Gate 3', category: 'PC / Steam', price: 'Rp 699.000', image: 'https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/ba706e54d68d10a0eb6ab7c36cdad9178c58b7fb7bb03d28.png' },
];

function ProductList(props) {
const { title } = props;
  return (
    <section className="product-list-section">
      <h2 className="section-title">{title}</h2>
      <div className="product-grid">
        {trendingGames.map(game => (
          <ProductCard
            key={game.id}
            title={game.title}
            category={game.category}
            price={game.price}
            image={game.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;