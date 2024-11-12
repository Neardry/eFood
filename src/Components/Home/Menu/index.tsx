import imageSushi from '../../../images/sushi.png'
import imagemMassa from '../../../images/imagemMassa.png'
import estrela from '../../../images/estrela.png'
import Category from '../../../models'

import {
  ListItems,
  ListItem,
  CategoriasBotao,
  ContainerInfos,
  ContainerCategoria
} from './styles'
import { Link } from 'react-router-dom'

export const categorias: Category[] = [
  {
    id: 1,
    avaliation: 4.9,
    culture: 'Japonesa',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    highlight: true,
    title: 'Hioki Sushi ',
    image: imageSushi
  },
  {
    id: 2,
    avaliation: 4.6,
    culture: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    highlight: false,
    title: 'La Dolce Vita Trattoria',
    image: imagemMassa
  },
  {
    id: 3,
    avaliation: 4.6,
    culture: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    highlight: false,
    title: 'La Dolce Vita Trattoria',
    image: imagemMassa
  },
  {
    id: 4,
    avaliation: 4.6,
    culture: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    highlight: false,
    title: 'La Dolce Vita Trattoria',
    image: imagemMassa
  },
  {
    id: 5,
    avaliation: 4.6,
    culture: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    highlight: false,
    title: 'La Dolce Vita Trattoria',
    image: imagemMassa
  },
  {
    id: 6,
    avaliation: 4.6,
    culture: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    highlight: false,
    title: 'La Dolce Vita Trattoria',
    image: imagemMassa
  }
]

const Menu = () => (
  <div>
    <div className="container">
      <ListItems>
        {categorias.map((categoria) => (
          <ListItem key={categoria.id}>
            <ContainerCategoria>
              {categoria.highlight && (
                <CategoriasBotao>
                  <h4>Destaque da semana</h4>
                </CategoriasBotao>
              )}
              <CategoriasBotao>
                <h4>{categoria.culture}</h4>
              </CategoriasBotao>
            </ContainerCategoria>
            <div>
              <img src={categoria.image} alt={categoria.title} />
            </div>
            <ContainerInfos>
              <div>
                <h4>{categoria.title}</h4>
                <div>
                  <p>{categoria.avaliation}</p>
                  <img src={estrela} alt="estrela" />
                </div>
              </div>
              <p>{categoria.description}</p>
              <Link
                to="/produtos"
                state={{
                  image: categoria.image,
                  title: categoria.title,
                  culture: categoria.culture
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

export default Menu
