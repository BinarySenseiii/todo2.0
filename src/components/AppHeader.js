import React, { useState } from 'react'
import Button, { SelectButton } from './Button'
import TodoModal from './TodoModal'

import style from '../styles/modules/app.module.scss'

function AppHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className={style.appHeader}>
      <Button text='Click me' onClick={() => setIsModalOpen(true)} />
      <SelectButton>
        <option value='all'>all</option>
        <option value='complete'>complete</option>
        <option value='unComplete'>unComplete</option>
      </SelectButton>
      <TodoModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  )
}

export default AppHeader
