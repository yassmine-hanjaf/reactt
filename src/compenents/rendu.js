//rendu
import React, { useState } from 'react'
import './rendu.css';
export default function Rendu() {
    const [toogle,setToogle]=useState(true)
    const changer= ()=>setToogle(!toogle);
    let content=toogle? <h1 id='h'>contenu vrai</h1> : <h1 id='hh'>contenu faux</h1>
  return (
    <div>
      {content}
      <h1 className={toogle?'cvrai' :'cfalse'}>titre test </h1>
      <input type='button' value="changer contenu" onClick={changer} />
    </div>
  )
}
