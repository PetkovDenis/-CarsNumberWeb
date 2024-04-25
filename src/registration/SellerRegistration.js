import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import "../css/Buttons.css"


import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';


function SellerRegistration () {
    
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[firstName,setFirstName]=useState('')
    const[middleName,setMiddleName]=useState('')
    const[lastName,setLastName]=useState('')
    const[phoneNumber,setPhoneNumber]=useState('')
    const[email,setEmail]=useState('')

    const handleClick=(e)=>{
        e.preventDefault()
        const client={firstName, middleName, lastName, phoneNumber, email}
        fetch("http://localhost:8080/seller/save",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(client)
      }).then(()=>{
        console.log("New Client added")
      })
    }

    return (
        <>
        <p className="title">Регистрация</p>
    <TextField id="outlined-basic" label="Client name" variant="outlined" fullWidth  value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
    <TextField id="outlined-basic" label="Client middleName" variant="outlined" fullWidth  value={middleName} onChange={(e)=>setMiddleName(e.target.value)}/>
    <TextField id="outlined-basic" label="Client lastName" variant="outlined" fullWidth  value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
    <TextField id="outlined-basic" label="Client phoneNumber" variant="outlined" fullWidth  value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
    <TextField id="outlined-basic" label="Client email" variant="outlined" fullWidth  value={email} onChange={(e)=>setEmail(e.target.value)}/>
  
  <Button variant="contained" color="secondary" onClick={handleClick}>
Submit
</Button>

<h2>
         <a href="http://localhost:3000/logOrReg">Вернуться назад</a>   
        </h2>
    </>
    );
}
export default SellerRegistration;
 