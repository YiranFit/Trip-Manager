import { useState, useContext } from 'react'
import { logIn } from '../utilities'
import { UserContext } from '../App'
import { useNavigate } from 'react-router-dom'


export const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/')
    }


    return (
        <form onSubmit={e => [e.preventDefault(), logIn(email,password,setUser), handleLogin(), setEmail(''), setPassword('')]}>
            <h3>Log In</h3>
            <input placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <input type="submit" value='login'/>
        </form>

    )

}