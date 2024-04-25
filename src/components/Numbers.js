import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import TextField from '@material-ui/core/TextField';

import CarNumber from './img/number1.jpg'

export default function ImgMediaCard() {

    const [uuid,setUUID] = React.useState('')
    const [number,setNumber] = React.useState('')
    const [numbers,setCards]=React.useState([])


 

    function handleClickGetNumber(uuid) { 
      const url = `http://localhost:8080/cards/get/${uuid}`;  
      fetch(url, { 
        method: "GET", 
        headers: { "Content-Type": "application/json" }, 
      })
      .then((response) => response.json()) // Добавлено чтение ответа от сервера 
      .then((data) => { 
        // Тут вы можете что-то делать с полученными данными, например, обновить состояние 
        console.log(data); 
      }) 
      .catch((error) => { 
        console.error('Ошибка:', error);  
      }); 
    } 

    React.useEffect(()=>{
      fetch("http://localhost:8080/cards/list")
      .then(res=>res.json())
      .then((result)=>{
        setCards(result);}

      )},[])

    return (
        <div>
            {numbers.map(card=>(
                <div className='Dives' key={card.number} style={{
                    display: 'inline-grid',
                    maxWidth: "500px",
                    maxHeight: "500px",
                    paddingTop: "80px",
                    paddingLeft: "100px"
                }}>
                    <CardMedia
                        component="img"
                        alt="DEFAULT"
                        height="200"
                        image={CarNumber}
                    />
                    <CardActions> 
            <Button  onClick={() => handleClickGetNumber(card.uuid)}>Перейти к оформлению</Button> 
          </CardActions> 
                </div>))}
        </div>
    );
}
