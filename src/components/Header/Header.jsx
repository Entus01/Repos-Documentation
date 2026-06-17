import "./Header.css";

export default function Header({ logo, title, subtitle }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Repos Documentation Logo" />

      <div className="header__branding">
        <h1 className="header__title">{title}</h1>

        <p className="header__subtitle">{subtitle}</p>
      </div>
    </header>
  );
}
