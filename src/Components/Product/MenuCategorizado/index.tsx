import { useState } from 'react'
import close from '../../../assets/images/close 1.png'

import { ListGrid, Modal, DivLink, ModalContent } from './styles'

type CardapioItem = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

type Props = {
  cardapio: CardapioItem[]
}

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const MenuCategorizado = ({ cardapio }: Props) => {
  const [modal, setModal] = useState(false)
  const [modalIndex, setModalIndex] = useState(0)

  if (!cardapio || cardapio.length === 0) {
    return <p>Nenhum item encontrado.</p>
  }

  return (
    <>
      <section>
        <div className="container">
          <ListGrid>
            {cardapio.map((item, index) => (
              <li key={item.id}>
                <img src={item.foto} alt={item.nome} />

                <h4>{item.nome}</h4>
                <p>{item.descricao.slice(0, 132) + '...'}</p>
                <DivLink
                  onClick={() => {
                    setModal(true)
                    setModalIndex(index)
                  }}
                >
                  <span>Mais detalhes</span>
                </DivLink>
              </li>
            ))}
          </ListGrid>
        </div>
      </section>
      <Modal className={modal ? 'visivel' : ''}>
        <ModalContent onClick={() => setModal(false)} className="container">
          <img className="close" src={close} alt="" />
          <div>
            <img
              src={cardapio[modalIndex].foto}
              alt={cardapio[modalIndex].nome}
            />
          </div>
          <div>
            <h3>{cardapio[modalIndex].nome}</h3>
            <p>
              {cardapio[modalIndex].descricao}
              <br />
              <br />
              Serve: de {cardapio[modalIndex].porcao}
            </p>
            <DivLink>
              <span>
                Adicionar ao carrinho -{' '}
                {formataPreco(cardapio[modalIndex].preco).toString()}
              </span>
            </DivLink>
          </div>
        </ModalContent>
        <div onClick={() => setModal(false)} className="overlay"></div>
      </Modal>
    </>
  )
}

export default MenuCategorizado
