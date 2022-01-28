import React from 'react'
import styles from '../styles/modules/todoItem.module.scss'
import { getClasses } from '../utils/getClasses'
import format from 'date-fns/format'
import { MdDelete, MdEdit } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../redux/slices/TodoSlice'
import toast from 'react-hot-toast'

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id))
    toast.success('Task Deleted Successfully')
  }

  const handleUpdate = () => {
    console.log('handle Edit')
  }

  return (
    <div className={styles.item}>
      <div className={styles.todoDetails}>
        ()
        <div className={styles.texts}>
          <p
            className={getClasses([
              styles.todoText,
              todo.status === 'complete' && styles['todoText--completed'],
            ])}
          >
            {todo.title}
          </p>
          <p className={styles.time}>
            {format(new Date(todo.time), 'p, MM/dd/yyyy')}
          </p>
        </div>
      </div>
      <div className={styles.todoActions}>
        <div className={styles.icon} onClick={handleDelete} role='button'>
          <MdDelete />
        </div>
        <div className={styles.icon} onClick={handleUpdate} role='button'>
          <MdEdit />
        </div>
      </div>
    </div>
  )
}

export default TodoItem
