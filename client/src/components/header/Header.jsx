import {
    faBed,
    faCalendarDays,
    faCar,
    faCircleInfo,
    faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
const Header = ({ type }) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    const navigate = useNavigate();
    const logOut = () => {
        localStorage.clear();
        navigate("/");
    }
    const handleSearch = async () => {
        let res = await Axios.post("http://localhost:5000/filter", {
            location: destination,
        });
        localStorage.setItem("destination", JSON.stringify(res.data));
        navigate("/filter", { state: { date } });
    };

    return (
        <div className="header">
            <div
                className={
                    type === "list"
                        ? "headerContainer listMode"
                        : "headerContainer"
                }
            >
                <div className="headerList">
                    <p>Since our developer is busy grinding for mmr, you can only search hotels from "Da Nang" and "Kien Giang" </p>
                </div>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCircleInfo} />
                        <span>About us</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                {type !== "list" && (
                    <>
                        <button className="headerBtn" onClick = {logOut}>
                            Log Out
                        </button>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon
                                    icon={faBed}
                                    className="headerIcon"
                                />
                                <input
                                    type="text"
                                    placeholder="Where are you going?"
                                    className="headerSearchInput"
                                    onChange={(e) =>
                                        setDestination(e.target.value)
                                    }
                                />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon
                                    icon={faCalendarDays}
                                    className="headerIcon"
                                />
                                <span
                                    onClick={() => setOpenDate(!openDate)}
                                    className="headerSearchText"
                                >{`${format(
                                    date[0].startDate,
                                    "MM/dd/yyyy"
                                )} to ${format(
                                    date[0].endDate,
                                    "MM/dd/yyyy"
                                )}`}</span>
                                {openDate && (
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={(item) =>
                                            setDate([item.selection])
                                        }
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        className="date"
                                        minDate={new Date()}
                                    />
                                )}
                            </div>
                            <div className="headerSearchItem">
                                <button
                                    className="headerBtn"
                                    onClick={handleSearch}
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;
