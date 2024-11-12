import Footer from './Components/Footer'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'

import { GlobalStyle } from './styles'

function App() {
  return (
    <>
      <BrowserRouter>
        <Rotas />
        <GlobalStyle />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
