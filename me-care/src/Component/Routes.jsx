import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

import MassageChairPage from "../Pages/MassageChair";

function AllRoutes() {
    return (
      
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/massagechair" element={<MassageChairPage />}></Route>
          
        </Routes>
      
    );
  }
  
  export default AllRoutes;