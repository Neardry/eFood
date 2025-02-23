import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { HeaderProduct, HeaderBackground } from './styles'

import logo from '../../../assets/images/logo.png'

import { open } from '../../../store/reducers/cart'
import { RootReducer } from '../../../store'

const ProductsHeader = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  return (
    <>
      <HeaderBackground>
        <div className="container">
          <HeaderProduct>
            <p>Restaurantes</p>
            <Link to="/">
              <img src={logo} alt="Logo eFood" />
            </Link>
            <p onClick={() => dispatch(open())}>
              {items.length} produto(s) no carrinho
            </p>
          </HeaderProduct>
        </div>
      </HeaderBackground>
    </>
  )
}

export default ProductsHeader
