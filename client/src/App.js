import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Placeorder from './Pages/Placeorder/Placeorder';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  return (
    <div className="App">
        
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sign-in' element={<Login />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<Placeorder/>}/>
        </Routes> 
        </BrowserRouter>

    </div>
  );
}

export default App;
