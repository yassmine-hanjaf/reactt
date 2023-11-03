import React, { useState } from 'react'
import students from './asset/data'
export default function Dcomp() {
    //declaration du state
    const [arr,setArr]=useState(students);
  return (
    <div>
      <h1>liste des etudiants</h1>
      <table border='3'>
        <tr>
            <th>nom</th>


            <th>ville</th>
        </tr>
        {
            arr.map((element)=>{
                return <tr>
                    <td>{element.nom}</td>
                    <td>{element.ville} </td>
                </tr>
            }
            )
        }
      </table>
    </div>
  )
}
