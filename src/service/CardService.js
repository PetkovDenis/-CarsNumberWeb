import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';

export default function ServiceCard() {

    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[number,setName]=useState('')
    const[address,setAddress]=useState('')
    const[students,setStudents]=useState([])
    const classes = useStyles();

    const handleClick=(e)=>{
        e.preventDefault()
        const card={name,address}
        console.log(card)
        fetch("http://localhost:8080/card/add",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(card)
    
      }).then(()=>{
        console.log("New card added")
      })
    }
}
