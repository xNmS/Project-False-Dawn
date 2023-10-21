import hades from "./assets/hades.png";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src={hades}
              alt="logo"
              className="d-inline-block align-text-top me-2"
              height="30"
            />
            Project False Dawn
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="vertical-divider"></div>
            <span className="navbar-brand">Life Insurance</span>
          </div>
          <button type="button" className="btn btn-light">
            My Account
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
