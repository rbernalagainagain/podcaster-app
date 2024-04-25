// import './App.css'
import { LayoutMain } from './layout/main/LayoutMain.tsx'
import { Outlet } from 'react-router-dom'
import { ReactNode } from 'react'

function App(): ReactNode {
  return (
    <LayoutMain>
      <Outlet />
    </LayoutMain>
  )
}

export default App
