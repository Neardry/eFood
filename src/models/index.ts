class Category {
  id: number
  highlight: boolean
  culture: string
  avaliation: number
  title: string
  description: string
  image: string

  constructor(
    id: number,
    highlight: boolean,
    culture: string,
    avaliation: number,
    title: string,
    description: string,
    image: string
  ) {
    this.id = id
    this.highlight = highlight
    this.culture = culture
    this.avaliation = avaliation
    this.title = title
    this.description = description
    this.image = image
  }
}

export default Category
