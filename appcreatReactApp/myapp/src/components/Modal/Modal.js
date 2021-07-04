import React from 'react'
import ModalHeader from './ModalHeader'
import Select from '../Select'
import ModalFooter from './ModalFooter'
import Input from '../Input'

const typesPets = [{value:"Dog",tag:"Dog"},
{value:'Cat',tag:'Cat'},
{value:'Bird',tag:'Bird'},
{value:'Other',tag:'Other'}
]
                
export default function Modal({handleInput=()=>{},method="POST",objeto={},children = [] , cambiarModal = () => {}, createEntity = () => {}}){

    console.log('object in modal', objeto)

    return <>       
    
        <div className="modal fade" id="ModalAdd" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
             <div className="modal-dialog">
                <div className="modal-content">   
                    <ModalHeader cambiarModal= {cambiarModal}/>
                    <div className="modal-body">
                        <form id="form">                        
                    
                            <div className="form-row">
                                {children}
                            </div>
                                
                        </form>
                    </div>

                    <ModalFooter cambiarModal= {cambiarModal} createEntity={createEntity} />
                </div>
             </div>
        </div>
    </>
}   

/**
 {children} in a div row

<Select onChange={handleInput} options={typesPets} 
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

 */




/**
 * funcionamndo
 * 
 * import React from 'react'
import ModalHeader from './ModalHeader'
import Select from '../Select'
import ModalFooter from './ModalFooter'
import Input from '../Input'

const typesPets = [{value:"Dog",tag:"Dog"},
{value:'Cat',tag:'Cat'},
{value:'Bird',tag:'Bird'},
{value:'Other',tag:'Other'}
]
                
export default function Modal({handleInput=()=>{},method="POST",objeto={},children = [] , cambiarModal = () => {}, createEntity = () => {}}){

    console.log('object in modal', objeto)

    return <>       
    
        <div className="modal fade" id="ModalAdd" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
             <div className="modal-dialog">
                <div className="modal-content">   
                    <ModalHeader cambiarModal= {cambiarModal}/>
                    <div className="modal-body">
                        <form id="form">                        
                        <Select onChange={handleInput} options={typesPets} 
                                    fieldName='kind'
                                    placeholder='Kind Of Animal'
                                    method={method}
                                    value = {objeto.kind}
                                    
                                    
                            />
                            <div className="row">
                                <div className="col">
                                   <Input method={method} type='text' fieldName="name" onInput={handleInput} placeholder="Name" value={objeto.name}>
                                   </Input>                                  
                                </div>
                                <div className="col">
                                <Input method={method} type='text' fieldName="owner" onInput={handleInput} placeholder="Owner" value = {objeto.owner}>
                                   </Input>
                                </div>
                            </div>
                                
                        </form>
                    </div>

                    <ModalFooter cambiarModal= {cambiarModal} createEntity={createEntity} />
                </div>
             </div>
        </div>
    </>
}   n
 */