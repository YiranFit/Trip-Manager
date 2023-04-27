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
        <div className="logout-container">
            <div className="logout">
                <header className="logout-hearder">Are you sure you want to logout?</header>
            </div>
            <div className="logout">
            <button className="logout-button" onClick={(e) => [e.preventDefault(),logout(setUser), handleLogout()]}>Logout</button>
            </div>
        </div>
    )
}