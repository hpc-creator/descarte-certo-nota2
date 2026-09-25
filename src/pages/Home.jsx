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
                ODS 2 • Fome Zero e Agricultura Sustentável
              </span>

              <h1 className="display-4 fw-bold text-success">
                Conexão ODS 2
              </h1>

              <p className="lead">
                Informação e tecnologia para aproximar pequenos produtores e
                agricultores familiares de consumidores locais, fortalecendo a
                agricultura sustentável e o acesso a alimentos frescos.
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
                    Por que fortalecer a agricultura familiar?
                  </h2>

                  <p className="mb-0">
                    Valorizar pequenos produtores contribui para ampliar o
                    acesso a alimentos frescos, fortalecer a economia local e
                    incentivar práticas de produção mais sustentáveis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informações */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">
              Como o Conexão ODS 2 pode ajudar?
            </h2>

            <p className="text-secondary">
              Informação organizada para aproximar produtores locais,
              consumidores e iniciativas sustentáveis.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <div className="fs-1 mb-3" aria-hidden="true">
                    🥬
                  </div>

                  <h3 className="h5">Conheça</h3>

                  <p className="mb-0">
                    Consulte informações sobre agricultura familiar, produção
                    sustentável e alimentos de origem local.
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

                  <h3 className="h5">Valorize</h3>

                  <p className="mb-0">
                    Conheça a importância dos pequenos produtores e da
                    agricultura familiar para a alimentação e a economia local.
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

                  <h3 className="h5">Encontre iniciativas</h3>

                  <p className="mb-0">
                    Acesse informações sobre feiras locais, hortas comunitárias
                    e outras iniciativas relacionadas à produção sustentável.
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
          <h2 className="fw-bold">
            Fortaleça a produção local
          </h2>

          <p className="lead">
            Informação e conexão também contribuem para uma alimentação mais
            sustentável.
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