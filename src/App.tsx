import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Rotas from './routes'

import { GlobalStyle } from './styles'

import Footer from './Components/Footer'

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
