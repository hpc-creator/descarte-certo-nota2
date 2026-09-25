import { useState } from 'react'

function Iniciativas() {
  const [tipoSelecionado, setTipoSelecionado] = useState('')

const [cep, setCep] = useState('')
const [endereco, setEndereco] = useState(null)
const [carregando, setCarregando] = useState(false)
const [erro, setErro] = useState('')

async function buscarCep(event) {
  event.preventDefault()

  const cepLimpo = cep.replace(/\D/g, '')

  if (cepLimpo.length !== 8) {
    setErro('Digite um CEP válido com 8 números.')
    setEndereco(null)
    return
  }

  try {
    setCarregando(true)
    setErro('')
    setEndereco(null)

    const resposta = await fetch(
      `https://viacep.com.br/ws/${cepLimpo}/json/`
    )

    if (!resposta.ok) {
      throw new Error('Erro ao consultar o CEP.')
    }

    const dados = await resposta.json()

    if (dados.erro) {
      throw new Error('CEP não encontrado.')
    }

    setEndereco(dados)
  } catch (error) {
    setErro(error.message)
    setEndereco(null)
  } finally {
    setCarregando(false)
  }
}

  const residuos = [
    {
      id: 'papel',
      nome: 'Papel',
      icone: '📄',
      orientacao:
        'Separe papéis limpos e secos. Evite misturá-los com restos de alimentos ou materiais engordurados.',
    },
    {
      id: 'plastico',
      nome: 'Plástico',
      icone: '🥤',
      orientacao:
        'Esvazie as embalagens e, quando possível, faça uma limpeza simples antes de encaminhá-las para reciclagem.',
    },
    {
      id: 'vidro',
      nome: 'Vidro',
      icone: '🍶',
      orientacao:
        'Separe recipientes de vidro e tenha cuidado com materiais quebrados. Proteja partes cortantes antes do descarte.',
    },
    {
      id: 'metal',
      nome: 'Metal',
      icone: '🥫',
      orientacao:
        'Latas e outros materiais metálicos recicláveis devem ser separados dos resíduos orgânicos.',
    },
    {
      id: 'eletronico',
      nome: 'Eletrônicos',
      icone: '🔌',
      orientacao:
        'Equipamentos eletrônicos não devem ser descartados no lixo comum. Procure pontos de coleta ou logística reversa.',
    },
    {
      id: 'organico',
      nome: 'Orgânico',
      icone: '🍃',
      orientacao:
        'Restos de alimentos e outros resíduos orgânicos devem ser separados dos materiais recicláveis.',
    },
  ]

  const selecionado = residuos.find(
    (residuo) => residuo.id === tipoSelecionado,
  )

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge text-bg-success mb-2">
            Guia interativo
          </span>

          <h1 className="fw-bold text-success">
            Como descartar?
          </h1>

          <p className="text-secondary">
            Selecione um tipo de resíduo para consultar uma orientação.
          </p>
        </div>

        <div className="row g-3 justify-content-center">
          {residuos.map((residuo) => (
            <div className="col-6 col-md-4 col-lg-2" key={residuo.id}>
              <button
                type="button"
                className={`btn w-100 h-100 p-3 ${
                  tipoSelecionado === residuo.id
                    ? 'btn-success'
                    : 'btn-outline-success'
                }`}
                onClick={() => setTipoSelecionado(residuo.id)}
              >
                <span
                  className="d-block fs-2 mb-2"
                  aria-hidden="true"
                >
                  {residuo.icone}
                </span>

                {residuo.nome}
              </button>
            </div>
          ))}
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-lg-8">
            {selecionado ? (
              <div
                className="alert alert-success shadow-sm"
                role="status"
              >
                <h2 className="h4">
                  {selecionado.icone} {selecionado.nome}
                </h2>

                <p className="mb-0">
                  {selecionado.orientacao}
                </p>
              </div>
            ) : (
              <div className="alert alert-light border text-center">
                Escolha uma das opções acima para visualizar a
                orientação de descarte.
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Consulta de CEP */}
<div className="container mt-5">
  <div className="card shadow-sm border-0">
    <div className="card-body p-4 text-center">

      <span className="badge text-bg-success mb-3">
        Consulta externa
      </span>

      <h2 className="fw-bold text-success">
        Consulte sua localidade
      </h2>

      <p className="text-muted">
      Informe seu CEP para identificar sua cidade e auxiliar na busca
      por informações de coleta e descarte na sua região.
      </p>

      <form
        onSubmit={buscarCep}
        className="d-flex gap-2 justify-content-center flex-wrap mt-4"
      >
        <input
          type="text"
          className="form-control"
          style={{ maxWidth: '300px' }}
          placeholder="Digite o CEP"
          value={cep}
          onChange={(event) => setCep(event.target.value)}
          maxLength="9"
        />

        <button
          type="submit"
          className="btn btn-success"
          disabled={carregando}
        >
          {carregando ? 'Consultando...' : 'Consultar CEP'}
        </button>
      </form>

      {erro && (
        <div className="alert alert-danger mt-3">
          {erro}
        </div>
      )}

      {endereco && (
        <div className="alert alert-success mt-4 text-start">
          <h5 className="fw-bold">Localidade encontrada</h5>
          <p className="mb-1">
            <strong>Logradouro:</strong> {endereco.logradouro || 'Não informado'}
          </p>
          <p className="mb-1">
            <strong>Bairro:</strong> {endereco.bairro || 'Não informado'}
          </p>
          <p className="mb-1">
            <strong>Cidade:</strong> {endereco.localidade}
          </p>
          <p className="mb-0">
            <strong>Estado:</strong> {endereco.uf}
          </p>
        </div>
      )}

    </div>
  </div>
</div>
    </section>
  )
}

export default Iniciativas