import './App.css'
import { Login } from './compoent/Login'
import { Profile } from './compoent/Profile'
import {UserContextProvider} from './context/usercontext/UserContextProvider'

function App() {
  console.log('app')
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
