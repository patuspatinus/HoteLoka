import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import SearchItem from "../../components/searchItem/SearchItem";
import Axios from "axios";
import moment from "moment";
const List = () => {
    const location = useLocation();
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState([]);
    const destination = location.state.destination;
    const dates = location.state.date;
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays;
    }
    const days = dayDifference(dates[0].endDate, dates[0].startDate);
    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            const res = await Axios.post("http://localhost:5000/list",{hotelID:destination,date:moment(dates[0].startDate).format('YYYY-MM-DD'),timeStaying:days});
            setData(res.data);
          } catch (err) {
            console.log(err);
          }
          setLoading(false);
        };
        fetchData();
      },[]);
    return (
    <div>
      <Navbar />
      <Header type="list"/>
        <div className="listResult">
          {loading ? (
                "loading"
              ) : (
                <>
                  {data.map((item) => (
                    <SearchItem item={item} key={item._id} />
                  ))}
                </>
              )}
          </div>
    </div>
  );
};

export default List;