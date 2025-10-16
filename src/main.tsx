import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Gallery, { Profile } from './Gallery.tsx'
import TicTacToe from './TicTacToe.tsx'
import TodoList from './TodoList.tsx'
import { Avatar } from './Avatar.tsx'
import List from './List.tsx'
import { Button } from './Button.tsx'
import { Toolbar } from './Toolbar.tsx'
import { Signup } from './Signup.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Signup />
    <Toolbar
      onPlayMovie={() => alert('Playing!')}
      onUploadImage={() => alert('Uploading!')}
    />
    <Button />
    <TodoList />
    <Gallery />
    <List />
    <Profile />
    <Avatar
      size={100}
      person={{
        name: 'Katsuko Saruhashi',
        imageId: 'YfeOqp2'
      }}
    />
    <Avatar
      size={80}
      person={{
        name: 'Aklilu Lemma',
        imageId: 'OKS67lh'
      }}
    />
    <Avatar
      size={50}
      person={{
        name: 'Lin Lanying',
        imageId: '1bX5QH6'
      }}
    />
    <TicTacToe />
  </StrictMode>,
)
