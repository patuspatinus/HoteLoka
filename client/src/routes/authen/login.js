import React,{useState} from 'react';
import { useForm } from './useForm';
import Axios from "axios";
import { Navigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./login.css"
export default function Login (){
    const [userInfo, setUserInfo] = useForm({username:'', password:''});
    const [user, setUser] = useState(null);
    const signIn = async () =>{
        await Axios.post("http://localhost:5000/login",userInfo).then(respond =>{
            setUser(respond.data);
            localStorage.setItem("user",JSON.stringify(respond.data))
            Axios.post("http://localhost:5000/getuser",{customerID:respond.data.customerID}).then(respond1 =>{
                localStorage.setItem("profile",JSON.stringify(respond1.data))
            }).catch(e=>{
                console.log(e);
            });
        }).catch(e=>{
            console.log(e);
        });
    }
    return(
        <div className="login">
            {user && (
            <Navigate to="/gethotels" replace={true} />
            )}
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