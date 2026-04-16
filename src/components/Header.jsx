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
          <h1>Velour</h1>
        </div>

        <nav className="main-nav">
          <a href="#">home</a>
          <a href="#">women</a>
          <a href="#">unisex</a>
          <a href="#">brands</a>
        </nav>
      </header>
    </>
  );
}

export default Header;
