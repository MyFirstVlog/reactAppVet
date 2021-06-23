import React from 'react'

export default function ActionsMenu({cambiarModal = {}, titulo}){
    //console.log('cambiar modal', cambiarModal)
    
    return (
        <div className= "action-menu" >
            <h1>{titulo}</h1>
            <button className="btn btn-info" type="button" data-bs-toggle="modal" data-bs-target="#ModalAdd" onClick={cambiarModal} >Add new Pet !!!</button>            
        </div>
    )
}