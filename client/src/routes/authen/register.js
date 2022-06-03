import React from "react";
import { useForm } from "./useForm";
import Axios from "axios";
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

    const signUp = async () => {
        await Axios.post("http://localhost:5000/register", userInfo)
            .then((respond) => {
                localStorage.setItem("user", JSON.stringify(respond.data));
                Axios.post("http://localhost:5000/getuser", {
                    customerID: respond.data.customerID,
                })
                    .then((respond1) => {
                        localStorage.setItem(
                            "profile",
                            JSON.stringify(respond1.data)
                        );
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            })
            .catch((e) => {
                console.log(e);
            });
    };
    return (
        <div className="Register">
            <h1> SignUp</h1>
            <input
                name="username"
                value={userInfo.username}
                onChange={setUserInfo}
            />
            <input
                name="password"
                value={userInfo.password}
                onChange={setUserInfo}
            />
            <input
                name="firstName"
                value={userInfo.firstName}
                onChange={setUserInfo}
            />
            <input
                name="lastName"
                value={userInfo.lastName}
                onChange={setUserInfo}
            />
            <input
                name="phoneNumber"
                value={userInfo.phoneNumber}
                onChange={setUserInfo}
            />
            <input name="age" value={userInfo.age} onChange={setUserInfo} />
            <input
                name="country"
                value={userInfo.country}
                onChange={setUserInfo}
            />
            <button onClick={signUp}> SignUp</button>
        </div>
    );
}
