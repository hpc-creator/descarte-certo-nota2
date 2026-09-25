import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <NavLink className="navbar-brand fw-bold" to="/">
            ♻ Descarte Certo
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuPrincipal"
            aria-controls="menuPrincipal"
            aria-expanded="false"
            aria-label="Abrir menu de navegação"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="menuPrincipal"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Início
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/sobre">
                  Sobre
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/iniciativas">
                  Iniciativas
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contato">
                  Contato
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header