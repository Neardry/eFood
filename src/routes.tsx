import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Products from './Pages/Product'

const Rotas = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos/:id" element={<Products />} />
    </Routes>
  </>
)

export default Rotas
