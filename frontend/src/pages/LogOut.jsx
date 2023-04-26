import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../App"

export const LogOut = () => {
    const navigate = useNavigate()
    const {setUser} = useContext(UserContext)

    const handleLogout = () => {      
        navigate('/')
    }

    const logout = async(setUser) => {
        let response = await axios.post('/user/logout/')
        if(response.data.logout){
            setUser(null)
        }
    }

    
    return (
        <div>
            <h3>Are you sure you want ot log out?</h3>
            <button onClick={(e) => [e.preventDefault(),logout(setUser), handleLogout()]}>Log Out</button>
        </div>
    )
}