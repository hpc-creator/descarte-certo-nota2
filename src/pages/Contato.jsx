import { useState } from 'react'

function Contato() {
  const [formulario, setFormulario] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  })

  const [enviado, setEnviado] = useState(false)

  function alterarCampo(event) {
    const { name, value } = event.target

    setFormulario({
      ...formulario,
      [name]: value,
    })

    setEnviado(false)
  }

  function enviarFormulario(event) {
    event.preventDefault()

    setEnviado(true)

    setFormulario({
      nome: '',
      email: '',
      assunto: '',
      mensagem: '',
    })
  }

  return (
    <section className="py-5">
      <div className="container">

        <div className="text-center mb-5">
          <span className="badge text-bg-success mb-2">
            Fale conosco
          </span>

          <h1 className="fw-bold text-success">
            Contato
          </h1>

          <p
            className="text-secondary mx-auto"
            style={{ maxWidth: '650px' }}
          >
            Utilize o formulário para enviar uma mensagem sobre
            o projeto Descarte Certo.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">

            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">

                <h2 className="h4 text-success mb-4">
                  ✉️ Envie sua mensagem
                </h2>

                {enviado && (
                  <div
                    className="alert alert-success"
                    role="alert"
                  >
                    Mensagem registrada com sucesso!
                    Obrigado por entrar em contato com o projeto.
                  </div>
                )}

                <form onSubmit={enviarFormulario}>

                  <div className="row g-3">

                    <div className="col-md-6">
                      <label
                        htmlFor="nome"
                        className="form-label"
                      >
                        Nome
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="nome"
                        name="nome"
                        value={formulario.nome}
                        onChange={alterarCampo}
                        placeholder="Digite seu nome"
                        autoComplete="name"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label
                        htmlFor="email"
                        className="form-label"
                      >
                        E-mail
                      </label>

                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formulario.email}
                        onChange={alterarCampo}
                        placeholder="Digite seu e-mail"
                        autoComplete="email"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label
                        htmlFor="assunto"
                        className="form-label"
                      >
                        Assunto
                      </label>

                      <select
                        className="form-select"
                        id="assunto"
                        name="assunto"
                        value={formulario.assunto}
                        onChange={alterarCampo}
                        required
                      >
                        <option value="">
                          Selecione uma opção
                        </option>
                        <option value="duvida">
                          Dúvida sobre descarte
                        </option>
                        <option value="sugestao">
                          Sugestão para o projeto
                        </option>
                        <option value="informacao">
                          Solicitação de informação
                        </option>
                        <option value="outro">
                          Outro assunto
                        </option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label
                        htmlFor="mensagem"
                        className="form-label"
                      >
                        Mensagem
                      </label>

                      <textarea
                        className="form-control"
                        id="mensagem"
                        name="mensagem"
                        rows="5"
                        value={formulario.mensagem}
                        onChange={alterarCampo}
                        placeholder="Digite sua mensagem"
                        required
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-success px-4"
                      >
                        Enviar mensagem
                      </button>
                    </div>

                  </div>
                </form>

                <hr className="my-4" />

                <p className="small text-secondary mb-0">
                  Este formulário faz parte da demonstração acadêmica
                  da aplicação. As mensagens não são enviadas para
                  um serviço externo.
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