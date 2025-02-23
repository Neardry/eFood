import { styled } from 'styled-components'
import { Cores } from '../../styles'

type InputProps = {
  maxWidth?: string
  twoGrid?: string
}

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 70%;
  z-index: 1;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 360px;
  height: 100%;
  justify-content: flex-end;
  z-index: 1;
  background-color: ${Cores.vermelho};
  padding: 32px 8px 0px 8px;
  overflow-y: scroll;
  scrollbar-width: none;
  scroll-behavior: smooth;

  .flex {
    display: flex;
    justify-content: space-between;
    color: ${Cores.branco};
    font-weight: bold;
    margin: 10px;
  }
`

export const Container = styled.div`
  display: none;
  &.is-open {
    display: flex;
  }
`

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-column: 1fr;
  gap: 12px;
  height: auto;
`

export const CartItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const CartItem = styled.li`
  display: flex;
  max-width: 344px;
  max-height: 100px;
  height: 100%;
  width: 100%;
  padding: 8px;
  background-color: ${Cores.fundoBody};
  color: ${Cores.vermelho};
  position: relative;

  img {
    margin-right: 8px;
    max-width: 30%;
    object-fit: cover;
  }

  h4 {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    margin-bottom: 33px;
  }
  .lixeira {
    width: 16px;
    position: absolute;
    right: 0px;
    bottom: 8px;
    cursor: pointer;
  }
`

export const FormItems = styled(CartItems)<InputProps>`
  display: grid;
  flex: auto;
  width: auto;
  grid-template-columns: ${(props) => props.twoGrid || '1fr'};
  color: ${Cores.branco};
`

export const FormItem = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  max-width: ${(props) => props.maxWidth || 'auto'};
  justify-self: end;

  width: 100%;

  label {
    margin-bottom: 8px;
  }

  input {
    background-color: ${Cores.fundoBody};
    border: 1px solid ${Cores.fundoBody};
    height: 32px;
    width: 100%;
    padding: 8px;
  }
`
