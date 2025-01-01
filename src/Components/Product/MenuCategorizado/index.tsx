/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState } from 'react'
import close from '../../../assets/images/close 1.png'

import { ListGrid, Modal, DivLink, ModalContent } from './styles'

import { abrir, add } from '../../../store/reducers/cart'
import { useDispatch } from 'react-redux'
import { useGetItemQuery } from '../../../services'

export type CardapioItem = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

type Props = {
  id: number
}

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const MenuCategorizado = ({ id }: Props) => {
  const { data, error, isLoading } = useGetItemQuery(id)
  const dispatch = useDispatch()

  const [modal, setModal] = useState(false)
  const [modalIndex, setModalIndex] = useState(0)

  if (error) {
    return <p>Nenhum item encontrado.</p>
  }

  if (isLoading) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <section>
        <div className="container">
          <ListGrid>
            {data &&
              data.cardapio.map((item, index) => (
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
        <ModalContent className="container">
          <img
            onClick={() => setModal(false)}
            className="close"
            src={close}
            alt=""
          />
          <div>
            <img
              src={data?.cardapio![modalIndex].foto}
              alt={data?.cardapio![modalIndex].nome}
            />
          </div>
          <div>
            <h3>{data?.cardapio![modalIndex].nome}</h3>
            <p>
              {data?.cardapio![modalIndex].descricao}
              <br />
              <br />
              Serve: de {data?.cardapio![modalIndex].porcao}
            </p>
            <DivLink
              onClick={() => {
                dispatch(abrir())
                dispatch(add(data!.cardapio[modalIndex]))
                setModal(false)
              }}
            >
              <span>
                Adicionar ao carrinho -{' '}
                {formataPreco(data?.cardapio![modalIndex].preco).toString()}
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
