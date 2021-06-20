import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTrashAlt, faEdit} from "@fortawesome/free-solid-svg-icons"
export default function Row({pet, index}){
    
    return(
    
        <tr>
          <th scope="row">{index}</th>
          <td >{pet.kind}</td>
          <td>{pet.name}</td>
          <td>{pet.owner}</td>
          <td>
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" data-bs-toggle="modal" data-bs-target="#ModalAdd" class="btn btn-warning editar" data-indice={index} onclick="editar(this)"><FontAwesomeIcon icon={faEdit}/></button>
                <button type="button" class="btn btn-danger" data-indice={index} onclick="deletePet(this)" ><FontAwesomeIcon icon={faTrashAlt}/></button>            
            </div>
          </td>
        </tr>
      
    )
    
}