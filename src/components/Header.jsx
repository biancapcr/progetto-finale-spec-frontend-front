import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="topbar">
        <p>perfumes boutique</p>
      </div>

      <header className="main-header">
        <div className="logo">
          <Link to="/">
            <h1>Velour</h1>
          </Link>
        </div>

        <nav className="main-nav">
          <Link to="/">home</Link>
          <Link to="/">women</Link>
          <Link to="/">unisex</Link>
          <Link to="/compare">compare</Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
