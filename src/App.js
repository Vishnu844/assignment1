import './App.css';
import Login from './components/login/Login.js';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/home/Home.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login></Login>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
