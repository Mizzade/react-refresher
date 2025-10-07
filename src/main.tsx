import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import TicTacToe from './TicTacToe.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <TicTacToe />
  </StrictMode>,
)
