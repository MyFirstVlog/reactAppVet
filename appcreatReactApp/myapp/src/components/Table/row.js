import React from 'react'
import Button from './button'
export default function Row({deleteEntity = ()=>{},entity, index,column=[], editEntity = () => {}}){
  const testField = ({entity,eachColumn})=>{
      //debugger
      if( typeof entity[eachColumn] === 'object'){
        //debugger
          if(eachColumn === "pet") return `${entity[eachColumn].name} (${entity[eachColumn].kind}) `
          else return `${entity[eachColumn].name} ${entity[eachColumn].lName} `
          
      }
      return entity[eachColumn]
  }
 
    return(
    
        <tr>
          <th scope="row">{index}</th>
          {
            
            column.map((eachColumn,_index)=>(
              <td key={`col-${eachColumn}-${_index}`} >{testField({entity,eachColumn})}</td>
            ))
          }
          <td key={index}>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <Button type='edit' onClick={editEntity} index = {index}/>
                <Button type='delete' onClick={deleteEntity} index = {index}/>          
            </div>
          </td>
        </tr>
      
    )
    
}