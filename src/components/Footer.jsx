import './css/Footer.css';

function Footer() {
  return (
    <footer className="app-footer">
        <div className="footer-container">
            <div className="footer-column about">
                <h4>GAMERSTORE</h4>
                <p>Platform top up dan pembelian game digital terpercaya di Indonesia. Transaksi aman, cepat, dan mudah.</p>
            </div>
            <div className="footer-column">
                <h4>Bantuan</h4>
                <ul>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#contact">Hubungi Kami</a></li>
                    <li><a href="#terms">Syarat & Ketentuan</a></li>
                    <li><a href="#privacy">Kebijakan Privasi</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Kategori</h4>
                <ul>
                    <li><a href="#games">Games</a></li>
                    <li><a href="#topup">Top Up</a></li>
                    <li><a href="#vouchers">Vouchers</a></li>
                    <li><a href="#promo">Promo</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Ikuti Kami</h4>
                <div className="social-links">
                    <a href="#facebook">Facebook</a>
                    <a href="#instagram">Instagram</a>
                    <a href="#youtube">Youtube</a>
                    <a href="#tiktok">TikTok</a>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2025 GamerStore. All Rights ~not~ Reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;