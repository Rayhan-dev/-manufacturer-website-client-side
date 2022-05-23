import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Home/Navbar';
import PurchasePage from './Pages/PurchasePage';
import Footer from './Components/Home/Footer';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Requireauth from './Hooks/Requireauth';

function App() {
  return (
    <div className="App bg-neutral  text-white">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools/:id" element={
          <Requireauth>
            <PurchasePage />
          </Requireauth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
