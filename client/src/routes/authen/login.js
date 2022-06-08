import React from 'react';
import { useForm } from './useForm';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./login.css"
export default function Login (){
    const Navigate = useNavigate();
    const [userInfo, setUserInfo] = useForm({username:'', password:''});
    const signIn = async () =>{
        await Axios.post("http://localhost:5000/login",userInfo).then(respond =>{
            localStorage.setItem("user",JSON.stringify(respond.data))
            Navigate("/profile");
        }).catch(e=>{
            alert("Wrong");
            console.log(e);
        });
    }
    return(
        <div className="login">
        <div className="lContainer">
            <input
            type="text"
            placeholder="username"
            name="username"
            value={userInfo.username}
            onChange={setUserInfo}
            className="lInput"
            />
            <input
            type="password"
            placeholder="password"
            name="password"
            value={userInfo.password}
            onChange={setUserInfo}
            className="lInput"
            />
            <button onClick={signIn} className="lButton">
             Login
            </button>
            <Link to="/register">Register?</Link>
        </div>
        </div>
    )
}