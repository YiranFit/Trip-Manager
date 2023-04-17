import axios from "axios"
import { useNavigate } from "react-router-dom"

export const LogOut = () => {
    const navigate = useNavigate()
    const handleLogout = () => {      
        navigate('/')
    }

    const logout = async() => {
        let response = await axios.post('/user/logout/')
        console.log(response.data.logout)
        return response.data.logout
    }

    return (
        <div>
            <h3>Are you sure you want ot log out?</h3>
            <button onClick={(e) => [e.preventDefault(),logout(), handleLogout()]}>Log Out</button>
        </div>
    )
}