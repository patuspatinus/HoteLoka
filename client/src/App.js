import './routes/authen/login'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Login from './routes/authen/login';
import Register from './routes/authen/register';
import Home from './routes/filter/findPlaces';
import SearchItem from './components/searchItem/SearchItem';
import List from './routes/filter/results';
import Profile from './routes/authen/profile';
import Filter from './routes/filter/Filter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Login/>} />
        <Route path = "/register" element = {<Register/>}/>
        <Route path = "/gethotels" element = {<Home/>}/>
        <Route path = "/filter" element = {<Filter/>}/>
        <Route path = "/list" element = {<List/>}/>
        <Route path = "/profile" element ={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
