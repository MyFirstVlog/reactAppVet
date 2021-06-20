import React from 'react'

export default function ActionsMenu({cambiarModal = {}}){
    //console.log('cambiar modal', cambiarModal)
    
    return (
        <div className= "action-menu" >
            <button className="btn btn-info" type="button" data-bs-toggle="modal" data-bs-target="#ModalAdd" onClick={cambiarModal} >Add new Pet !!!</button>            
        </div>
    )
}