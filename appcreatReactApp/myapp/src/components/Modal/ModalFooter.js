import React from 'react'

export default function ModalFooter({cambiarModal = () => {}, createEntity = () => {}}){
    
    return (
        <div className="modal-footer">
            <button type="button"  className="btn btn-secondary" data-bs-dismiss="modal" onClick={cambiarModal} >Close</button>
            <button id = "saveButton" type="button" data-bs-dismiss="modal" className="btn btn-primary" onClick={()=>{
                                                                                                    createEntity()
                                                                                                    cambiarModal()
                                                                                                    }}>Save</button>
        </div>
    )
 //data-bs-toggle="modal" data-bs-target="#ModalAdd"    
}