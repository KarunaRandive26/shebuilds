import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import SetForm from './components/SetForm1';
import Products from './components/Products';
;

function App() {
  return (
    <>
    <div className='main'><div className='App'>
    <div className='custom-nav'>
    <Navbar/>
    </div>
        <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/contact" element={<Contact/>} /> 
           <Route path="/login" element={<Login/>} />
           <Route path="/signup" element={<Signup/>} />
           <Route path="/dashboard" element={<Dashboard/>} />
           <Route path="/setbuisness" element={<SetForm/>} />
           <Route path="/products" element={<Products/>} />
        </Routes>
        </div>
    </div>
    </>  
  );
}

export default App;
