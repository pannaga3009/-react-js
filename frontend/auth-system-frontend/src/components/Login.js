import React, {useState} from "react";
import axios from "axios";


const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        //prevents this page reload and default form submission.
        e.preventDefault();
        try{
            let params = {
                username,
                password,
            }
            const response = await axios.post('http://localhost:8000/api/login/', {params})
            console.log(response.data)
            
        }catch(error){
            console.error(error)

        }


    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input type="text"
                value = {username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Username"
                required
                >

                </input>
                <input type="text"
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder = "Password"
                required               
                >
                
                </input>
                <button type = "submit">Login</button>

            </form>

        </div>
    )
}

export default Login