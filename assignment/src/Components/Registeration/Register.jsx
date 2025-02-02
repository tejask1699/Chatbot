import axios from "axios";
import '../CSS/registration.css'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider, signInWithPopup } from "../config/firebase"

function Register(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async(e) =>{
        console.log(name,email,password)
        e.preventDefault();
        try{
            await axios.post("http://localhost:5000/register",{name,email,password})
            alert("Verification email sent. Please check your inbox.")
            navigate("/login");
        }catch(error){
            alert(error.response.data.error);
        }
    }

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            await axios.post("http://localhost:5000/google-login", { 
                name: user.displayName, 
                email: user.email 
            });

            alert("Google Sign-In successful!");
            navigate("/login");
        } catch (error) {
            console.error("Google Sign-In Error:", error);
            alert("Google Sign-In failed");
        }
    };
    return(
        <div className="container">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} required/>
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                <button type="submit">Register</button>
                <span>OR</span>
                <button type="button" onClick={handleGoogleSignIn}>Sign with Google</button>
            </form>
        </div>
    )
}

export default Register;
