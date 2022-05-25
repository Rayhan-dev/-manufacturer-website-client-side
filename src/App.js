import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Home/Navbar';
import PurchasePage from './Pages/PurchasePage';
import Footer from './Components/Home/Footer';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Requireauth from './Hooks/Requireauth';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import Addreview from './Pages/Addreview';
import MyOrder from './Pages/MyOrder';
import NotFoundPage from './Pages/NotFoundPage';
import ManageOrders from './Components/Dashboard/ManageOrders';
import AddProduct from './Components/Dashboard/AddProduct';
import MakeAdmin from './Components/Dashboard/MakeAdmin';
import ManageProducts from './Components/Dashboard/ManageProducts';

function App() {
  return (
    <div className="App bg-neutral text-white">
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
        <Route path='/dashboard' element={
          <Requireauth>
            <Dashboard></Dashboard>
          </Requireauth>
        }>
          <Route path='myProfile' element={<Profile></Profile>}></Route>
          <Route path='addReview' element={<Addreview></Addreview>}></Route>
          <Route path='myOrders' element={<MyOrder></MyOrder>}></Route>
          <Route path='manageOrders' element={<ManageOrders></ManageOrders>}></Route>
          <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='manageProduct' element={<ManageProducts></ManageProducts>}></Route>
        </Route>
      <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
