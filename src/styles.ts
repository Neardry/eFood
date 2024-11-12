import { createGlobalStyle } from 'styled-components'

export const Cores = {
  vermelho: '#E66767',
  fundoBody: '#FFF8F2',
  branco: '#FFEBD9'
}

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;

  a {
    color: ${Cores.branco};
    text-decoration: none;
    cursor: pointer;
  }

  body {
    background-color: ${Cores.fundoBody};
  }

  .container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  }
}
`
