import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppProvider } from './providers/AppProvider'
import { AppRouter } from './router/AppRouter'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <AppRouter />
    </AppProvider>
  </React.StrictMode>
)
