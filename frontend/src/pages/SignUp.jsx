import { useState } from "react";
import { signUp } from "../utilities";
import '../App.css'
import { useNavigate } from "react-router-dom";



export const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleSignUp = () => {
        if (!name| !email | !password) {
            alert('Please fill out all fields')
        }
        else {
            navigate('/login/')
        }
    }
    
    return (
        <div className="signup-box">
            <form className="signup-form" onSubmit={(e) => [e.preventDefault(), signUp(name,email,password), setName(''), setEmail(''), setPassword(''), handleSignUp()]} style={{display:"flex", flexDirection:"column", width:"30%"}}>
                <div className="signup-header">
                    <header>Sign Up</header>
                </div>
                
                <div className="signup-input">
                    <input className="input-in" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="signup-input">
                    <input className="input-in" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="signup-input">
                    <input className="input-in" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className="signup-input">
                    <input classname="signup-submit" style={{border:'none', borderRadius:'30px', fontSize:'20px', height:'50px', 
                            background:'rgba(255,255,255, 0.7)', cursor:'pointer', transition:'0.5s'}} type="submit" value='signup'/>
                </div>
            </form>
        </div>
    )

}