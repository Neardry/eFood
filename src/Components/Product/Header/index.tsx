import { HeaderProduct, HeaderBackground } from './styles'

import logo from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const ProductsHeader = () => (
  <>
    <HeaderBackground>
      <div className="container">
        <HeaderProduct>
          <p>Restaurantes</p>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <p>0 produto(s) no carrinho</p>
        </HeaderProduct>
      </div>
    </HeaderBackground>
  </>
)

export default ProductsHeader
