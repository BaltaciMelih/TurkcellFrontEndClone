import React, { Component } from 'react'

export default class ExampleClass extends Component {
    constructor(props) {
        super(props);
        state:{}
    }
    render() {
        return (
            <div>
                <p>Example Class</p>
                <p>{this.props.isim}</p>
            </div>
        )
  }
}
