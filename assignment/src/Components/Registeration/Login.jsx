import React, { useState } from 'react'
import axios from "axios";
import '../CSS/registration.css'
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post("https://chatbot-ozp9.onrender.com/login", { email, password });
          localStorage.setItem("token", res.data.token);
          navigate("/organization");
        } catch (error) {
          alert(error.response.data.error);
        }
      };
      return (
        <div className='container'>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
            
          </form>
          
            <Link to={"/"}>
            <button> Register</button>
            </Link>
          

        </div>
      );
    }
    
    export default Login;
