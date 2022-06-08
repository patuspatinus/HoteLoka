import Axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./searchItem.css";
import moment from "moment";

const SearchItem = ({ item }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const dates = location.state.date;
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays;
    }
    const days = dayDifference(dates[0].endDate, dates[0].startDate);
    const photo = ["", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/255900294.jpg?k=8afe07281fdb0f30ab8e4f2e38862ce50c5eeb4095141ba565d6fc12f4c54ecb&o=",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/255899668.jpg?k=acd8ae93ac6db9f74119daf6c09e977954e830d9c8a0d9f6889fc7c9b9fa58a8&o=",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/255900227.jpg?k=5cd4cd8bcea0ac1081969bf9014a6e5f01489ebe3d16807ac39074211f8665c7&o=",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/255899919.jpg?k=971e50e8416a3b384ecb931a551432b7dee7d44d1cbd1b2019f59fd9a1128b05&o=",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/255900510.jpg?k=9c91bb0e61affb635f26f5759278151ad73c2299b6dfd7ed0c09246764964364&o=",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/256999691.jpg?k=e206c6de4d792e32e4be0bf6487f2c2ea4ce91d535bbf8ec2974f0724b703c43&o=",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/255900134.jpg?k=27cd119f0f4a945fe993c6af981f1401b45cc215234456b5071c7609923ddf9a&o=",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/256994893.jpg?k=4d5938d79752d493be7ae5bba205b36a8dd93b39475eb8bd139796385d84240a&o=",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/136293250.jpg?k=8bc8182e504170843f58806cc4bb45779a12595d168e3fae24cea121ff17c133&o=",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/136306324.jpg?k=94d58b4827a9d4f6333bcef070a7900ad7ac6799e760061815851a62f2c1cad2&o=",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/163466681.jpg?k=7ba37b8cd91649c19225004e66e28b3d7594efa2e34fef35f3f02b4797eb60d7&o=",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/163466678.jpg?k=ea3a3d3967057abe9afce9a91561af87e865fe4e3d926f15b8ac530c3717f9f4&o=",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/189280170.jpg?k=a5f5d91c952d3efcc9b573c2ae0e7424368a75d77fde30f015037c8854a49dca&o=",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/60884657.jpg?k=0bd65b9d90295e8318d75605bb92d684da3b903a1b6f24f46a3b9594004eba6e&o=",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/107557147.jpg?k=0b5953809c2ebe4b5a7b6734f1de05bb6985186eb4c42b3738347e150e502aad&o=",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/107557181.jpg?k=4f0a78420638dddea84c3b9381dde919f1dd96777c03ae70cd84da43511884f5&o=]",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/268826251.jpg?k=dd184e9c20ecfe15c1e4955f768c313e70fc6acc6cb0257d6a6146de4a5ee6cc&o=",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/186389124.jpg?k=6a4e253864228d35ba7b518ef5e6232def072e2ee3ccf1d366482c3c9722f552&o=",
        " https://cf.bstatic.com/xdata/images/hotel/max1024x768/159814537.jpg?k=65bec8a018d52cde99d8ebd56fbd5b42add70bfaa02fb16593a0509394ed32c7&o=",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/281624373.jpg?k=97cc244d88e66a07cbd400e34a6a5e2fb3a012d436dc54b8b4ab09987f0e1141&o=",
        " https://cf.bstatic.com/xdata/images/hotel/max1024x768/160097952.jpg?k=4e63016f71abe6edd608d3563d0f2da591485ea49d34b6aa95155dcc6d555b12&o=",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/281624662.jpg?k=34ef4fd04818f94bcbb394dac5025d225c970c97626fb5b119ab743d216059a4&o=",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/281624345.jpg?k=66714c6ae202d494c1016cf0cd563456f6097aeee1da03940f8b2df23fb47cb1&o=",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/105324182.jpg?k=08b15df13ff8a57c94e3a9f314a62d288fd6b3751b64a59375e6d76f80c5a43b&o=",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/105324631.jpg?k=a0453bce8e5cf37932f3d49b3f43e000d0d0de8a988aacd07e41762a1fbe303d&o=",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/105325014.jpg?k=80e3e9f07ea3aafe37b5f73961474cc24660ed4752c382bbe9c9f62e35a6109d&o="]
    const booking = async () => {

        const user = JSON.parse(localStorage.getItem("user"));
        Axios.post("http://localhost:5000/bookroom", { customerID: user.customerID, roomID: item.roomID, bookTime: moment(dates[0].startDate).format('YYYY-MM-DD'), timeStaying: days }).then(respond => {
            Axios.post("http://localhost:5000/addpayment",{customerID: user.customerID, amount: item.roomPrice*days, date: moment(dates[0].startDate).format('YYYY-MM-DD')}).then(()=>{
                alert("Success");
                navigate("/profile");
            })
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
                <span className="siCancelOp">Take it or leave it </span>
                <span className="siCancelOpSubtitle">
                    Punk!
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
                        <button onClick={booking} className="siCheckButton">BOOK NOW!!!</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;
