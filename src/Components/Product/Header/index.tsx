import { HeaderProduct, HeaderBackground } from './styles'

import logo from '../../../images/logo.png'

const ProductsHeader = () => (
  <>
    <HeaderBackground>
      <div className="container">
        <HeaderProduct>
          <p>Restaurantes</p>
          <img src={logo} alt="" />
          <p>0 produto(s) no carrinho</p>
        </HeaderProduct>
      </div>
    </HeaderBackground>
  </>
)

export default ProductsHeader
