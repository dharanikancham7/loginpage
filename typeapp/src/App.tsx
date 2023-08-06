import { Component } from "react";
//import {Route,Browser}from "./react-router-dom"
import { BrowserRouter, Route ,Routes,Navigate} from "react-router-dom";

import Login from "./Components/Login";
 import Signin from "./Components/Signin";
 import Home from "./Components/Home";

interface Istate{

}
interface Iprops{

}
class App extends Component<Iprops,Istate>{
    constructor(props:Iprops){
        super(props)
        this.state={}
    }
    render(){
        return(<BrowserRouter>
            {/* <Login/>
             <Signin/>  */}
             <Routes>
             <Route path="/" Component={Login}/>
             <Route path="/sign" Component={Signin}/>
             <Route path="/home" Component={Home}/>
             <Route path="/redirect" element={<Navigate to="/"/>}/>
             </Routes>
        
            </BrowserRouter>
        )
        
    }
}
export default App