import { FooterStyled } from './styles'
import logo from '../../images/logo.png'
import instagram from '../../images/instagram.png'
import facebook from '../../images/facebook.png'
import twitter from '../../images/finadoTwiter.png'

const Footer = () => (
  <>
    <FooterStyled>
      <div>
        <img src={logo} alt="logo" />
        <div>
          <img src={instagram} alt="instagram" />
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
        </div>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </p>
      </div>
    </FooterStyled>
  </>
)

export default Footer
