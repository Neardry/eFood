import { useLocation } from 'react-router-dom'

import ProductsHeader from '../../Components/Product/Header'
import Banner from '../../Components/Banner'
import Carrinho from '../../Components/Carrinho'
import MenuCategorizado from '../../Components/Product/MenuCategorizado'

const Products = () => {
  const location = useLocation()
  const { title, culture, image, id } = location.state || {}
  return (
    <>
      <Carrinho />
      <ProductsHeader />
      <Banner title={title} culture={culture} image={image} />
      <MenuCategorizado id={id} />
    </>
  )
}

export default Products
