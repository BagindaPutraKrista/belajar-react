import './css/Header.css';

function Header(props) { // 'props' adalah objek yang berisi semua data yang dikirim
const { title } = props;
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="logo">
          <a href="/">{title}</a>
        </div>
        <nav className="main-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#games">Games</a></li>
            <li><a href="#topup">Top Up</a></li>
            <li><a href="#vouchers">Vouchers</a></li>
          </ul>
        </nav>
        <div className="header-right">
          <div className="search-bar">
            <input type="text" placeholder="Cari game..." />
          </div>
          <div className="user-actions">
            <a href="#cart" className="action-icon">
              <span>Cart</span>
            </a>
            <a href="#login" className="action-icon">
              <span>Login</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;