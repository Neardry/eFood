import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import estrela from '../../../assets/images/estrela.png'

import {
  ListItems,
  ListItem,
  CategoriasBotao,
  ContainerInfos,
  ContainerCategoria
} from './styles'

export type Categorys = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Array<{
    id: number
    foto: string
    preco: number
    nome: string
    descricao: string
    porcao: string
  }>
}

const Menu = () => {
  const [categorys, setCategorys] = useState<Categorys[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setCategorys(res))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div>
      <div className="container">
        <ListItems>
          {categorys.map((category) => (
            <ListItem key={category.id}>
              <ContainerCategoria>
                {category.destacado && (
                  <CategoriasBotao>
                    <h4>Destaque da semana</h4>
                  </CategoriasBotao>
                )}
                <CategoriasBotao>
                  <h4>{category.tipo}</h4>
                </CategoriasBotao>
              </ContainerCategoria>
              <div>
                <img src={category.capa} alt={category.titulo} />
              </div>
              <ContainerInfos>
                <div>
                  <h4>{category.titulo}</h4>
                  <div>
                    <p>{category.avaliacao}</p>
                    <img src={estrela} alt="estrela" />
                  </div>
                </div>
                <p>{category.descricao.slice(0, 260) + '...'}</p>
                <Link
                  to={`/produtos/${category.id.toString()}`}
                  state={{
                    cardapio: category.cardapio,
                    image: category.capa,
                    title: category.titulo,
                    culture: category.tipo
                  }}
                >
                  <CategoriasBotao>Saiba mais</CategoriasBotao>
                </Link>
              </ContainerInfos>
            </ListItem>
          ))}
        </ListItems>
      </div>
    </div>
  )
}

export default Menu
