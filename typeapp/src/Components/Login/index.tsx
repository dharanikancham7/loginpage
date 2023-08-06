import { Component} from "react";
import Box from '@mui/material/Box';
import { TextField,Typography,InputLabel, Button } from "@mui/material";
import facebook from './38798-facebook-logo-effect.json'
import google from "./98499-google.json"
import twitter from "./99282-twitter.json"
import Lottie from "lottie-react"
import "./index.css"
import {Link} from "react-router-dom"
//import { useNavigate } from 'react-router-dom'
import Navigation from "../Navigation";
import { Password } from "@mui/icons-material";

interface Istate{
    name:string,
    password:string,
}
interface Iprops{
    navigate:any

}

// const Navigation = (Component: any) => {
//     const Content = (props: any) => {
//       const navigate = useNavigate();
//       return <Component {...props} navigate={navigate} />;
//     };  
//     return Content;
//   };
class Login extends Component<Iprops,Istate>{
    constructor(props:Iprops){
        super(props)
        this.state={ name:"",password:""}
    }
    onName=(e:any)=>{
        this.setState({name:e.target.value})
    }
    onPassword=(e:any)=>{
        this.setState({password:e.target.value})
    }
    onGetData=()=>{
        const {name,password}=this.state
        const userData:any = localStorage.getItem('Data');
        const final_data=(JSON.parse(userData));
        if (final_data.name==name && final_data.password==password){
            
        }
        this.props.navigate("/home")

    }

    render(){
        const {name,password}=this.state
        console.log(name)
        console.log(password)
        return(
            <Box className="container">
                <Box className="card">
                <Typography className="heading" variant="h4" component="h2">
                    Login
                </Typography>
                <Box className="inputs">
                <Box>
                <InputLabel  htmlFor="name">Username</InputLabel>
                <TextField  onChange={this.onName} className="text-filed" id="name" placeholder="Type Your UserName" label="Standard" variant="filled" />
                </Box>
                <Box>
                <InputLabel>Password</InputLabel>
                <TextField onChange={this.onPassword}  className="text-filed" placeholder="Type Your Password" id="standard-basic" label="Standard" variant="filled" type="password" />
                </Box>
                </Box>
                <Typography paragraph={true}>forget password?</Typography>
                <Box className="buttonss">
                <Button onClick={this.onGetData} className="but">Login</Button>
<Link to="/sign"><Button >Signin</Button></Link>
               
                </Box>
                <Box className="lottie-flex">
                    <Lottie  className="lott" animationData={facebook}/>
                    <Lottie  className="lott" animationData={twitter}/>
                    <Lottie  className="lott" animationData={google}/>
                </Box>
                </Box>
            </Box>
            
        )
        
    }
}
export default Navigation(Login)