import React, { Component } from 'react'
import ContadorClass from '../Contador/ContadorClass'
import TituloClass from '../Titulo/TituloClass'
import './Main.css'

export class MainClass extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contador: 0
        }
        this.setContador = this.setContador.bind(this)
    }

    setContador(data) {
        this.setState({ ...this.state, contador: data })
    }

    render() {
        return (
            <div className='contenedor'>
                <TituloClass contador={this.state.contador} />
                <ContadorClass contador={this.state.contador} setContador={this.setContador} />
            </div>
        )
    }
}

export default MainClass