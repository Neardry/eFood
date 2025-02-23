import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ItemMenu } from '../../Components/Product/MenuCategorizado'

type CartState = {
  isOpen: boolean
  items: ItemMenu[]
  sum: number
}

const initialState: CartState = {
  isOpen: false,
  items: [],
  sum: 0
}

export const cartSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    add: (state, action: PayloadAction<ItemMenu>) => {
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
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { open, close, add, remove, clear } = cartSlice.actions
export default cartSlice.reducer
