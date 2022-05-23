import './routes/authen/login'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './routes/authen/login';
import Register from './routes/authen/register';
import GetHotels from './routes/filter/hotels';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Login/>} />
        <Route path = "/register" element = {<Register/>}/>
        <Route path = "/gethotels" element = {<GetHotels/>}/>
      </Routes>
    </Router>
  );
}

export default App;
