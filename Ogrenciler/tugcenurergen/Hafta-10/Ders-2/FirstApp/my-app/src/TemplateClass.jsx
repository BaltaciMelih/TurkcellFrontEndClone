import React from 'react';
import {Component} from 'react';

export default class TemplateClass extends Component {
    constructor(props){
        super(props);
        state: {
        }
    }
    render(){
        return(
            <div>
                <h5>{this.props.name}</h5>
            </div>
        )
    }
}