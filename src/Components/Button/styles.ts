import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Cores } from '../../styles'

type Props = {
  maxWidth?: boolean
}

export const Button = styled.button<Props>`
  width: 100%;
  max-width: ${(props) => (props.maxWidth ? '218px' : 'auto')};
  height: 24px;
  background-color: ${Cores.branco};
  color: ${Cores.vermelho};
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  margin-top: 8px;
  cursor: pointer;
  border: 2px solid ${Cores.fundoBody};
`

export const ButtonLink = styled(Link)`
  display: block;
  cursor: pointer;
  width: 100%;
  max-width: 304px;
  height: 24px;
  background-color: ${Cores.branco};
  color: ${Cores.vermelho};
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  padding-top: 4px;
  margin-top: 8px;
  cursor: pointer;
`
