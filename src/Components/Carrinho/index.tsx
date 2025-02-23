import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { RootReducer } from '../../store'
import { close, clear, remove } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services'
import { priceFormat } from '../../utils'

import lixeira from '../../assets/images/lixeira-de-reciclagem.png'

import { Button } from '../Button'

import * as S from './styles'

const Carrinho = () => {
  const isOpen = useSelector((state: RootReducer) => state.cart.isOpen)
  const cartItems = useSelector((state: RootReducer) => state.cart.items)
  const dispatch = useDispatch()
  const [paymentLayout, setPaymentLayout] = useState('')
  const [purchase, { data, isSuccess, isLoading, reset }] =
    usePurchaseMutation()

  const requiredMessage = 'Campo obrigatório'

  const form = useFormik({
    initialValues: {
      name: '',
      adress: '',
      city: '',
      cep: '',
      adressNumber: '',
      complement: '',
      nameCard: '',
      numberCard: '',
      cvv: '',
      expiresMonth: '01',
      expiresYear: '25'
    },
    validationSchema: Yup.object({
      name: Yup.string().required(requiredMessage),
      adress: Yup.string().required(requiredMessage),
      city: Yup.string().required(requiredMessage),
      cep: Yup.string()
        .min(8, 'CEP possui apenas 8 dígitos')
        .max(8, 'CEP possui apenas 8 dígitos')
        .required(requiredMessage),
      adressNumber: Yup.string().required(requiredMessage),
      nameCard: Yup.string().required(requiredMessage),
      numberCard: Yup.string()
        .min(16, 'Campo possui menos de 16 números')
        .max(16, 'Campo possui mais de 16 números')
        .required(requiredMessage),
      cvv: Yup.string()
        .min(3, 'Campo possui menos de 3 dígitos')
        .max(3, 'Campo possui mais de 3 dígitos')
        .required(requiredMessage),
      expiresMonth: Yup.string()
        .min(2, 'forma de entrada 00')
        .max(2, 'forma de entrada 00')
        .required(requiredMessage),
      expiresYear: Yup.string()
        .min(2, 'forma de entrada 00')
        .max(2, 'forma de entrada 00')
        .required(requiredMessage)
    }),
    onSubmit: async (values) => {
      try {
        const response = await purchase({
          products: cartItems.map((item) => ({
            id: item.id,
            price: item.preco
          })),
          delivery: {
            receiver: values.name,
            address: {
              city: values.city,
              description: values.complement,
              number: values.adressNumber,
              zipCode: values.cep,
              complement: values.complement
            }
          },
          payment: {
            card: {
              name: values.nameCard,
              code: values.cvv,
              number: values.numberCard,
              expires: {
                month: values.expiresMonth,
                year: values.expiresYear
              }
            }
          }
        })
        console.log(`Purchase response: ${response}`)
      } catch (error) {
        console.log(`Purchase error: ${error}`)
      }
    }
  })

  const errorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) {
      console.log(form.touched)
      console.log(form.errors)
      return message
    }
    return ''
  }

  const totalPrice = priceFormat(
    cartItems.reduce((acumulator, current) => {
      return (acumulator += current.preco)
    }, 0)
  )

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  if (!isSuccess && cartItems.length == 0) {
    return <></>
  }

  return (
    <S.Container className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={() => dispatch(close())} />
      <S.CartContainer>
        <S.ContainerGrid>
          {!isSuccess ? (
            <form onSubmit={form.handleSubmit}>
              {paymentLayout === 'DELIVERY' ? (
                <>
                  <S.FormItems>
                    <h4>Entrega</h4>
                    <S.FormItem>
                      <label htmlFor="name">Quem irá receber</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={form.values.name}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>{errorMessage('name', form.errors.name)}</small>
                    </S.FormItem>
                    <S.FormItem>
                      <label htmlFor="adress">Endereço</label>
                      <input
                        id="adress"
                        type="text"
                        name="adress"
                        value={form.values.adress}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {errorMessage('adress', form.errors.adress)}
                      </small>
                    </S.FormItem>
                    <S.FormItem>
                      <label htmlFor="city">Cidade</label>
                      <input
                        id="city"
                        type="text"
                        name="city"
                        value={form.values.city}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>{errorMessage('city', form.errors.city)}</small>
                    </S.FormItem>
                    <S.FormItems twoGrid="1fr 1fr">
                      <S.FormItem>
                        <label htmlFor="cep">CEP</label>
                        <input
                          id="cep"
                          type="text"
                          name="cep"
                          value={form.values.cep}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>{errorMessage('cep', form.errors.cep)}</small>
                      </S.FormItem>
                      <S.FormItem maxWidth="155px">
                        <label htmlFor="adressNumber">Número</label>
                        <input
                          id="adressNumber"
                          type="text"
                          name="adressNumber"
                          value={form.values.adressNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {errorMessage(
                            'adressNumber',
                            form.errors.adressNumber
                          )}
                        </small>
                      </S.FormItem>
                    </S.FormItems>
                    <S.FormItem>
                      <label htmlFor="complement">Complemento (opcional)</label>
                      <input
                        id="complement"
                        type="text"
                        name="complement"
                        value={form.values.complement}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                    </S.FormItem>
                  </S.FormItems>
                  <Button
                    type="button"
                    title="Continuar com o pagamento"
                    onClick={() => setPaymentLayout('PAYMENT')}
                  >
                    <>Continuar com o pagamento</>
                  </Button>
                  <Button
                    type="button"
                    title="Carrinho"
                    onClick={() => setPaymentLayout('')}
                  >
                    <>Voltar para o carrinho</>
                  </Button>
                </>
              ) : paymentLayout === 'PAYMENT' ? (
                <>
                  <S.FormItems>
                    <h4>Pagamento - Valor a pagar R$ {totalPrice}</h4>
                    <S.FormItem>
                      <label htmlFor="nameCard">Nome do cartão</label>
                      <input
                        id="nameCard"
                        type="text"
                        name="nameCard"
                        value={form.values.nameCard}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {errorMessage('nameCard', form.errors.nameCard)}
                      </small>
                    </S.FormItem>
                    <S.FormItems twoGrid="auto auto">
                      <S.FormItem maxWidth="228px">
                        <label htmlFor="numberCard">Número do cartão</label>
                        <input
                          id="numberCard"
                          type="number"
                          name="numberCard"
                          value={form.values.numberCard}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {errorMessage('numberCard', form.errors.numberCard)}
                        </small>
                      </S.FormItem>
                      <S.FormItem maxWidth="87px">
                        <label htmlFor="cvv">CVV</label>
                        <input
                          id="cvv"
                          type="number"
                          name="cvv"
                          value={form.values.cvv}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>{errorMessage('cvv', form.errors.cvv)}</small>
                      </S.FormItem>
                    </S.FormItems>
                    <S.FormItems twoGrid="1fr 1fr">
                      <S.FormItem>
                        <label htmlFor="expiresMonth">Mês de vencimento</label>
                        <input
                          placeholder="MM"
                          id="expiresMonth"
                          type="number"
                          name="expiresMonth"
                          value={form.values.expiresMonth}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          min="01"
                          max="12"
                        />
                        <small>
                          {errorMessage(
                            'expiresMonth',
                            form.errors.expiresMonth
                          )}
                        </small>
                      </S.FormItem>
                      <S.FormItem maxWidth="155px">
                        <label htmlFor="expiresYear">Ano de vencimento</label>
                        <input
                          placeholder="YY"
                          id="expiresYear"
                          type="number"
                          name="expiresYear"
                          value={form.values.expiresYear}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          min="25"
                          max="99"
                        />
                        <small>
                          {errorMessage('expiresYear', form.errors.expiresYear)}
                        </small>
                      </S.FormItem>
                    </S.FormItems>
                  </S.FormItems>
                  <Button type="submit" title="Finalize sua compra">
                    <>{isLoading ? 'Carregando...' : 'Finalizar compra'}</>
                  </Button>
                  <Button
                    type="button"
                    title="Voltar"
                    onClick={() => setPaymentLayout('DELIVERY')}
                  >
                    <>Voltar para a edição de endereço</>
                  </Button>
                </>
              ) : (
                <S.CartItems>
                  {cartItems.map((item) => (
                    <S.CartItem key={item.id}>
                      <img src={item.foto} alt={item.nome} />

                      <div>
                        <h4>{item.nome}</h4>
                        <p>R$ {item.preco}</p>
                        <img
                          onClick={() => dispatch(remove(item.id))}
                          className="lixeira"
                          src={lixeira}
                          alt="lixeira"
                        />
                      </div>
                    </S.CartItem>
                  ))}
                  <div className="flex">
                    <p>Valor total</p>
                    <p>
                      R${' '}
                      {priceFormat(
                        cartItems.reduce((acumulator: number, current) => {
                          return (acumulator += current.preco)
                        }, 0)
                      )}
                    </p>
                  </div>
                  <Button
                    onClick={() => {
                      setPaymentLayout('DELIVERY')
                    }}
                    type="button"
                    title="Continuar com entrega"
                  >
                    <>Continuar com a entrega</>
                  </Button>
                </S.CartItems>
              )}
            </form>
          ) : (
            <>
              <h4>Pedido realizado - {data ? data.orderId : 'ORDER-ID'}</h4>
              <br />
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <br />
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <br />
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <br />
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
              <Button
                type="button"
                title="Concluir"
                onClick={() => {
                  dispatch(close())
                  setPaymentLayout('')
                  form.resetForm()
                  reset()
                }}
              >
                <>Concluir</>
              </Button>
            </>
          )}
        </S.ContainerGrid>
      </S.CartContainer>
    </S.Container>
  )
}

export default Carrinho
