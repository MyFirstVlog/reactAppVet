import React, {Component} from 'react'
import Nav from '../components/Nav/Nav.js'
import Modal from '../components/Modal/Modal.js'
import Table from '../components/Table/index.js'
import ActionsMenu from '../components/ActionsMenu/index.js'
import './pagina.css'

class Pagina extends Component{

    constructor(props){
        super(props)
        this.state = {
            mostrarModal : true,
        }
    }

    cambiarModal = () => {
        this.setState({mostrarModal: !this.state.mostrarModal})
        console.log('estado modal',this.state.mostrarModal)
    }

    // en la parte de abajp se pasa el this.cambiarModal -> proque se debe especificar de que clase viene el metodo

    render(){
        return (
        <>
        <div classNameName="container-fluid">

                <Nav/>        

                {this.state.mostrarModal && <ActionsMenu cambiarModal= {this.cambiarModal}/>}

                {
                    //arriba tenia lo del modal pero no funciona correctamente, igual con boots
                    //strap a horra tiempo
                    //console.log('la moda hp', this.state.mostrarModal)
                    //{this.state.mostrarModal && <ActionsMenu cambiarModal= {this.cambiarModal}/>}
                }
                


                <Modal cambiarModal= {this.cambiarModal}/> 
               {
                   /**s
                    * { this.state.mostrarModal && <Modal/> } aqui es el problema
                    */
               }

                <Table/>

            </div>
        </>    
            )
    }

    
        
    
}
export default Pagina

