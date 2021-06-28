import React, {Component} from 'react'
import Nav from '../components/Nav/Nav.js'
import Modal from '../components/Modal/Modal.js'
import Table from '../components/Table/index.js'
import ActionsMenu from '../components/ActionsMenu/index.js'
import './pagina.css'
import {listarEntidad, crearEntidad, eliminarEntidad} from '../servicio'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'

class Pagina extends Component{

    constructor(props){
        super(props)
        this.state = {
            mostrarModal : true,
            entity :  [],
            object : {},
            idObject : null,
            method : 'POST'
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
        this.setState({entity: entities})
    }

    handleInput = (e) => {
        const {target: {value,name}} = e
        //console.log({value, name, e})
        let {object} = this.state
        object = {...object,[name]:value}
        this.setState({object})

    }

    createEntity = async () => {
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
        return (
        <>
        <div className="container-fluid">

                <Nav/>        

                {this.state.mostrarModal && <ActionsMenu cambiarModal= {this.cambiarModal} titulo= {title}/>}

                <Modal method={this.state.method} object= {this.state.object} handleInput={this.handleInput} cambiarModal= {this.cambiarModal} createEntity={this.createEntity}/> 

                <Table deleteEntity={this.deleteEntity} editEntity = {this.editEntity} entity={this.state.entity}/>

            </div>
        </>    
            )
    }

    
        
    
}
export default Pagina

