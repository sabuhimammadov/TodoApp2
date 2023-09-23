import { configureStore } from '@reduxjs/toolkit'
import todoSlices from './slices/todoSlices'

export const store = configureStore({
  reducer: {
    todos: todoSlices,
  }
})