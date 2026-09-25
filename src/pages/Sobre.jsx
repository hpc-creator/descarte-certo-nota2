function Sobre() {
  return (
    <section className="py-5">
      <div className="container">

        <div className="text-center mb-5">
          <span className="badge text-bg-success mb-2">
            Sobre o projeto
          </span>

          <h1 className="fw-bold text-success">
            Conexão ODS 2
          </h1>

          <p className="text-secondary mx-auto" style={{ maxWidth: '700px' }}>
            Uma aplicação web desenvolvida para aproximar pequenos produtores
            e agricultores familiares de consumidores locais, promovendo
            informação, agricultura sustentável e segurança alimentar.
          </p>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <h2 className="h4 text-success">
                  🌾 O problema
                </h2>

                <p className="mb-0">
                  Pequenos produtores e agricultores familiares enfrentam
                  dificuldades para divulgar seus produtos e iniciativas.
                  Ao mesmo tempo, consumidores locais nem sempre encontram
                  informações acessíveis sobre feiras, produção sustentável
                  e canais de comercialização direta.
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
                  O Conexão ODS 2 utiliza a tecnologia como meio de acesso
                  à informação, criando uma ponte digital entre produtores
                  locais, consumidores e iniciativas relacionadas à
                  agricultura sustentável e à segurança alimentar.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 p-md-5 bg-light rounded mb-5">
          <div className="row align-items-center g-4">
            <div className="col-md-8">
              <span className="badge text-bg-success mb-2">
                ODS 2
              </span>

              <h2 className="h3 text-success">
                Fome Zero e Agricultura Sustentável
              </h2>

              <p className="mb-0">
                A proposta relaciona desenvolvimento web e sustentabilidade,
                contribuindo para a divulgação da agricultura familiar,
                de iniciativas locais e de informações que aproximem
                produtores e consumidores interessados em alimentos frescos
                e de origem local.
              </p>
            </div>

            <div className="col-md-4 text-center">
              <div className="display-1">
                🌱
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
            Tecnologia a serviço do ODS 2
          </h2>

          <p className="mx-auto mb-0" style={{ maxWidth: '750px' }}>
            O projeto busca utilizar recursos de desenvolvimento web para
            ampliar o acesso à informação, valorizar a agricultura familiar
            e aproximar consumidores de produtores e iniciativas sustentáveis
            presentes em suas comunidades.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Sobre