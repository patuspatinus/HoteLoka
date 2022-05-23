import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useForm } from "../authen/useForm";
export default function GetHotels(){
    const [locate,setLocation] = useState("Da Nang");
    const get = () => {
        console.log(locate);    
        Axios.post("http://localhost:5000/list",{location:locate}).then(respond => console.log(respond));
    }
    return(
        <div className = 'GetHotels'>
        <select onChange={(e)=>{setLocation(e.target.value)}} >
            <option value="Da Nang">Da Nang</option>
            <option value="Kien Giang">Kien Giang</option>
        </select>
        <button onClick={get}>Find</button>
        </div>
    )
}