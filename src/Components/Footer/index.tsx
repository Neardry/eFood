import { FooterStyled } from './styles'
import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/finadoTwiter.png'

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
