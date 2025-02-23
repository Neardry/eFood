import { ContainerBanner } from './styles'

export type Props = {
  culture: string
  image: string
  title: string
}

const Banner = ({ culture, image, title }: Props) => {
  return (
    <>
      <ContainerBanner image={image}>
        <div className="container">
          <div className="flexing">
            <p>{culture}</p>
            <h2>{title}</h2>
          </div>
        </div>
      </ContainerBanner>
    </>
  )
}

export default Banner
