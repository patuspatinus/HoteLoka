import React,{useState} from 'react';
import { useForm } from './useForm';
import Axios from "axios";
export default function Login (){
    const [userInfo, setUserInfo] = useForm({username:'', password:''});
    const signIn = () =>{
        Axios.post("http://localhost:5000/login",userInfo).then(respond => alert(respond.data));
    }
    return(
        <div className='Login'>
        <h1> Login</h1>
        <input name = "username" value={userInfo.username} onChange={setUserInfo} />
        <input name = "password" value={userInfo.password} onChange={setUserInfo} />
        <button onClick={signIn}> login</button>
        </div>
    )
}