import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Gallery, { Profile } from './Gallery.tsx'
import TicTacToe from './TicTacToe.tsx'
import TodoList from './TodoList.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoList />
    <Gallery />
    <Profile />
    <TicTacToe />
  </StrictMode>,
)
