import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import './Contador.css'

export class ContadorClass extends Component {

    constructor(props){
        super(props)
        this.incrementar = this.incrementar.bind(this)
        this.decrementar = this.decrementar.bind(this)
        this.toggle = this.toggle.bind(this)
        this.setEstado = this.setEstado.bind(this)

        this.state = {
            estado: true
        }
    }

    componentDidMount(){
        document.title = `Contador: ${this.props.contador}`
    }

    componentDidUpdate(){
        document.title = `Contador: ${this.props.contador}`
        console.log('Estado: ' + this.state.estado)
    }


    incrementar(){
        this.props.setContador(this.props.contador + 1)
    }

    decrementar() {
        this.props.setContador(this.props.contador - 1)
    }

    toggle() {
        this.setEstado(!this.state.estado)
    }

    setEstado(data){
        this.setState( { ...this.state, estado: data} )
    }

    render() {
        return (
            <>
                <div className='contenedor-contador'>
                    <Button variant='primary' onClick={this.decrementar}>
                        -
                    </Button>
                    <span style={{ fontSize: '30px' }}> {this.props.contador} </span>
                    <Button variant='primary' onClick={this.incrementar}>
                        +
                    </Button>
                </div>
                <div>
                    {/* <Button variant={this.state.estado ? 'primary' : 'warning'} onClick={toggle}>
            This.state.estado: {`${this.state.estado}`}
          </Button> */}
                    {
                        this.state.estado ?
                            <Button variant={'danger'} onClick={this.toggle}>
                                Estado: {`${this.state.estado}`}
                            </Button>
                            :
                            <Button variant={'info'} onClick={this.toggle}>
                                Estado: {`${this.state.estado}`}
                            </Button>
                    }
                </div>
            </>
        )
    }
}

export default ContadorClass