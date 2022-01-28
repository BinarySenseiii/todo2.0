import React from 'react'
import PageTitle from './components/PageTitle'
import AppHeader from './components/AppHeader'
import AppContent from './components/AppContent'
import { Toaster } from 'react-hot-toast'

// styles
import styles from './styles/modules/app.module.scss'

function App() {
  return (
    <div className='container'>
      <PageTitle>Things to be DONE!</PageTitle>
      <div className={styles.app__wrapper}>
        <AppHeader />
        <AppContent />
      </div>
      <Toaster
        position='bottom-right'
        toastOptions={{
          style: {
            fontSize: '1.7rem',
          },
        }}
      />
    </div>
  )
}

export default App
