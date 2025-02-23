import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import estrela from '../../../assets/images/estrela.png'

import * as S from './styles'

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
        <S.ListItems>
          {categorys.map((category) => (
            <S.ListItem key={category.id}>
              <S.ContainerCategoria>
                {category.destacado && (
                  <S.ButtonCategorys>
                    <h4>Destaque da semana</h4>
                  </S.ButtonCategorys>
                )}
                <S.ButtonCategorys>
                  <h4>{category.tipo}</h4>
                </S.ButtonCategorys>
              </S.ContainerCategoria>
              <div>
                <img src={category.capa} alt={category.titulo} />
              </div>
              <S.ContainerInfos>
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
                    id: category.id,
                    image: category.capa,
                    title: category.titulo,
                    culture: category.tipo
                  }}
                >
                  <S.ButtonCategorys>Saiba mais</S.ButtonCategorys>
                </Link>
              </S.ContainerInfos>
            </S.ListItem>
          ))}
        </S.ListItems>
      </div>
    </div>
  )
}

export default Menu
