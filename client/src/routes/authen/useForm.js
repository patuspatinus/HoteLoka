import { useState } from "react"

export const useForm = (init) =>{
    const [userInfo,setUserInfo] = useState(init);
    return [userInfo, e=>{
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }]
}