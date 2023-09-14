// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/SignUp' element={<SignUp />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
        </Routes>
        </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;
