import Footer from './Components/Footer'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'

import store from './store'
import { Provider } from 'react-redux'

import { GlobalStyle } from './styles'

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Rotas />
          <GlobalStyle />
          <Footer />
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App
