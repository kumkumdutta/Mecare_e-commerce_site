import { Routes, Route } from "react-router-dom";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
// import CartPage from "../Pages/Cart";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

import MassageChairPage from "../Pages/MassageChair";
import Success from "../Pages/Payment";
import ControlledUsage from "../Pages/popup";
import Simple from "../Pages/singleProductPage";
import EyeSection from "../Pages/Eye";

function AllRoutes() {
    return (
      
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/massagechair" element={<MassageChairPage />}></Route>
          <Route path="/eye" element={<EyeSection />}></Route>
          <Route path="/massagechair/:id" element={<Simple/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>
          <Route path="/success" element={<Success/>}></Route>
          <Route path="/addtocart" element={<ControlledUsage/>}></Route>
          
        </Routes>
      
    );
  }
  
  export default AllRoutes;