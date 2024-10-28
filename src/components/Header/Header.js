import "./Header.css";
// import headerImg from '../../images/header-img.png';
import bannerImg from '../../images/banner-img.webp';
import headerLogo from '../../images/header-logo.webp';

function Header() {
  return (
    <header className="Header" id="header">
      {/* <img className="header__bg-img" src={headerImg} alt="Фон сайта" /> */}
      <nav className="header__nav">
            <img className="header__logo_img" src={headerLogo} alt="Логотип" />
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a className="header__nav-item_a" href="#about">Производство</a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-item_a" href="#order">Заказать</a>
            </li>
          </ul>
      </nav>
      <div className="header__banner">
        <img className="header__banner_img" src={bannerImg} alt="Автовизитка" />  
        <div className="header__banner_buy">
          <h1 className="header__title">Парковочная автовизитка </h1>
          <a href="#order" className="header__banner_button">Заказать</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
