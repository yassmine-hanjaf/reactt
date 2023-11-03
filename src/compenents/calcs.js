import React from 'react'
import './st1.css'
export default function calcs() {
    const somme=()=>{
        let s = Number(document.getElementById("n1").value)+Number(document.getElementById("n2").value);
        document.getElementById("n3").value=s;
    }
  return (
    <div>
        <h1>calcul without states</h1>
      nombre 1: <input type="text" id='n1' /> &nbsp;&nbsp;
      nombre 2: <input type="text" id='n2'  /> &nbsp;&nbsp;
      <input type="button" value="somme" onClick={somme} />&nbsp;&nbsp;
      résultat: <input type="text" id='n3' />
    </div>
  )
}
