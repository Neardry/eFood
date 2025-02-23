export const priceFormat = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    currency: 'BRL'
  }).format(price)
}
