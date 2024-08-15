import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Board from './component/Board.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Board />
  </StrictMode>,
)
