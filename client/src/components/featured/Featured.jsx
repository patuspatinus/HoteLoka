import  Axios  from "axios";
import { useState } from "react";
import "./featured.css";

const Featured = ({destination,date}) => {
  const [res,setData] = useState([]);
  const hotels = ["https://pix8.agoda.net/hotelImages/502/502099/502099_14060516240019719334.jpg?ca=2&ce=1&s=1024x768",
"https://cf.bstatic.com/xdata/images/hotel/max1024x768/136307206.jpg?k=0f1c538c579517adfaa1a976da8c917c555e85fc1c668998acf29b81d5007432&o=&hp=1",
"https://i0.wp.com/kenhhomestay.com/wp-content/uploads/2022/02/radisson-blu-resort-phu-quoc-4.jpg",
"https://cdn1.ivivu.com/iVivu/2018/05/17/17/khu-nghi-duong-fusion-phu-quoc-6-800x450.png"]
  return (
    <div className="featured"> 
      {date &&(
        <>
        <h1>This is what we found</h1>
          <div className="featuredItem">
            <img
            
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>{destination}</h1>
              <h2>{res.hotelName} hotels</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>{destination}</h1>
              <h2>{res.hotelName}</h2>
            </div>
          </div>
        </>
      )}
      <div className="featuredItem">
        <img
          src="https://wikicachlam.com/wp-content/uploads/2019/10/anh-dep-da-nang-15-.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Đà Nẵng</h1>
          <h2>40 Hotels</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://travelsgcc.com/wp-content/uploads/2020/03/vung-dat-kien-giang-7.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Kiên Giang</h1>
          <h2>40 Hotels</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://phunugioi.com/wp-content/uploads/2020/10/anh-ha-noi.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Hà Nội</h1>
          <h2>40 Hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
