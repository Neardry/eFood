import { useState } from 'react'
import { open, add } from '../../../store/reducers/cart'
import { useDispatch } from 'react-redux'
import { useGetItemQuery } from '../../../services'

import { ListGrid, Modal, ModalContent } from './styles'

import { Button } from '../../Button'
import { priceFormat } from '../../../utils'

import close from '../../../assets/images/close 1.png'

export type ItemMenu = {
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
                  <Button
                    title="Mais detalhes"
                    type="button"
                    onClick={() => {
                      setModal(true)
                      setModalIndex(index)
                    }}
                  >
                    <>Mais detalhes</>
                  </Button>
                </li>
              ))}
          </ListGrid>
        </div>
      </section>
      {data && (
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
                src={data.cardapio[modalIndex].foto}
                alt={data.cardapio[modalIndex].nome}
              />
            </div>
            <div>
              <h3>{data.cardapio[modalIndex].nome}</h3>
              <p>
                {data.cardapio[modalIndex].descricao}
                <br />
                <br />
                Serve: de {data.cardapio[modalIndex].porcao}
              </p>
              <Button
                maxWidthProps={true}
                type="button"
                title="Adicionar"
                onClick={() => {
                  dispatch(open())
                  dispatch(add(data.cardapio[modalIndex]))
                  setModal(false)
                }}
              >
                <>
                  Adicionar ao carrinho -{' '}
                  <span>
                    {' '}
                    {priceFormat(data.cardapio[modalIndex].preco).toString()}
                  </span>
                </>
              </Button>
            </div>
          </ModalContent>
          <div onClick={() => setModal(false)} className="overlay"></div>
        </Modal>
      )}
    </>
  )
}

export default MenuCategorizado
