import React from 'react'
import Button from './button'
export default function Row({deleteEntity = ()=>{},entity, index, editEntity = () => {}}){
    
    return(
    
        <tr>
          <th scope="row">{index}</th>
          <td >{entity.kind}</td>
          <td>{entity.name}</td>
          <td>{entity.owner}</td>
          <td key={index}>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <Button type='edit' onClick={editEntity} index = {index}/>
                <Button type='delete' onClick={deleteEntity} index = {index}/>          
            </div>
          </td>
        </tr>
      
    )
    
}