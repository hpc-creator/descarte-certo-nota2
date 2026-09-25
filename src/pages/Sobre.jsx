function Sobre() {
  return (
    <section className="py-5">
      <div className="container">

        <div className="text-center mb-5">
          <span className="badge text-bg-success mb-2">
            Sobre o projeto
          </span>

          <h1 className="fw-bold text-success">
            Descarte Certo
          </h1>

          <p className="text-secondary mx-auto" style={{ maxWidth: '700px' }}>
            Uma aplicação web desenvolvida para reunir informações e
            orientações que contribuam para práticas mais conscientes
            de descarte de resíduos.
          </p>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <h2 className="h4 text-success">
                  🌎 O problema
                </h2>

                <p className="mb-0">
                  O descarte inadequado de resíduos pode causar impactos
                  ambientais e dificultar o reaproveitamento de materiais.
                  Além disso, muitas pessoas ainda possuem dúvidas sobre
                  como separar e destinar corretamente diferentes tipos
                  de resíduos.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <h2 className="h4 text-success">
                  🎯 Nosso objetivo
                </h2>

                <p className="mb-0">
                  O Descarte Certo busca utilizar a tecnologia como meio
                  de acesso à informação, apresentando orientações simples
                  sobre separação e descarte de resíduos e incentivando
                  atitudes mais responsáveis no cotidiano.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 p-md-5 bg-light rounded mb-5">
          <div className="row align-items-center g-4">
            <div className="col-md-8">
              <span className="badge text-bg-success mb-2">
                Sustentabilidade
              </span>

              <h2 className="h3 text-success">
                Tecnologia e responsabilidade ambiental
              </h2>

              <p className="mb-0">
                A proposta relaciona desenvolvimento web e conscientização
                ambiental. Por meio de uma interface simples e organizada,
                o usuário pode consultar orientações sobre diferentes tipos
                de resíduos e utilizar recursos que auxiliam na identificação
                de sua localidade.
              </p>
            </div>

            <div className="col-md-4 text-center">
              <div className="display-1">
                ♻️
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-4">
          <h2 className="h3 fw-bold">
            Tecnologias utilizadas
          </h2>

          <p className="text-secondary">
            Recursos empregados no desenvolvimento da aplicação.
          </p>
        </div>

        <div className="row g-3 text-center mb-5">
          <div className="col-6 col-md-3">
            <div className="border rounded p-3 h-100">
              <div className="fs-2">⚛️</div>
              <strong>React</strong>
              <p className="small text-secondary mb-0">
                Componentes e interface
              </p>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="border rounded p-3 h-100">
              <div className="fs-2">🎨</div>
              <strong>Bootstrap</strong>
              <p className="small text-secondary mb-0">
                Estilo e responsividade
              </p>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="border rounded p-3 h-100">
              <div className="fs-2">🧭</div>
              <strong>React Router</strong>
              <p className="small text-secondary mb-0">
                Navegação entre páginas
              </p>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="border rounded p-3 h-100">
              <div className="fs-2">🔗</div>
              <strong>API externa</strong>
              <p className="small text-secondary mb-0">
                Consulta de localização
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="h4 text-success">
            Desenvolvimento sustentável
          </h2>

          <p className="mx-auto mb-0" style={{ maxWidth: '750px' }}>
            O projeto busca contribuir para a conscientização sobre consumo,
            descarte e reaproveitamento de materiais, aproximando conhecimentos
            de desenvolvimento web de uma necessidade presente no cotidiano.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Sobre