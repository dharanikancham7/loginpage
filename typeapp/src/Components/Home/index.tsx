import {Component, ReactNode} from "react"
import Navigation from "../Navigation"
interface Istate{
    navigate:any;

}
interface Iprops{
    navigate:any;

}


class Home extends  Component<Istate,Iprops>{
    constructor(props:Iprops){
        super(props)
        // this.state={gsgdhs=""}
    }

    onLogout=()=>{
        this.props.navigate("/")
    }


    render(){
        return(
<div>
    <h1>Home page</h1>
    <button onClick={this.onLogout}>logout</button>

</div>
        )

    }
        
    }
    export default Navigation(Home);
