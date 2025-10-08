import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Gallery, { Profile } from './Gallery.tsx'
import TicTacToe from './TicTacToe.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Gallery />
    <Profile />
    <TicTacToe />
  </StrictMode>,
)
