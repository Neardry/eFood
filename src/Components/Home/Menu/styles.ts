import styled from 'styled-components'
import { breakPoints, Cores } from '../../../styles'

export const ListItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(472px, 1fr));
  gap: 48px;
  margin-top: 40px;
  margin-bottom: 120px;

  @media (max-width: ${breakPoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const ListItem = styled.li`
  height: 100%;
  width: 480px;
  position: relative;
  max-height: 400px;

  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
    max-width: 480px;
    max-height: 218px;
    object-fit: cover;
  }

  @media (max-width: ${breakPoints.tablet}) {
    max-width: 80%;
  }
`
export const ContainerInfos = styled.div`
  margin-top: -6px;
  padding: 8px;
  border: 1px solid ${Cores.vermelho};
  color: ${Cores.vermelho};

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;

    p {
      font-size: 18px;
      font-weigth: bold;
      margin-right: 8px;
    }

    img {
      width: 21px;
      height: 21px;
    }
  }

  h4 {
    margin-bottom: 16px;
    font-size: 18px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }
`

export const ButtonCategorys = styled.div`
  background-color: ${Cores.vermelho};
  display: inline-block !important; /* caso seja necessário alteração, important foi usado para economizar linha */
  height: 30px;
  margin-top: 16px;
  margin-right: 8px;
  padding: 4px 6px;
  text-align: center;
  color: ${Cores.branco};
  font-weight: bold;
  font-size: 14px;
`

export const ContainerCategoria = styled.div`
  display: flex;
  position: absolute;
  right: 12px;
`
