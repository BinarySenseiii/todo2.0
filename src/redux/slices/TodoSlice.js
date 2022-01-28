import { createSlice } from '@reduxjs/toolkit'

const getInitialTodos = () => {
  const getTodos = localStorage.getItem('todos')
  return getTodos ? JSON.parse(getTodos) : []
}

const initialState = {
  todos: getInitialTodos(),
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
      const todos = window.localStorage.getItem('todos')

      if (todos) {
        const tempTodos = JSON.parse(todos)
        tempTodos.push({
          ...action.payload,
        })
        window.localStorage.setItem('todos', JSON.stringify(tempTodos))
      } else {
        window.localStorage.setItem(
          'todos',
          JSON.stringify([{ ...action.payload }]),
        )
      }
    },
    deleteTodo: (state, action) => {
      const todos = window.localStorage.getItem('todos')

      if (todos) {
        const temp = JSON.parse(todos)
        temp.forEach((todo, index) => {
          if (todo.id === action.payload) {
            temp.splice(index, 1)
          }
        })

        window.localStorage.setItem('todos', JSON.stringify(temp))
        state.todos = temp
      }
    },
    updateTodo: (state, action) => {
      const todos = window.localStorage.getItem('todos')
      if (todos) {
        const temp = JSON.parse(todos)
        temp.forEach((todo, index) => {
          if (todo.id === action.payload.id) {
            temp[index] = action.payload
          }
        })
        window.localStorage.setItem('todos', JSON.stringify(temp))
        state.todos = temp
      }
    },
  },
})

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer
