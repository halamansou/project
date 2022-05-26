import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const Login=()=>{
    const[userName,setusername]= useState('');
    const[password,setpassword]= useState('');
    const login=async()=>{
        const api_url=`https://fci-back-end.herokuapp.com/login`;
        const response = await axios.post(api_url,{userName, password});
        const {data}=response;
        console.log(data);
    };
    const onuserchanged=(event)=>{
        setusername(event.target.value);
    };
    const onpasswordchanged=(event)=>{
        setpassword(event.target.value);
    };
 
    return(
    <div className="form">
        <input onChange={onuserchanged} placeholder="User name"/>
        <input onChange={onpasswordchanged} placeholder="Password"/>
        <button onClick={login}><Link to="/Home"><span>login</span></Link></button> 
    </div>
    );

};
export default Login;
