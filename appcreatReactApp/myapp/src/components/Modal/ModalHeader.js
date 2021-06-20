import React from 'react'

export default function ModalHeader({cambiarModal= () => {}}){
    return (
        <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">New Pet</h5>
            <button onClick= {cambiarModal} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
    )
}