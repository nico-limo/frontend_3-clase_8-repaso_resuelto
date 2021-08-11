import React, { Component } from 'react'
import Button from './Button'
import "./App.css";

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      colors: ["RED","BLUE","YELLOW", "GREEN","ORANGE","MAGENTA","BROWN","LIME"]
    }
    this.shuffle = this.shuffle.bind(this);
  }

  shuffle() {
    const shuffledArray = this.state.colors.sort((a,b) => 0.5 - Math.random())
    this.setState({colors: shuffledArray})
  }

  render() {
    return (
      <div className="container">
        <div className="panel">
          {this.state.colors.map(color => <div key={color} className={color}>{color}</div>)}
        </div>
        <Button fn={this.shuffle} />
      </div>

    )
  }
}
