import styled from 'styled-components'
import { Cores } from '../../styles'

export const FooterStyled = styled.footer`
  background-color: ${Cores.branco};
  height: 300px;
  color: ${Cores.vermelho};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  div {
    margin-top: 34px;
    img {
      margin-right: 8px;
    }
  }

  p {
    width: 480px;
    font-size: 10px;
    margin-top: 80px;
  }
`
