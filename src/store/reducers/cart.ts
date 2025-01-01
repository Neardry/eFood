import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardapioItem } from '../../Components/Product/MenuCategorizado'

type CartState = {
  value: boolean
  items: CardapioItem[]
  sum: number
}

const initialState: CartState = {
  value: false,
  items: [],
  sum: 0
}

export const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    abrir: (state) => {
      state.value = true
    },
    fechar: (state) => {
      state.value = false
    },
    add: (state, action: PayloadAction<CardapioItem>) => {
      const categoriaRepetida = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (!categoriaRepetida) {
        state.items.push(action.payload)
        state.sum += action.payload.preco

        return
      }
      alert('Item já adicionado')
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})

export const { abrir, fechar, add, remove } = carrinhoSlice.actions
export default carrinhoSlice.reducer
