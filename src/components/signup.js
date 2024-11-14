import React, { useState} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './signup.css'; 
export default function Signup(){
   const [data,setData]=useState({username:"",email:"",password:"",roletype:"",totalfee:"",discount:"",balance:"",duedate:"",clearedfee:""});
   const [show,setShow]=useState(false);
   const handler=(e)=>{
    const {name,value}=e.target;
   
   setData((prevstate)=>
   ({...prevstate,[name]:value})
   )}
   const submitHandler=()=>{
      setShow(true);
        const username={username:data.username,email:data.email,password:data.password,roletype:'student',totalfee:'0',discount:'0',balance:'0',duedate:'0',clearedfee:'0'};
   axios.post('http://localhost:8000/form',username).then((res)=>
   {
    
    setData(res.data)
    console.log(res.data)
    
   })
   alert('registration sucessfull')

   }
    return(
        <div className="container">
      <h1>Signup Page</h1>
      <form>
        <fieldset>
          <label>Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={data.username}
            onChange={handler}
            placeholder="Username"
          />
          <br /><br />
          <label>Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={data.email}
            onChange={handler}
            placeholder="Email"
            required
          />
          <br /><br />
          <label>Enter Password:</label>
          <input
            type="text"
            id="password"
            name="password"
            value={data.password}
            onChange={handler}
            placeholder="Password"
          />
          <br /><br />
          <Link to="/login">Have an account already? Login</Link>
          <br /><br />
          <button onClick={submitHandler}>Submit</button>
        </fieldset>
      </form>
    </div>
    );
}