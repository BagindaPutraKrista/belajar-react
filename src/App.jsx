import "./App.css"
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Footer from './components/Footer';


function App() {
  return (
    <div className="site-wrapper">
      <Header title="GamerStore" />
      <main>
        <Hero 
        title="Temukan Dunia Baru di Setiap Game" 
        description="Diskon hingga 20% untuk game PC, konsol, dan voucher top-up favoritmu!" />
        
        <ProductList title="Paling Populer 🔥" />
        <ProductList title="Rilisan Terbaru 🚀" />
      </main>
      <Footer />
    </div>
  );
}

export default App