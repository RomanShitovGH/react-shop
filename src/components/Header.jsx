export default function Header() {
  return (
    <nav className="cyan darken-3">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          React Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/RomanShitovGH/react-shop"
              target="_blank"
              rel="noreferrer"
            >
              Sass
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
