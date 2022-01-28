import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

const AppContent = () => {
  const { todos } = useSelector(state => state.todos)

  const sortedTodos = [...todos]
  sortedTodos.sort((a, b) => new Date(b.time) - new Date(a.time))

  return sortedTodos.length > 0 ? (
    sortedTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)
  ) : (
    <p>No Todos Found</p>
  )
}

export default AppContent
