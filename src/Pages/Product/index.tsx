import ProductsHeader from '../../Components/Product/Header'
import ProductsList from '../../Components/Product/Products'
import Banner from '../../Components/Product/Banner'
import MenuCategorizado from '../../Components/Product/MenuCategorizado'

import { useLocation } from 'react-router-dom'

const Products = () => {
  const location = useLocation()
  const { title, culture, image } = location.state || {}
  return (
    <>
      <ProductsHeader />
      <Banner title={title} culture={culture} image={image} />
      <MenuCategorizado />
      <ProductsList />
    </>
  )
}

export default Products
