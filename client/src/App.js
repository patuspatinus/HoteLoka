import './routes/authen/login'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './routes/authen/login';
import Register from './routes/authen/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Login/>} />
        <Route path = "/register" element = {<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
