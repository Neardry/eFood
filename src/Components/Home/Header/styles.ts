import styled from 'styled-components'
import { breakPoints, Cores } from '../../../styles'

import Hero from '../../../assets/images/Hero.png'

export const HeaderStyled = styled.header`
  color: ${Cores.vermelho};
  background-image: url(${Hero});
  height: 384px;

  @media (max-width: ${breakPoints.tablet}) {
    width: 100%;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-width: 125px;
    margin-bottom: 138px;
    margin-top: 54px;
  }
  h1 {
    max-width: 540px;
    text-align: center;
    font-size: 36px;
    font-weight: bold;
  }
`
