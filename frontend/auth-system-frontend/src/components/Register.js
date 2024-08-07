import React, {useState} from "react";
import axios from "axios";


const Register = () =>{
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const params = {
                username,
                password,
                email,
            }
            console.log("sending ---- ", params)
            const response = await axios.post('http://localhost:8000/api/register/', params)
            console.log(response.data)
            setUserName("")
            setPassword("")
            setEmail("")
            
        }catch(error){
            console.error(error)
        }

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>
            <input type ="text"
            value = {username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
            required
            >
                 </input>
                <input type = "text"
                value ={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                
                >
               </input>
               <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <button type="submit"> Register
                </button>
            
            </form>

        </div>

    )
}

export default Register;