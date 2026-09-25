import { useState } from 'react'

function Iniciativas() {
  const [busca, setBusca] = useState('')
  const [categoria, setCategoria] = useState('Todos')

  const [cep, setCep] = useState('')
  const [endereco, setEndereco] = useState(null)
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState('')

  /*
    DADOS DEMONSTRATIVOS

    Os produtores, contatos, produtos ofertados e condições de
    retirada/entrega abaixo são fictícios e utilizados exclusivamente
    para demonstrar as funcionalidades do protótipo acadêmico.

    As localidades utilizadas servem para contextualizar a aplicação
    no município de Codó/MA.
  */

  const produtores = [
    {
      id: 1,
      nome: 'Produtor Demonstrativo 01',
      categoria: 'Hortaliças',
      produtos: ['Alface', 'Couve', 'Cheiro-verde', 'Tomate'],
      localidade: 'Povoado Km 17',
      retirada: 'Retirada diretamente com o produtor',
      entrega: 'Consultar disponibilidade',
      contato: '(99) 9XXXX-0001',
    },
    {
      id: 2,
      nome: 'Produtora Demonstrativa 02',
      categoria: 'Frutas',
      produtos: ['Banana', 'Manga', 'Acerola', 'Caju'],
      localidade: 'Povoado Lagoa do Leme',
      retirada: 'Retirada diretamente com a produtora',
      entrega: 'Entrega sob consulta',
      contato: '(99) 9XXXX-0002',
    },
    {
      id: 3,
      nome: 'Produtor Demonstrativo 03',
      categoria: 'Raízes e Tubérculos',
      produtos: ['Mandioca', 'Macaxeira', 'Batata-doce'],
      localidade: 'Povoado Limoeiro',
      retirada: 'Retirada diretamente com o produtor',
      entrega: 'Consultar disponibilidade',
      contato: '(99) 9XXXX-0003',
    },
    {
      id: 4,
      nome: 'Produtora Demonstrativa 04',
      categoria: 'Hortaliças',
      produtos: ['Tomate', 'Pimentão', 'Cebolinha', 'Coentro'],
      localidade: 'Povoado Livramento',
      retirada: 'Retirada diretamente com a produtora',
      entrega: 'Entrega sob consulta',
      contato: '(99) 9XXXX-0004',
    },
    {
      id: 5,
      nome: 'Produtor Demonstrativo 05',
      categoria: 'Frutas',
      produtos: ['Mamão', 'Banana', 'Limão', 'Acerola'],
      localidade: 'Povoado Mata Virgem',
      retirada: 'Retirada diretamente com o produtor',
      entrega: 'Consultar disponibilidade',
      contato: '(99) 9XXXX-0005',
    },
    {
      id: 6,
      nome: 'Produtora Demonstrativa 06',
      categoria: 'Grãos e Derivados',
      produtos: ['Milho', 'Feijão', 'Farinha de mandioca'],
      localidade: 'Povoado Lagoinha',
      retirada: 'Retirada diretamente com a produtora',
      entrega: 'Entrega sob consulta',
      contato: '(99) 9XXXX-0006',
    },
    {
      id: 7,
      nome: 'Produtor Demonstrativo 07',
      categoria: 'Hortaliças',
      produtos: ['Alface', 'Couve', 'Coentro', 'Cebolinha'],
      localidade: 'São Francisco',
      retirada: 'Ponto de retirada no bairro',
      entrega: 'Consultar disponibilidade',
      contato: '(99) 9XXXX-0007',
    },
    {
      id: 8,
      nome: 'Produtora Demonstrativa 08',
      categoria: 'Alimentos Artesanais',
      produtos: ['Polpa de fruta', 'Doce caseiro', 'Farinha'],
      localidade: 'Codó Novo',
      retirada: 'Ponto de retirada no bairro',
      entrega: 'Entrega sob consulta',
      contato: '(99) 9XXXX-0008',
    },
    {
      id: 9,
      nome: 'Produtor Demonstrativo 09',
      categoria: 'Frutas',
      produtos: ['Caju', 'Manga', 'Goiaba', 'Acerola'],
      localidade: 'Nova Jerusalém',
      retirada: 'Ponto de retirada no bairro',
      entrega: 'Consultar disponibilidade',
      contato: '(99) 9XXXX-0009',
    },
    {
      id: 10,
      nome: 'Produtora Demonstrativa 10',
      categoria: 'Raízes e Tubérculos',
      produtos: ['Macaxeira', 'Batata-doce', 'Mandioca'],
      localidade: 'São Pedro',
      retirada: 'Ponto de retirada no bairro',
      entrega: 'Entrega sob consulta',
      contato: '(99) 9XXXX-0010',
    },
    {
      id: 11,
      nome: 'Produtor Demonstrativo 11',
      categoria: 'Grãos e Derivados',
      produtos: ['Feijão', 'Milho', 'Farinha'],
      localidade: 'São Francisco',
      retirada: 'Ponto de retirada no bairro',
      entrega: 'Consultar disponibilidade',
      contato: '(99) 9XXXX-0011',
    },
    {
      id: 12,
      nome: 'Produtora Demonstrativa 12',
      categoria: 'Alimentos Artesanais',
      produtos: ['Polpas', 'Doces', 'Bolos caseiros'],
      localidade: 'Codó Novo',
      retirada: 'Ponto de retirada no bairro',
      entrega: 'Entrega sob consulta',
      contato: '(99) 9XXXX-0012',
    },
  ]

  /*
    FEIRAS E PONTOS DE COMERCIALIZAÇÃO

    A estrutura abaixo demonstra como informações sobre feiras
    e pontos de comercialização podem ser armazenadas e
    renderizadas dinamicamente pela aplicação.
  */

  const feiras = [
    {
      id: 1,
      nome: 'Feira Livre de Codó',
      localidade: 'Codó/MA',
      tipo: 'Feira livre',
      produtos: [
        'Frutas',
        'Verduras',
        'Hortaliças',
        'Grãos',
        'Farinha',
        'Outros alimentos',
      ],
      observacao:
        'Ponto de comercialização de diferentes produtos no município.',
    },
    {
      id: 2,
      nome: 'Feirinha do Peixe',
      localidade: 'Codó/MA',
      tipo: 'Ponto de comercialização',
      produtos: [
        'Peixes',
        'Verduras',
        'Frutas',
        'Outros alimentos',
      ],
      observacao:
        'Espaço destinado à comercialização de produtos alimentícios.',
    },
    {
      id: 3,
      nome: 'Feira da Agricultura Familiar e Artesanato',
      localidade: 'Praça da Igreja de São Sebastião – Codó/MA',
      tipo: 'Feira periódica',
      produtos: [
        'Produtos da agricultura familiar',
        'Alimentos locais',
        'Artesanato',
      ],
      observacao:
        'Evento periódico. Consulte a programação municipal para confirmar data e horário.',
    },
    {
      id: 4,
      nome: 'Feira da Agricultura Familiar e Artesanato',
      localidade: 'Praça da Igreja de São Francisco – Codó/MA',
      tipo: 'Feira periódica',
      produtos: [
        'Produtos da agricultura familiar',
        'Alimentos locais',
        'Artesanato',
      ],
      observacao:
        'Evento periódico. Consulte a programação municipal para confirmar data e horário.',
    },
    {
      id: 5,
      nome: 'Feira da Agricultura Familiar e Artesanato',
      localidade: 'Região Central – Codó/MA',
      tipo: 'Feira periódica',
      produtos: [
        'Produtos da agricultura familiar',
        'Alimentos locais',
        'Artesanato',
      ],
      observacao:
        'Evento periódico. Consulte a programação municipal para confirmar local, data e horário.',
    },
  ]

  const categorias = [
    'Todos',
    'Hortaliças',
    'Frutas',
    'Raízes e Tubérculos',
    'Grãos e Derivados',
    'Alimentos Artesanais',
  ]

  /*
    FILTRAGEM INTERATIVA

    A busca considera nome do produtor, categoria,
    produtos e localidade.
  */

  const termoBusca = busca.toLowerCase().trim()

  const produtoresFiltrados = produtores.filter((produtor) => {
    const correspondeCategoria =
      categoria === 'Todos' || produtor.categoria === categoria

    const textoPesquisa = `
      ${produtor.nome}
      ${produtor.categoria}
      ${produtor.produtos.join(' ')}
      ${produtor.localidade}
    `.toLowerCase()

    const correspondeBusca = textoPesquisa.includes(termoBusca)

    return correspondeCategoria && correspondeBusca
  })

  /*
    CONSULTA À API VIACEP
  */

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
        throw new Error('Não foi possível consultar o CEP.')
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

  return (
    <section className="py-5">
      <div className="container">

        {/* Título */}
        <div className="text-center mb-5">
          <span className="badge text-bg-success mb-2">
            Conexão ODS 2
          </span>

          <h1 className="fw-bold text-success">
            Encontre produtores locais
          </h1>

          <p
            className="text-secondary mx-auto"
            style={{ maxWidth: '800px' }}
          >
            Consulte produtores, produtos e localidades para facilitar
            a conexão entre a agricultura familiar e os consumidores.
          </p>
        </div>

        {/* Aviso */}
        <div className="alert alert-light border mb-5">
          <strong>Protótipo acadêmico:</strong>{' '}
          os produtores, contatos, produtos ofertados e condições de
          retirada ou entrega apresentados no catálogo são dados
          demonstrativos utilizados para testar as funcionalidades
          da aplicação.
        </div>

        {/* Busca */}
        <div className="card border-0 shadow-sm mb-5">
          <div className="card-body p-4">
            <h2 className="h4 text-success mb-3">
              🔎 Buscar produtores e produtos
            </h2>

            <div className="row g-3">
              <div className="col-lg-8">
                <label
                  htmlFor="busca"
                  className="form-label"
                >
                  O que você procura?
                </label>

                <input
                  id="busca"
                  type="search"
                  className="form-control"
                  placeholder="Ex.: tomate, banana, farinha, Km 17..."
                  value={busca}
                  onChange={(event) => setBusca(event.target.value)}
                />
              </div>

              <div className="col-lg-4">
                <label
                  htmlFor="categoria"
                  className="form-label"
                >
                  Categoria
                </label>

                <select
                  id="categoria"
                  className="form-select"
                  value={categoria}
                  onChange={(event) =>
                    setCategoria(event.target.value)
                  }
                >
                  {categorias.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <p className="text-secondary small mt-3 mb-0">
              {produtoresFiltrados.length}{' '}
              {produtoresFiltrados.length === 1
                ? 'resultado encontrado'
                : 'resultados encontrados'}
            </p>
          </div>
        </div>

        {/* Catálogo */}
        <div className="mb-5">
          <h2 className="h3 fw-bold text-success mb-4">
            Produtores e produtos
          </h2>

          <div className="row g-4">
            {produtoresFiltrados.length > 0 ? (
              produtoresFiltrados.map((produtor) => (
                <div
                  className="col-md-6 col-lg-4"
                  key={produtor.id}
                >
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body p-4 d-flex flex-column">

                      <span className="badge text-bg-success align-self-start mb-3">
                        {produtor.categoria}
                      </span>

                      <h3 className="h5">
                        {produtor.nome}
                      </h3>

                      <p className="text-secondary mb-3">
                        📍 {produtor.localidade} – Codó/MA
                      </p>

                      <h4 className="h6 text-success">
                        Produtos disponíveis
                      </h4>

                      <div className="d-flex flex-wrap gap-2 mb-4">
                        {produtor.produtos.map((produto) => (
                          <span
                            className="badge text-bg-light border text-dark"
                            key={produto}
                          >
                            {produto}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto">
                        <p className="mb-2">
                          <strong>🏡 Retirada:</strong>{' '}
                          {produtor.retirada}
                        </p>

                        <p className="mb-2">
                          <strong>🚚 Entrega:</strong>{' '}
                          {produtor.entrega}
                        </p>

                        <p className="mb-0">
                          <strong>📞 Contato:</strong>{' '}
                          {produtor.contato}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <div className="alert alert-warning text-center">
                  <h3 className="h5">
                    Nenhum resultado encontrado
                  </h3>

                  <p className="mb-0">
                    Tente pesquisar outro produto,
                    categoria ou localidade.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Feiras */}
        <div className="mt-5 pt-4">
          <div className="text-center mb-5">
            <span className="badge text-bg-success mb-2">
              Comercialização local
            </span>

            <h2 className="fw-bold text-success">
              Feiras e pontos de comercialização
            </h2>

            <p
              className="text-secondary mx-auto"
              style={{ maxWidth: '800px' }}
            >
              Informações organizadas em componentes dinâmicos
              para facilitar a consulta a espaços relacionados
              à comercialização local.
            </p>
          </div>

          <div className="row g-4">
            {feiras.map((feira) => (
              <div
                className="col-md-6 col-lg-4"
                key={feira.id}
              >
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4 d-flex flex-column">

                    <span className="badge text-bg-success align-self-start mb-3">
                      {feira.tipo}
                    </span>

                    <h3 className="h5">
                      🧺 {feira.nome}
                    </h3>

                    <p className="text-secondary">
                      📍 {feira.localidade}
                    </p>

                    <h4 className="h6 text-success">
                      Produtos e atividades
                    </h4>

                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {feira.produtos.map((produto) => (
                        <span
                          className="badge text-bg-light border text-dark"
                          key={produto}
                        >
                          {produto}
                        </span>
                      ))}
                    </div>

                    <p className="small mt-auto mb-0">
                      {feira.observacao}
                    </p>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Consulta ViaCEP */}
        <div className="mt-5 pt-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5 text-center">

              <span className="badge text-bg-success mb-3">
                API externa • ViaCEP
              </span>

              <h2 className="fw-bold text-success">
                Consulte sua localidade
              </h2>

              <p
                className="text-secondary mx-auto"
                style={{ maxWidth: '700px' }}
              >
                Informe um CEP para consultar dados de localização.
                A aplicação envia a solicitação para a API ViaCEP,
                recebe os dados em formato JSON e apresenta o
                resultado na interface.
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
                  onChange={(event) =>
                    setCep(event.target.value)
                  }
                  maxLength="9"
                  aria-label="Digite o CEP"
                />

                <button
                  type="submit"
                  className="btn btn-success"
                  disabled={carregando}
                >
                  {carregando
                    ? 'Consultando...'
                    : 'Consultar CEP'}
                </button>
              </form>

              {erro && (
                <div className="alert alert-danger mt-4">
                  {erro}
                </div>
              )}

              {endereco && (
                <div className="alert alert-success mt-4 text-start">
                  <h3 className="h5 fw-bold">
                    Localidade encontrada
                  </h3>

                  <p className="mb-1">
                    <strong>CEP:</strong>{' '}
                    {endereco.cep}
                  </p>

                  <p className="mb-1">
                    <strong>Logradouro:</strong>{' '}
                    {endereco.logradouro || 'Não informado'}
                  </p>

                  <p className="mb-1">
                    <strong>Bairro:</strong>{' '}
                    {endereco.bairro || 'Não informado'}
                  </p>

                  <p className="mb-1">
                    <strong>Cidade:</strong>{' '}
                    {endereco.localidade}
                  </p>

                  <p className="mb-0">
                    <strong>Estado:</strong>{' '}
                    {endereco.uf}
                  </p>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Iniciativas