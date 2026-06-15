import "./Header.css";

export default function Header({ logo, title }) {
    return (
        <header className="header">
            <img
                className="header__logo"
                src={logo}
                alt="Repos Documentation Logo"
            />

            <h1 className="header__title">
                {title}
            </h1>
        </header>
    );
}