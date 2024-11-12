import styled from 'styled-components'
import { Cores } from '../../../styles'

import Hero from '../../../images/Hero.png'

export const HeaderBackground = styled.header`
  color: ${Cores.vermelho};
  background-image: url(${Hero});
`

export const HeaderProduct = styled.div`
  font-size: 18px;
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 124px;
  }
`
