import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styles from '../styles/modules/modal.module.scss'
import { MdOutlineClose } from 'react-icons/md'
import Button from './Button'
import { addTodo, updateTodo } from '../redux/slices/TodoSlice'
import { v4 as uuid } from 'uuid'
import toast from 'react-hot-toast'

export default function TodoModal({
  type = 'add',
  isModalOpen,
  setIsModalOpen,
  todo,
}) {
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('unComplete')
  const dispatch = useDispatch()

  const onSubmitHandler = e => {
    e.preventDefault()
    if (title && status) {
      if (type === 'add') {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            time: new Date().toLocaleString(),
          }),
        )
        setTitle('')
        setStatus('unComplete')
        toast.success('Task Added Successfully')
        setIsModalOpen(false)
      }
      if (type === 'update') {
        if (todo.title !== title || todo.status !== status) {
          dispatch(updateTodo({ ...todo, title, status }))
          toast.success('Task Updated Successfully')
        } else {
          toast.error('No changes were made')
        }
      }
    } else {
      toast.error("Fields shouldn't be empty")
    }
  }

  useEffect(() => {
    if (type === 'update') {
      setTitle(todo.title)
      setStatus(todo.status)
      setIsModalOpen(false)
    }
  }, [type, todo])

  return (
    isModalOpen && (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div
            className={styles.closeButton}
            onClick={() => setIsModalOpen(false)}
            onKeyDown={() => setIsModalOpen(false)}
            role='button'
            tabIndex='0'
          >
            <MdOutlineClose />
          </div>
          <form className={styles.form}>
            <h1 className={styles.formTitle}>
              {type === 'add' ? 'Add' : 'Edit'} Task
            </h1>
            <label htmlFor='title'>
              Title
              <input
                type='text'
                id='title'
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </label>

            <label htmlFor='status'>
              Status
              <select
                name='status'
                id='status'
                value={status}
                onChange={e => setStatus(e.target.value)}
              >
                <option value='complete'>Complete</option>
                <option value='unComplete'>UnComplete</option>
              </select>
            </label>

            <div className={styles.buttonContainer}>
              <Button
                onClick={onSubmitHandler}
                type='submit'
                variant='primary'
                text={type === 'add' ? 'Add' : 'Update'}
              />
              <Button
                variant='secondary'
                text='Cancel'
                onClick={() => setIsModalOpen(false)}
                role='button'
              />
            </div>
          </form>
        </div>
      </div>
    )
  )
}
