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
    max-height: 340px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      font-size: 14px;
      line-height: 22px;
      margin-top: 8px;
    }
  }

  img {
    width: 304px;
    height: 168px;
    object-fit: cover;
    margin-bottom: 8px;
  }
`

export const DivLink = styled.div`
  width: 100%;
  max-width: 304px;
  height: 24px;
  background-color: ${Cores.branco};
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  padding-top: 4px;
  margin-top: 8px;
  cursor: pointer;

  span {
    color: ${Cores.vermelho};
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  .container {
    background-color: ${Cores.vermelho};
  }

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: RGBA(0, 0, 0, 0.75);
  }

  .close {
    width: 16px;
    height: 16px;
    position: absolute;
    right: 0px;
    cursor: pointer;
  }
`

export const ModalContent = styled.div`
  z-index: 1;
  display: flex;
  max-width: 100%;
  width: 1024px;
  height: 344px;
  color: ${Cores.branco};
  position: relative;

  h3 {
    margin-bottom: 16px;
    margin-top: 32px;
    font-size: 18px;
  }

  p {
    line-height: 22px;
    font-size: 14px;
    max-width: 656px;
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin: 32px;
  }

  ${DivLink} {
    margin-top: 16px;
  }
`
