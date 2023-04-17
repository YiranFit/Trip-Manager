import { useState } from "react";
import { signUp } from "../utilities";

export const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <form onSubmit={(e) => [e.preventDefault(), signUp(name,email,password), setName(''), setEmail(''), setPassword('')]} style={{display:"flex", flexDirection:"column", width:"30%"}}>
            <h3>Sign Up</h3>
            <input placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="submit" value='signup'/>
        </form>
    )

}