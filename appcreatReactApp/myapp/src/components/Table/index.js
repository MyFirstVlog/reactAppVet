import React, { useState } from 'react'
import Header from './header'
import Row from './row'

export default function Table({entity= []}){
  /*const [mascotas, setMascotas] = useState([{
    kind:'bird', name: 'Jesus', owner:'Aleximandro'
  },
  {
    kind:'dog', name: 'Joshua', owner:'Alexa'
  }
])*/

  const columns = entity.length > 0 ? Object.keys(entity[0]) : []
    return <>
        <table className="table table-dark table-stripped table-hover">
            <Header columns = {columns}/>            
              <tbody id="list-pets">              
                {                  
                  entity.map((eachEntity, index)=>
                   <Row entity={eachEntity} index={index}/>
                )
                }
              </tbody>
        </table>
    </>
}