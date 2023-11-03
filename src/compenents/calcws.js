import React, { useState } from 'react'

export default function Calcws() {
    //declaration des states
    const [n1,setN1]=useState(0);
    const [n2,setN2]=useState(0);
    const [n3,setN3]=useState(0);
    const mod1=(e)=>{
        setN1(e.target.value);
    }
    const mod2=(e)=>{
        setN2(e.target.value);
    }
    const mod3=(e)=>{
        setN3(e.target.value);
    }
    const somme=()=>{
        setN3(Number(n1)+Number(n2));
    }
  return (
    <div>
       <h1>calcul with states</h1>
      nombre 1: <input type="text" onChange={(e)=>mod1(e)} value={n1} /> &nbsp;&nbsp;
      nombre 2: <input type="text" onChange={(e)=>mod2(e)}  value={n2}/> &nbsp;&nbsp;
      <input type="button" value="somme" onClick={somme}/>&nbsp;&nbsp;
      résultat: <input type="text" value={n3} onChange={(e)=>mod3(e)} />
    </div>
  )
}
