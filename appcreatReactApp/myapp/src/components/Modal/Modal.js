import React from 'react'
import ModalHeader from './ModalHeader'
import Select from '../Select'
import ModalFooter from './ModalFooter'
import Input from '../Input'


                
export default function Modal({method,object = {}, cambiarModal = () => {}, handleInput = () => {} , createEntity = () => {}}){

    

    return <>       
    
        <div className="modal fade" id="ModalAdd" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
             <div className="modal-dialog">
                <div className="modal-content">   
                    <ModalHeader cambiarModal= {cambiarModal}/>
                    <div className="modal-body">
                        <form id="form">
                            
                            <Select onChange={handleInput} options={[{value:"Dog",tag:"Dog"},
                                                {value:'Cat',tag:'Cat'},
                                                {value:'Bird',tag:'Bird'},
                                                {value:'Other',tag:'Other'}
                                                ]} 
                                    fieldName='kind'
                                    placeholder='Kind Of Animal'
                                    method={method}
                                    value = {object.kind}
                            />
                            <div className="row">
                                <div className="col">
                                    <Input method={method} value={object.name} onInput={handleInput} type= "text" fieldName = "name" placeholder= 'Name'/>                                    
                                </div>
                                <div className="col">
                                    <Input method={method} value={object.owner} onInput={handleInput} type= "text" fieldName = "owner" placeholder= 'Owner'/>       
                                </div>
                            </div>
                                
                        </form>
                    </div>

                    <ModalFooter createEntity={createEntity} />
                </div>
             </div>
        </div>
    </>
}   