import React, { useState } from 'react'

export default function Cradio() {
    const [sexe,setSexe]=useState('');
  return (
    <div>
      <h1>exemple radio btn:</h1>
      <h2>sexe: {sexe} </h2>
      <input type="radio" name="se" value="f" onClick={()=>setSexe('f')} />f
      <input type="radio" name="se" value="m" onClick={()=>setSexe('m')}  />m
    </div>
  )
}
