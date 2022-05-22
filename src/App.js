import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Home/Navbar';
import PurchasePage from './Pages/PurchasePage';

function App() {
  return (
    <div className="App bg-neutral text-white">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools/:id" element={<PurchasePage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
