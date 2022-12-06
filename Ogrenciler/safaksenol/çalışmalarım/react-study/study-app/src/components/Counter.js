import React, { Component } from 'react';

class Counter extends Component {
//Class component state kullanımı sayı arttır azalt 2ye katlama uygulaması 
    state = {
        count:0,
    };
    increase() {
        this.setState({
            count: this.state.count + 1,
        });
    }
    decrease() {
        this.setState({
            count: this.state.count - 1,
        });
    }
    multiplication() {
        this.setState({
            count: this.state.count *2,
        });
    }
    
  render() {
      return (
          <>
              <p>Class component state kullanımı sayı arttır azalt 2ye katlama uygulaması </p>
              <p>Sayı:{this.state.count}</p>
              <button onClick={() => this.increase()}>Arttır</button>
              <button onClick={() => this.decrease()}>Azalt</button>
              <button onClick={() => this.multiplication()}>2 ye katla</button>
          </>
      );
  }
}


export default Counter;