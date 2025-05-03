import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Address from "./Pages/Contact/nested/Address";
import Email from "./Pages/Contact/nested/Email";



const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about/:username" Component={About} />
          <Route path="/contact/" Component={Contact} >
            <Route path="address" Component={Address}/>
            <Route path="email" Component={Email}/>
          </Route>
          <Route path="*" Component={ErrorPage} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}


export default App