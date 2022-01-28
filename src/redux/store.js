import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../redux/slices/TodoSlice'

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
})
