import React from 'react'
import ModalHeader from './ModalHeader'
import Select from '../Select'
import ModalFooter from './ModalFooter'
import Input from '../Input'


export default function Modal({cambiarModal = () => {} }){



    return <>       
    
        <div className="modal fade" id="ModalAdd" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
             <div className="modal-dialog">
                <div className="modal-content">   
                    <ModalHeader cambiarModal= {cambiarModal}/>
                    <div className="modal-body">
                        <form id="form">
                            
                            <Select options={[{value:"Dog",tag:"Dog"},
                                                {value:'Cat',tag:'Cat'},
                                                {value:'Bird',tag:'Bird'},
                                                {value:'Other',tag:'Other'}
                                                ]} 
                                    fieldName='Kind Of Animal'
                            />
                            <div className="row">
                                <div className="col">
                                    <Input type= "text" fieldName = "petname"/>                                    
                                </div>
                                <div className="col">
                                    <Input type= "text" fieldName = "owner"/>       
                                </div>
                            </div>
                                
                        </form>
                    </div>

                    <ModalFooter cambiarModal= {cambiarModal} />
                </div>
             </div>
        </div>
    </>
}   