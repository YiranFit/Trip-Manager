import { useState, useContext } from 'react'
import { logIn } from '../utilities'
import { UserContext } from '../App'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../App.css'


export const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user,setUser} = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogin = () => {
        if (email && password) {
        navigate('/')}
    }


    return (
        <div className='login-box'> 
            <form className='login-form' onSubmit={e => [e.preventDefault(), logIn(email,password,setUser), handleLogin(), setEmail(''), setPassword('')]}>
                <div className='login-header'>
                    <header className='header'>Login</header>
                </div>

                <div className='login-input'>
                    <input className='input' placeholder="Username" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className='login-input'>
                    <input className='input' type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                </div>

                <div className='login-input'>
                    <input className='login-submit' type="submit" value='Login'/>    
                </div>    

                <div className='login-memeber'>
                    <div>
                        <label style={{paddingLeft:'30px', fontWeight:'bold'}}>Not a member yet?</label>
                    </div>
                    <div>
                        <label style={{paddingRight:'50px'}}><Link style={{color:'#fff', fontWeight:'bold'}} to={'/signup/'}>Sign Up</Link></label>
                    </div>
                </div>  
            </form>
        </div>
    )

}