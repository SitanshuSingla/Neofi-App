import "./Header.css";
export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <img
          height="50px"
          width="60px"
          src="https://neofi.app/static/img/brand_new.svg"
        />

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Trade
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Earn
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Support
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
          <button className="btn btn-primary wallet-button">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
}
