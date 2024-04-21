import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cards from "./Numbers";
import SellerLogin from "../login/SellerLogin";
import BuyerLogin from "../login/BuyerLogin"
import LogOrReg from "./LogOrReg";

 
import BuyerRegistration from "../registration/BuyerRegistration"
 
import SellerRegistration from "../registration/SellerRegistration";

export default function RegConfig() {

  return (
    <BrowserRouter>
      <Routes>
            <Route path="numbers" element={<Cards />} /> 
            <Route path="sellerRegistration" element={<SellerRegistration/>}/>
            <Route path="buyerRegistration" element={<BuyerRegistration/>}/>
            <Route path="sellerLogin" element={<SellerLogin/>}/>
            <Route path="buyerLogin" element={<BuyerLogin/>}/>
            <Route path="logOrReg" element={<LogOrReg/>}/>
       </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RegConfig />);
