import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* Apresentação principal */}
      <section className="bg-light py-5">
        <div className="container py-lg-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <span className="badge text-bg-success mb-3">
                Desenvolvimento Sustentável
              </span>

              <h1 className="display-4 fw-bold text-success">
                Descarte Certo
              </h1>

              <p className="lead">
                Informação e tecnologia para incentivar práticas de descarte
                consciente e contribuir para um ambiente mais sustentável.
              </p>

              <div className="d-flex flex-wrap gap-2">
                <Link
                  to="/iniciativas"
                  className="btn btn-success btn-lg"
                >
                  Conheça as iniciativas
                </Link>

                <Link
                  to="/sobre"
                  className="btn btn-outline-success btn-lg"
                >
                  Sobre o projeto
                </Link>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h2 className="h4 text-success">
                    Por que descartar corretamente?
                  </h2>

                  <p className="mb-0">
                    O descarte adequado ajuda a reduzir impactos ambientais,
                    favorece o reaproveitamento de materiais e estimula
                    atitudes mais responsáveis no dia a dia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orientações */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Como o Descarte Certo pode ajudar?</h2>
            <p className="text-secondary">
              Informação organizada para facilitar escolhas mais conscientes.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <div className="fs-1 mb-3" aria-hidden="true">
                    ♻️
                  </div>
                  <h3 className="h5">Aprenda</h3>
                  <p className="mb-0">
                    Consulte orientações sobre separação e descarte de
                    diferentes tipos de resíduos.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <div className="fs-1 mb-3" aria-hidden="true">
                    🌱
                  </div>
                  <h3 className="h5">Conscientize-se</h3>
                  <p className="mb-0">
                    Entenda como pequenas atitudes podem colaborar com a
                    preservação ambiental.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <div className="fs-1 mb-3" aria-hidden="true">
                    📍
                  </div>
                  <h3 className="h5">Encontre informações</h3>
                  <p className="mb-0">
                    Acesse iniciativas e recursos relacionados ao descarte
                    consciente em uma interface simples e organizada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chamada final */}
      <section className="bg-success text-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold">Faça parte dessa mudança</h2>

          <p className="lead">
            Informação é o primeiro passo para transformar hábitos.
          </p>

          <Link to="/iniciativas" className="btn btn-light btn-lg">
            Ver iniciativas
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home