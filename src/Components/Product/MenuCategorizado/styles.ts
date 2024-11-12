import styled from 'styled-components'
import { Cores } from '../../../styles'

export const ListGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  max-width: 320px;
  width: 100%;
  color: ${Cores.branco};
  margin-top: 56px;
  margin-bottom: 156px;

  li {
    padding: 8px;
    background-color: ${Cores.vermelho};

    p {
      font-size: 14px;
      line-height: 22px;
      margin-top: 8px;
    }

    .divLink {
      width: 100%;
      height: 24px;
      background-color: ${Cores.branco};
      text-align: center;
      font-size: 14px;
      font-weight: bold;
      padding-top: 4px;
      margin-top: 8px;
      a {
        color: ${Cores.vermelho};
      }
    }
  }
`
