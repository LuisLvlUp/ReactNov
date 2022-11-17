import React, { Component } from 'react'

export class TituloClass extends Component {
    render() {
        return (
            <div>El contador actual es: { this.props.contador }</div>
        )
    }
}

export default TituloClass