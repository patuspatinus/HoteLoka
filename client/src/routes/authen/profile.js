import React, { useEffect, useState } from "react";
import moment from "moment";
import  Axios  from "axios";
import "./login.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
export default function Profile (){
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    const [profile,setProfile] = useState({});
    const [items,setItem] = useState([]);
    useEffect( () => {
            const fetchData = async () => {
                try {
                    const res = await Axios.post("http://localhost:5000/history", {
                        customerID:user.customerID
                    });
                    setItem(res.data);
                } catch (err) {
                    console.log(err);
                }
            };
            fetchData(); 
    },[])
    useEffect( ()=>{
        const fetchData2 = async () => {
            try {
                const profile1 = await Axios.post("http://localhost:5000/getuser",{
                    customerID:user.customerID
                })
                setProfile({firstName: profile1.data.firstName,
                    lastName: profile1.data.lastName,
                    phoneNumber: profile1.data.phoneNumber,
                    age: profile1.data.age,
                    country: profile1.data.country,
                })
                console.log(profile);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData2();
    },[items])
    return(
        <div>
            <div className="row">
                <div className="col-md-4 animated fadeIn" key={profile.customerID}>
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">
                            {profile.firstName +
                            " " +
                            profile.lastName}
                        </h5>
                        <p className="card-text">
                            {profile.age +
                            " years old, " +
                            profile.country}
                            <br />
                            <span className="phone">{profile.phoneNumber}</span>
                        </p>
                        </div>
                    </div>
                </div>
            </div>

                <h2>Your history payment</h2>
                {items.length ? 
                    (<TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow> 
                                <TableCell>Payment ID</TableCell>
                                <TableCell align="left">Amount</TableCell>
                                <TableCell align="left">Date</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {items.map((item) => (
                                <TableRow
                                key={item.paymentID}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {item.paymentID}
                                </TableCell>
                                <TableCell align="left">{item.amount}</TableCell>
                                <TableCell align="left">{moment(item.paymentDate).format('YYYY-MM-DD')}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : (
                     <p style={{ marginTop: '2rem' }}>You haven't done anything homie.</p>
                )}
                <br></br>
            <button onClick={()=>{navigate("/gethotels")}} className="lButton"> Book Now!!</button>
        </div>
    )
 }