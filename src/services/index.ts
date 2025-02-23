import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Categorys } from '../Components/Home/Menu'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: string
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: string
      expires: {
        month: string
        year: string
      }
    }
  }
}

type ResponsePayload = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getCategorys: builder.query<Categorys[], void>({
      query: () => 'restaurantes'
    }),
    getItem: builder.query<Categorys, number>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<ResponsePayload, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetCategorysQuery, useGetItemQuery, usePurchaseMutation } =
  api
export default api
