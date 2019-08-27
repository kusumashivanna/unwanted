import React from "react";
import "./App.css";
import "./App"
import HomePage from "./component/HomePage"
import Findaride from "./component/Findaride"
import Offeraride from "./component/Offeraride"
import Signup from "./component/Signup"

import Signin from"./component/Signin"
import Userlogin from "./component/Userlogin"
import { BrowserRouter , Route} from "react-router-dom";
import SignInPage from "./component/Signin";


function App() {
  return (
    <BrowserRouter>
    <Route path="/" component={HomePage} exact="true"/>
     <Route path="/Findaride" component={Findaride}/>
     <Route path="/Offeraride" component={Offeraride}/>
     <Route path="/Signup" component={Signup}/>
     <Route path="/Login" component={SignInPage}/>
     <Route path="/Sign_in" component={Signin}/>
     <Route path="/Sign_Up_Now" component={Signup}/>
     <Route path="/Userlogin" component={Userlogin}/>
     </BrowserRouter>
    
  );
}

export default App;
