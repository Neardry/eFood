import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Categorys } from '../Components/Home/Menu'

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
    })
  })
})

export const { useGetCategorysQuery, useGetItemQuery } = api
export default api
