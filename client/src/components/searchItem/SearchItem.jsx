import  Axios  from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import "./searchItem.css";
import moment from "moment";
import { useState } from "react";

const SearchItem = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [booked,setBooked] = useState(false);
  const dates = location.state.date;
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays;
    }
  const days = dayDifference(dates[0].endDate, dates[0].startDate);
  const photo = [0,"https://cf.bstatic.com/xdata/images/hotel/max1024x768/255900294.jpg?k=8afe07281fdb0f30ab8e4f2e38862ce50c5eeb4095141ba565d6fc12f4c54ecb&o=",
	    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/255899668.jpg?k=acd8ae93ac6db9f74119daf6c09e977954e830d9c8a0d9f6889fc7c9b9fa58a8&o=",	
	 "https://cf.bstatic.com/xdata/images/hotel/max1024x768/255900227.jpg?k=5cd4cd8bcea0ac1081969bf9014a6e5f01489ebe3d16807ac39074211f8665c7&o=",
	 "https://cf.bstatic.com/xdata/images/hotel/max1024x768/255899919.jpg?k=971e50e8416a3b384ecb931a551432b7dee7d44d1cbd1b2019f59fd9a1128b05&o=",
	"https://cf.bstatic.com/xdata/images/hotel/max1024x768/255900510.jpg?k=9c91bb0e61affb635f26f5759278151ad73c2299b6dfd7ed0c09246764964364&o=",
	 "https://cf.bstatic.com/xdata/images/hotel/max1024x768/256999691.jpg?k=e206c6de4d792e32e4be0bf6487f2c2ea4ce91d535bbf8ec2974f0724b703c43&o=",
	 "https://cf.bstatic.com/xdata/images/hotel/max1024x768/255900134.jpg?k=27cd119f0f4a945fe993c6af981f1401b45cc215234456b5071c7609923ddf9a&o=",
	 "https://cf.bstatic.com/xdata/images/hotel/max1024x768/256994893.jpg?k=4d5938d79752d493be7ae5bba205b36a8dd93b39475eb8bd139796385d84240a&o="]
  const booking = async()=>{
      const user = JSON.parse(localStorage.getItem("user"));
      Axios.post("http://localhost:5000/bookroom",{customerID:user.customerID,roomID:item.roomID,bookTime:moment(dates[0].startDate).format('YYYY-MM-DD'),timeStaying:days}).then(respond=>{
        alert("Success");
        window.location.replace("http://localhost:3000/gethotels");
      })
  }
   return (
    <div className="searchItem">
      <img src={photo[parseInt(item.roomID)]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.roomType}</h1>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          {item.roomDescriptions}
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">{item.roomPrice} VNĐ</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to="/">
          <button onClick={booking} className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;