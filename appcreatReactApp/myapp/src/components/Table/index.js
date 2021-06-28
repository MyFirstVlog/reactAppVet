import React, { useState } from 'react'
import Header from './header'
import Row from './row'

export default function Table({deleteEntity= () => {},entity= [], editEntity = () => {}}){
  /*const [mascotas, setMascotas] = useState([{
    kind:'bird', name: 'Jesus', owner:'Aleximandro'
  },
  {
    kind:'dog', name: 'Joshua', owner:'Alexa'
  }
])*/

  const columns = entity.length > 0 ? Object.keys(entity[0]) : []
    return <>
        <table  className="table table-dark table-stripped table-hover">
            <Header columns = {columns}/>            
              <tbody id="list-pets">              
                {                  
                  entity.map((eachEntity, index)=>
                   <Row key={index} deleteEntity= {deleteEntity} entity={eachEntity} index={index} editEntity = {editEntity}/>
                )
                }
              </tbody>
        </table>
    </>
}