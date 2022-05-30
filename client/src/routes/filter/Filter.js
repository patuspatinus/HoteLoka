import React, { useState } from "react";
import  Axios  from "axios";
import { useLocation } from "react-router-dom";
import Featured from "../../components/featured/Featured";
 export default function Filter (){
     const location = useLocation();
    const destination = location.state.destination;
    const dates = location.state.date;
    return(
        <div>
            <Featured destination={destination} date={dates} />
        </div>
    )
 }