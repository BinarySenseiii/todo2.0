import React from 'react'
import PageTitle from './components/PageTitle'
import AppHeader from './components/AppHeader'
import AppContent from './components/AppContent'

// styles
import styles from './styles/modules/app.module.scss'

function App() {
  return (
    <div className='container'>
      <PageTitle>to-do list</PageTitle>
      <div className={styles.app__wrapper}>
        <AppHeader />
        <AppContent />
      </div>
    </div>
  )
}

export default App
