import styled from 'styled-components'

import { Props } from '.'

import { Cores } from '../../styles'

export const ContainerBanner = styled.div<Omit<Props, 'culture' | 'title'>>`
  height: 280px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: ${Cores.branco};

  .flexing {
    display: flex;
    flex-direction: column;

    p {
      font-size: 32px;
      font-weight: 100;
      margin-top: 24px;
    }

    h2 {
      margin-top: 156px;
      font-size: 32px;
      font-weight: bold;
    }
  }
`
