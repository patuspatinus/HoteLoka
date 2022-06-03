import React, { useState } from "react";
import  Axios  from "axios";
import { useLocation } from "react-router-dom";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
 export default function Filter (){
     const location = useLocation();
    const destination = JSON.parse(localStorage.getItem("destination"));
    const dates = location.state.date;
    return(
        <div>
      <Navbar />
      <Header type="list" />
      <div className="homeContainer">
        <h1>This is what we found</h1>
            {<>
             {destination.map((item) => (
                <Featured destination={item} date={dates} />
                ))}
            </> }
      </div>
      </div>
    )
 }