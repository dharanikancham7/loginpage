import { Component} from "react";
import Box from '@mui/material/Box';
import { TextField,Typography,InputLabel, Button } from "@mui/material"; //import { useNavigate } from 'react-router-dom'
import "./index.css"
import Navigation from "../Navigation";

interface Istate{
    name:string,
    password:string,
    email:string,
    currentPassword:string,
    errorMessage:string


}
interface Iprops{
    navigate:any;

}

// const Navigation = (Component: any) => {
//     const Content = (props: any) => {
//       const navigate = useNavigate();
//       return <Component {...props} navigate={navigate} />;
//     };
//     return Content;
//   };

class Signin extends Component<Iprops,Istate>{
    constructor(props:Iprops){
        super(props)
        this.state={name:"",password:"",email:"",currentPassword:"",errorMessage:""}
    }
    onName=(e:any)=>{
        this.setState({name:e.target.value})
    }
    onPassword=(e:any)=>{
        this.setState({password:e.target.value})
    }
    onEmail=(e:any)=>{
        this.setState({email:e.target.value})
    }
    onCurrentPassword=(e:any)=>{
        this.setState({currentPassword:e.target.value})
    }
    onButtonClick=()=>{
    
        const {name,password,email,currentPassword}=this.state
        const obj:any={
            name,
            password,
            email,
          currentPassword

        }
        if ((name=="" ) || (password=="") || (email=="") || (currentPassword==""))  {
            this.setState({errorMessage:"please enter vaild details"})
        }else{
            this.setState({errorMessage:"sign sucessfull"})
            localStorage.setItem("Data",JSON.stringify(obj))
           
            
            
           
        }
        this.props.navigate("/")
        
    }
    render(){
        const values =this.state
        console.log(values)
        
        return(
            <Box className="container">
            <Box className="card">
            <Typography className="heading" variant="h4" component="h2">
                Sign 
            </Typography>
            <Box className="inputs">
            <Box>
            <InputLabel htmlFor="name">Username</InputLabel>
            <TextField  onChange={this.onName}className="text-filed" id="name" placeholder="Type Your UserName" label="Standard" variant="filled" />
            </Box>
            
            <Box>
            <InputLabel htmlFor="name">email</InputLabel>
            <TextField onChange={this.onEmail} className="text-filed" id="name" placeholder="Type Your UserName" label="Standard" variant="filled" />
            </Box>
            <Box>
            <InputLabel>Password</InputLabel>
            <TextField onChange={this.onPassword} className="text-filed" placeholder="Type Your Password" id="standard-basic" label="Standard" variant="filled" type="password" />
            </Box>
            <Box>
            <InputLabel>Current password</InputLabel>
            <TextField onChange={this.onCurrentPassword} className="text-filed" placeholder="Type Your Password" id="standard-basic" label="Standard" variant="filled" type="password" />
            </Box>
            </Box>
            <Typography paragraph={true}>forget password?</Typography>
            <Box className="buttonss">
                {/* <Link to='/'> <Button onClick={this.onButtonClick} className="but">Login</Button></Link> */}
                <Button onClick={this.onButtonClick} className="but">Login</Button>
               
                 {/* <Button className="but">Submit</Button> */}
        

           
            </Box>
            <Typography>{this.state.errorMessage}</Typography>
            </Box>
        </Box>
        
    )
    
}
        
        

}
export default Navigation(Signin);