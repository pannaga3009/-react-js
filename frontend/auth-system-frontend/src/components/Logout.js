import React from "react";
import axios from "axios";

const Logout = () => {
    const handleLogout = async() => {
        try{
            const response = await axios.post('http://localhost:8000/api/logout/')
            console.log(response.data)

        }catch(error){
            console.error(error)
        }
    }
    return (  
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
};


export default Logout;