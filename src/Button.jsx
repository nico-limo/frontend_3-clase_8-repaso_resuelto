import React, { Component } from 'react'
import "./Random.css"

export default class Button extends Component {
    render() {
        return (
            <button onClick={this.props.fn} className="glow-on-hover">Get Random</button>
        )
    }
}
