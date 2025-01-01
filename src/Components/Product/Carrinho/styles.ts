import { styled } from 'styled-components'
import { Cores } from '../../../styles'
import { DivLink } from '../MenuCategorizado/styles'

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
  height: 100%;
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

export const KeepDelivery = styled(DivLink)`
  color: ${Cores.vermelho};
  max-width: 100%;
  margin: 0px 0px 30px 0px;
`
