import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {/* barra superiore informativa */}
      <div className="topbar">
        <p>perfumes boutique</p>
      </div>

      {/* intestazione principale */}
      <header className="main-header">
        <div className="logo">
          {/* cliccando il logo torni alla home */}
          <Link to="/">
            <h1>Velour</h1>
          </Link>
        </div>

        <nav className="main-nav">
          {/* link gestiti da react router */}
          <Link to="/">home</Link>
          <Link to="/">women</Link>
          <Link to="/">unisex</Link>
          <Link to="/">brands</Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
