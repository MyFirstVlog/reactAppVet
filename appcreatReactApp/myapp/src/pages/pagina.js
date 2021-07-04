import React, {Component} from 'react'
import Nav from '../components/Nav/Nav.js'
import Modal from '../components/Modal/Modal.js'
import Table from '../components/Table/index.js'
import ActionsMenu from '../components/ActionsMenu/index.js'
import './pagina.css'
import {listarEntidad, crearEntidad, eliminarEntidad} from '../servicio'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import Select from '../components/Select/index.js'
import Input from '../components/Input/index.js'

const opcionesIniciales = {
    kind:[{value:"Dog",tag:"Dog"},
    {value:'Cat',tag:'Cat'},
    {value:'Bird',tag:'Bird'},
    {value:'Other',tag:'Other'}
    ],
    country:[{value:"Colombia",tag:"Colombia"},
    {value:'Costa Rica',tag:'Costa Rica'},
    {value:'Netherlands',tag:'Netherlands'},
    {value:'USA',tag:'USA'}
    ]
}


const FieldComponent = ({handleInput=()=>{}, object={}, method='', fieldName= '',options={} })=>{
    switch(fieldName){
        case 'kind':
        case 'country':
        case 'pet': 
        case 'vet': 
            return (
                <div className="col">
                   {options[fieldName].length > 0 ? (

                       <Select 
                           fieldName={fieldName}
                           onChange={handleInput} 
                           options={options[fieldName]} 
                           placeholder= {fieldName}
                           method={method}
                           value = {object[fieldName]}
                       />
                   ) : (
                       "Cargando Opciones"
                   )
                   
                    } 
                </div>
            )
        case 'name':
        case 'owner': 
        case 'lName': 
        case 'id':       
        case 'historia': 
        case 'diagnosis': 
            return (
                <div className="col">
                <Input 
                    method={method} 
                    value={object[fieldName]} 
                    onInput={handleInput} 
                    type= "text" 
                    fieldName = {fieldName}
                    placeholder= {fieldName}
                />
                </div>
            )
        default:
                return false
    }
       

}

class Pagina extends Component{

    constructor(props){
        super(props)
        this.state = {
            mostrarModal : true,
            entity :  [],
            object : {},
            idObject : null,
            method : 'POST',
            columns:[],
            options: opcionesIniciales
        }
    }

    cambiarModal = (_e,method) => {
        this.setState({mostrarModal: !this.state.mostrarModal, method})
        //console.log('estado modal',this.state.mostrarModal)
    }

    // en la parte de abajp se pasa el this.cambiarModal -> proque se debe especificar de que clase viene el metodo
    
    /*listEntity = () => {
        const {entity} = this.props
    }*/

    list = async () => {
        const {entity} = this.props 
        const entities = await listarEntidad({entity})
        let columns = []
        if(Array.isArray(entities) && entities.length > 0){
            columns = Object.keys(entities[0]) || [] 
        }
        this.setState({entity: entities, columns})
    }

    /* handleInput = (e) => {
        const {target: {value,name}} = e
        console.log({value, name, e})
        let {object} = this.state
        object = {...object,[name]:value}
        this.setState({object})*/
       // console.log("objeto en el handle", object)

    //}

    handleInput = (e) => {
        e.preventDefault()
        const {target: {value,name}} = e
        console.log({value, name, e});
        let {object} = this.state
        object = {...object,[name]:value}
        this.setState({object})
    }

    createEntity = async (_e=null) => {
        const {entity} = this.props
        let {object, method, idObject} = this.state
        //console.log('este es el id en page', idObject)
        await crearEntidad({entity,object, method , idObject })
        this.cambiarModal()
        this.list()        
    } 

    editEntity = async (e,index) => {   
        //console.log({e,index})
        const object = {...this.state.entity[index]}
        this.setState({object, idObject: index, method: 'PUT'},()=>{
            this.cambiarModal(null,'PUT')
        })
       /* const {entity} = this.props
        const {object} = this.state
        const {method} = 'POST'
        await crearEntidad({entity,object, method})
        this.list()      */  
    } 

    deleteEntity = async (e, index) =>{
        const {entity} = this.props
        const rta = await eliminarEntidad({entity,idObject:index})
        //console.log({rta})
        this.list()
    }

    componentDidMount() {
        this.list()
    }

    render(){
        const {title = 'Empty Page'} = this.props // destructuracion donde se 
        const {columns,options} = this.state
        console.log("me renderizo")
        return (
        <>
        <div className="container-fluid">

                <Nav/>        

                {this.state.mostrarModal && <ActionsMenu cambiarModal= {this.cambiarModal} titulo= {title}/>}

                <Modal objeto = {this.state.object} createEntity={this.createEntity} cambiarModal={this.cambiarModal} handleInput = {this.handleInput} method = {this.state.method} >
                    {
                        columns.map((column,index)=>(
                            <FieldComponent
                             options={this.state.options}   key={index} handleInput={this.handleInput} object={this.state.object} method={this.state.method} fieldName= {column} 
                            />
                        ))
                    }    
                </Modal>

                <Table 
                        columns = {this.state.columns} 
                        deleteEntity={this.deleteEntity} 
                        editEntity = {this.editEntity} 
                        entity={this.state.entity}
                />

            </div>
        </>    
            )
    }

    
        
    
}
export default Pagina



/**
 * 
 * const fieldComponent = ({handleInput=()=>{}, object={}, column='', method='', fieldName= '' })=> ({
    
 *  const componentes = {
        kind: (<Select 
            fieldName={fieldName}
            onChange={handleInput} 
            options={typesPets} 
            placeholder= {fieldName}
            method={method}
            value = {object[fieldName]}
        />),
            name:Input,
            owner: Input,
            lName: Input,
            id: Input,           
            historia: Input,
            diagnosis: Input
    } 
    
    return componentes[fieldName]
 */


    /**
     * 
     * 
     * const fieldComponent =  {
    kind: Select,
    name:Input,
    owner: Input,
    lName: Input,
    id: Input,
    country: Select,
    pet: Select,
    vet: Select,
    historia: Input,
    diagnosis: Input

}

Asi no s eputea
     * 
     */

/**
 {columns.map((column,index)=>{ 
                         
                      return <FieldComponent key={index} handleInput={this.handleInput} object={this.state.object} method={this.state.method} fieldName = {column}/>
                    }
 */