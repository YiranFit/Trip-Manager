import { useState, useEffect,createContext} from 'react'
import { curruser} from './utilities'
import { getToken } from './components/CsrfToken'
import {Outlet} from 'react-router-dom'
import { NavBar } from './components/NavBar'
import './App.css'


export const UserContext = createContext(null)

function App() {
  const [user, setUser] = useState(null)
  getToken()  

  useEffect(() => { 
    const getCurrUser = async() => { 
       setUser(await curruser())
    };
    getCurrUser()
},[])

  return (
    <div className="App">
        <NavBar />
        <h3>Start to explore {user && user.name}</h3>
        <UserContext.Provider value={{user, setUser}}>
        <Outlet />
        </UserContext.Provider>
        
        
    </div>
  )
}

export default App
