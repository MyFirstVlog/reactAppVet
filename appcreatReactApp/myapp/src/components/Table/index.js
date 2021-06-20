import React, { useState } from 'react'
import Header from './header'
import Row from './row'

export default function Table(){
  const [mascotas, setMascotas] = useState([{
    kind:'bird', name: 'Jesus', owner:'Aleximandro'
  },
  {
    kind:'dog', name: 'Joshua', owner:'Alexa'
  }
])

  const columns = mascotas.length > 0 ? Object.keys(mascotas[0]) : []
    return <>
        <table className="table table-dark table-stripped table-hover">
            <Header columns = {columns}/>            
              <tbody id="list-pets">              
                {                  
                  mascotas.map((pet, index)=>
                   <Row pet={pet} index={index}/>
                )
                }
              </tbody>
        </table>
    </>
}