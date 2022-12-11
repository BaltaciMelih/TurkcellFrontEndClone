import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      showUserInfo: true,
      userName: "Erdem",
    };
  }
  // componentDidUpdate(nextProp, nextState) {
  //   console.log("componentDidUpdate", nextProp, nextState);
  // }

  componentDidMount(nextProp, nextState) {
    console.log("Bir kere çalıştı - Class");
  }

  render() {
    return (
      <div>
        <div>{this.props.text}</div>
        <button
          onClick={() =>
            this.setState({
              userName: "Atilla",
              showUserInfo: !this.state.showUserInfo,
            })
          }
        >
          Değiştir
        </button>
        {this.state.showUserInfo && <div>{this.state.userName}</div>}
      </div>
    );
  }
}
