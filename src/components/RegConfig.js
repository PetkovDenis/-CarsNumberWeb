import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Registration from './Registration'


export default function RegConfig() {

  return (
    <BrowserRouter>
      <Routes>
           <Route path="home" element={<Home />} /> 
            <Route path="registration" element={<Registration/>}/>
        </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RegConfig />);
