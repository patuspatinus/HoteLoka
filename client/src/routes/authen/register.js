import React from "react";
import { useForm } from "./useForm";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Register() {
    const [userInfo, setUserInfo] = useForm({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        age: 1,
        country: "",
        customerID: 20,
    });
    const navigate = useNavigate();
    const signUp = async () => {
        await Axios.post("http://localhost:5000/register", userInfo)
            .then(() => {
                navigate('/');
            })
            .catch((e) => {
                alert("Username exist try again");
                console.log(e);
            });
    };
    return (
        <div className="login">
        <div className="lContainer">
            <h1> SignUp</h1>
            <input
                name="username"
                placeholder="username"
                value={userInfo.username}
                onChange={setUserInfo}
                className="lInput"
            />
            <input
                name="password"
                placeholder="password"
                value={userInfo.password}
                onChange={setUserInfo}
                className="lInput"
            />
            <input
                name="firstName"
                placeholder="First Name"
                value={userInfo.firstName}
                onChange={setUserInfo}
                className="lInput"
            />
            <input
                name="lastName"
                placeholder="Last Name"
                value={userInfo.lastName}
                onChange={setUserInfo}
                className="lInput"
            />
            <input
                name="phoneNumber"
                placeholder="Phone Number"
                value={userInfo.phoneNumber}
                onChange={setUserInfo}
                className="lInput"
            />
            <input name="age" placeholder="Age" value={userInfo.age} onChange={setUserInfo} className="lInput"/>
            <input
                name="country"
                placeholder="country"
                value={userInfo.country}
                onChange={setUserInfo}
                className="lInput"
            />
            <button onClick={signUp} className="lButton"> SignUp</button>
        </div>
        </div>
    );
}
