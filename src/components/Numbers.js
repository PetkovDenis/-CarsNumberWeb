import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import CarNumber from './img/vor2.jpeg'

export default function ImgMediaCard() {

    const [uuid,setUUID] = React.useState('')
    const [number,setNumber] = React.useState('')
    const [numbers,setCards]=React.useState([])

    const handleClickAddBook=(e)=> {
        e.preventDefault()
        const card ={uuid,number}
        console.log(card)
        fetch("http://localhost:8080/card/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(card)
        })
    }


    React.useEffect(()=>{
      fetch("http://localhost:8080/cards/list")
      .then(res=>res.json())
      .then((result)=>{
        setCards(result);}

      )},[])

    return (

        <div  >

            {numbers.map(card=>(
                <div className='Dives' key={card.number} style={{
                    display: 'inline-grid',
                    maxWidth: "500px",
                    maxHeight: "500px",
                    paddingTop: "80px",
                    // paddingRight: "100px",
                    paddingLeft: "100px"
                }}>

                    <CardMedia
                        component="img"
                        alt="DEFAULT"
                        height="200"
                        image={CarNumber}
                    />


                    <Typography  align='center' variant="body2" >
                        {/* Uuid: {card.uuid} <p/> */}


                        Номер машины: {card.number}
                    </Typography>

                    <CardActions>

                        <Button size="small" onClick={handleClickAddBook}>Перейти к оформлению</Button>
                    </CardActions>
                </div>))}
        </div>
    );


}