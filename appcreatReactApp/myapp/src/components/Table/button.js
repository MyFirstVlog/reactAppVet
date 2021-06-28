import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTrashAlt, faEdit} from "@fortawesome/free-solid-svg-icons"

export default function Button({type ,onClick = () => {}, index = "" }){
    if(type === 'edit'){
        return(
            <button
        type="button"
        onClick={onClick}
        data-bs-toggle="modal"
        data-bs-target="#ModalAdd" 
        className="btn btn-warning editar"        
        onClick = {(e)=>{
            onClick(e,index)
        }}
        
        >
            <FontAwesomeIcon icon={faEdit}/>
        </button>
        )
    }else{
        return(
            <button type="button"
             className="btn btn-danger"
             data-indice={index}
             onClick = {(e)=>{
                onClick(e,index)
            }} 
             ><FontAwesomeIcon icon={faTrashAlt}/>
             </button> 
        )
    }

  
}