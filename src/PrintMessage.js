import React, { Component } from 'react'

class PrintMessage extends Component {
    render() {
      
        return (
       		<span>{this.props.message}</span>
        )
    }
}

export default PrintMessage