import {
  CartContainer,
  Overlay,
  Container,
  ContainerGrid,
  CartItems,
  CartItem,
  KeepDelivery
} from './styles'
import lixeira from '../../../assets/images/lixeira-de-reciclagem.png'

import { RootReducer } from '../../../store'

import { useDispatch, useSelector } from 'react-redux'
import { fechar, remove } from '../../../store/reducers/cart'

const Carrinho = () => {
  const isOpen = useSelector((state: RootReducer) => state.carrinho.value)
  const cartItems = useSelector((state: RootReducer) => state.carrinho.items)
  const dispatch = useDispatch()

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'decimal',
      currency: 'BRL'
    }).format(preco)
  }

  if (cartItems.length == 0) {
    return <></>
  }

  return (
    <Container className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={() => dispatch(fechar())} />
      <CartContainer>
        <ContainerGrid>
          <CartItems>
            {cartItems.map((item) => (
              <CartItem key={item.id}>
                <img src={item.foto} alt={item.nome} />

                <div>
                  <h4>{item.nome}</h4>
                  <p>R$ {item.preco}</p>
                  <img
                    onClick={() => dispatch(remove(item.id))}
                    className="lixeira"
                    src={lixeira}
                    alt="lixeira"
                  />
                </div>
              </CartItem>
            ))}
            <div className="flex">
              <p>Valor total</p>
              <p>
                R${' '}
                {formataPreco(
                  cartItems.reduce((acumulator, current) => {
                    return (acumulator += current.preco)
                  }, 0)
                )}
              </p>
            </div>
            <KeepDelivery>Continuar com a entrega</KeepDelivery>
          </CartItems>
        </ContainerGrid>
      </CartContainer>
    </Container>
  )
}

export default Carrinho
