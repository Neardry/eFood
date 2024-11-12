import { HeaderStyled, Container } from './styles'
import Logo from '../../../images/logo.png'

const Header = () => (
  <HeaderStyled>
    <div className="container">
      <Container>
        <img src={Logo} alt="eFood" />
        <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
      </Container>
    </div>
  </HeaderStyled>
)

export default Header
