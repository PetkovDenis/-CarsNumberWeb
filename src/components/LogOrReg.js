import * as React from 'react';
import '../css/Buttons.css'
import '../css/Tables.css'
export default function LogOrReg() {
    return(
<div>
<table class="table">
  <tr>
    <td class="tableText">Покупатель</td>
    <td class="tableText">Продавец</td>
  </tr>
  <tr>
    <td> <a class="button" href="http://localhost:3000/buyerLogin" color="inherit">Вход</a></td>
    <td> <a class="button" href="http://localhost:3000/sellerLogin" color="inherit">Вход</a></td>
    
  </tr>
  <tr>
    <td> <a class="button" href="http://localhost:3000/buyerRegistration" color="inherit">Регистрация</a></td>
    <td> <a class="button" href="http://localhost:3000/sellerRegistration" color="inherit">Регистрация</a></td>
  </tr>

</table>
</div>
    );
 }