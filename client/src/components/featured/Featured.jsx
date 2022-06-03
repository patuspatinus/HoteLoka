import "./featured.css";
import { useLocation, useNavigate } from 'react-router-dom';

const Featured = ({destination,date}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const hotels = ["","https://pix8.agoda.net/hotelImages/502/502099/502099_14060516240019719334.jpg?ca=2&ce=1&s=1024x768",
"https://cf.bstatic.com/xdata/images/hotel/max1024x768/136307206.jpg?k=0f1c538c579517adfaa1a976da8c917c555e85fc1c668998acf29b81d5007432&o=&hp=1",
"https://i0.wp.com/kenhhomestay.com/wp-content/uploads/2022/02/radisson-blu-resort-phu-quoc-4.jpg",
"https://cdn1.ivivu.com/iVivu/2018/05/17/17/khu-nghi-duong-fusion-phu-quoc-6-800x450.png"]
  return (
    <div className="featured"> 
      {date &&(
        <>
          <div className="featuredItem">
            <img
                src={hotels[parseInt(destination.hotelID)]}
              alt=""
              className="featuredImg" onClick={()=>{navigate("/list",{ state: {date:location.state.date,destination:destination.hotelID} })}}
            />
            <div className="featuredTitles">
              <h2>{destination.hotelName}</h2>
            </div>
          </div>
        </>
      )}
      { !date &&( 
        <>
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
      </>)}
    </div>
  );
};

export default Featured;
