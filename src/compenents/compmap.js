import React, { useState } from 'react'

export default function Compmap() {
    //declaration du state:array
   const [dataarr,setDataarr]=useState(
    [
      {prenom:'yassmine',nom:'hanjaf',ville:'tanger'},
      {prenom:'seem',nom:'fkk',ville:'rabat'},
      {prenom:'malak',nom:'mfk',ville:'casa'}
    ]
   )
        
    
  return (
    <div>
      <h1>liste des etudiants</h1>
      <ul>
        {
          dataarr.map((el,index)=>{
            return <li key={index}>-nom: {el.nom} -prenom: {el.prenom} -ville:{el.ville} index : {index}</li>
          })
        }
      </ul>
    </div>
  )
}
