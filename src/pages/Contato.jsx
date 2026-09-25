import { useState } from 'react'

function Contato() {
  const [formulario, setFormulario] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipo: '',
    assunto: '',
    mensagem: '',
  })

  const [enviado, setEnviado] = useState(false)
  const [erro, setErro] = useState('')

  function alterarCampo(event) {
    const { name, value } = event.target

    setFormulario({
      ...formulario,
      [name]: value,
    })

    setEnviado(false)
    setErro('')
  }

  function enviarFormulario(event) {
    event.preventDefault()

    if (
      !formulario.nome.trim() ||
      !formulario.email.trim() ||
      !formulario.tipo ||
      !formulario.assunto.trim() ||
      !formulario.mensagem.trim()
    ) {
      setErro(
        'Preencha todos os campos obrigatórios antes de enviar.'
      )
      setEnviado(false)
      return
    }

    if (!formulario.email.includes('@')) {
      setErro('Informe um endereço de e-mail válido.')
      setEnviado(false)
      return
    }

    setErro('')
    setEnviado(true)

    setFormulario({
      nome: '',
      email: '',
      telefone: '',
      tipo: '',
      assunto: '',
      mensagem: '',
    })
  }

  return (
    <section className="py-5">
      <div className="container">

        {/* Apresentação */}
        <div className="text-center mb-5">
          <span className="badge text-bg-success mb-2">
            Conexão ODS 2
          </span>

          <h1 className="fw-bold text-success">
            Contato e parcerias
          </h1>

          <p
            className="text-secondary mx-auto"
            style={{ maxWidth: '750px' }}
          >
            Este espaço demonstra como consumidores, produtores,
            organizações e possíveis parceiros podem entrar em
            contato com o projeto.
          </p>
        </div>

        <div className="row g-4">

          {/* Informações */}
          <div className="col-lg-5">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">

                <h2 className="h4 text-success mb-4">
                  🌱 Participe do Conexão ODS 2
                </h2>

                <p>
                  O projeto busca aproximar consumidores,
                  agricultores familiares e iniciativas relacionadas
                  à produção sustentável.
                </p>

                <hr />

                <h3 className="h6 text-success">
                  👨‍🌾 Sou produtor
                </h3>

                <p className="small text-secondary">
                  Utilize o formulário para demonstrar interesse
                  em participar do catálogo de produtores.
                </p>

                <h3 className="h6 text-success">
                  🤝 Quero propor uma parceria
                </h3>

                <p className="small text-secondary">
                  Instituições, associações e iniciativas locais
                  podem utilizar este espaço para demonstrar
                  interesse em futuras parcerias.
                </p>

                <h3 className="h6 text-success">
                  💬 Sou consumidor
                </h3>

                <p className="small text-secondary mb-0">
                  Envie dúvidas, sugestões ou informações
                  relacionadas ao projeto.
                </p>

              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">

                <h2 className="h4 text-success mb-4">
                  Envie uma mensagem
                </h2>

                {enviado && (
                  <div
                    className="alert alert-success"
                    role="alert"
                  >
                    <strong>Mensagem registrada com sucesso!</strong>
                    <br />
                    Os dados foram processados pelo formulário
                    demonstrativo da aplicação.
                  </div>
                )}

                {erro && (
                  <div
                    className="alert alert-danger"
                    role="alert"
                  >
                    {erro}
                  </div>
                )}

                <form onSubmit={enviarFormulario}>

                  <div className="mb-3">
                    <label
                      htmlFor="nome"
                      className="form-label"
                    >
                      Nome *
                    </label>

                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      className="form-control"
                      value={formulario.nome}
                      onChange={alterarCampo}
                      placeholder="Digite seu nome"
                    />
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label
                        htmlFor="email"
                        className="form-label"
                      >
                        E-mail *
                      </label>

                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={formulario.email}
                        onChange={alterarCampo}
                        placeholder="seuemail@exemplo.com"
                      />
                    </div>

                    <div className="col-md-6">
                      <label
                        htmlFor="telefone"
                        className="form-label"
                      >
                        Telefone
                      </label>

                      <input
                        type="text"
                        id="telefone"
                        name="telefone"
                        className="form-control"
                        value={formulario.telefone}
                        onChange={alterarCampo}
                        placeholder="(99) 9XXXX-XXXX"
                      />
                    </div>
                  </div>

                  <div className="mb-3 mt-3">
                    <label
                      htmlFor="tipo"
                      className="form-label"
                    >
                      Tipo de contato *
                    </label>

                    <select
                      id="tipo"
                      name="tipo"
                      className="form-select"
                      value={formulario.tipo}
                      onChange={alterarCampo}
                    >
                      <option value="">
                        Selecione uma opção
                      </option>

                      <option value="consumidor">
                        Consumidor / Dúvida
                      </option>

                      <option value="produtor">
                        Produtor interessado em participar
                      </option>

                      <option value="parceria">
                        Proposta de parceria
                      </option>

                      <option value="sugestao">
                        Sugestão
                      </option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="assunto"
                      className="form-label"
                    >
                      Assunto *
                    </label>

                    <input
                      type="text"
                      id="assunto"
                      name="assunto"
                      className="form-control"
                      value={formulario.assunto}
                      onChange={alterarCampo}
                      placeholder="Informe o assunto"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="mensagem"
                      className="form-label"
                    >
                      Mensagem *
                    </label>

                    <textarea
                      id="mensagem"
                      name="mensagem"
                      className="form-control"
                      rows="5"
                      value={formulario.mensagem}
                      onChange={alterarCampo}
                      placeholder="Digite sua mensagem"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-success w-100"
                  >
                    Enviar mensagem
                  </button>

                </form>

                <p className="small text-secondary mt-3 mb-0">
                  * Protótipo acadêmico: o formulário demonstra
                  validação, gerenciamento de estado e tratamento
                  de eventos no React. As mensagens não são
                  encaminhadas para um serviço externo.
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contato