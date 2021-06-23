import React, {Component} from 'react'
import Nav from '../components/Nav/Nav.js'
import Modal from '../components/Modal/Modal.js'
import Table from '../components/Table/index.js'
import ActionsMenu from '../components/ActionsMenu/index.js'
import './pagina.css'
import {listarEntidad} from '../servicio'

class Pagina extends Component{

    constructor(props){
        super(props)
        this.state = {
            mostrarModal : true,
            entity :  []
        }
    }

    cambiarModal = () => {
        this.setState({mostrarModal: !this.state.mostrarModal})
        console.log('estado modal',this.state.mostrarModal)
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

    componentDidMount() {
        this.list()
    }

    render(){
        const {title = 'Empty Page'} = this.props // destructuracion donde se 
        return (
        <>
        <div classNameName="container-fluid">

                <Nav/>        

                {this.state.mostrarModal && <ActionsMenu cambiarModal= {this.cambiarModal} titulo= {title}/>}

                <Modal cambiarModal= {this.cambiarModal}/> 

                <Table entity={this.state.entity}/>

            </div>
        </>    
            )
    }

    
        
    
}
export default Pagina

