import React, { Component } from "react";

class DenemeClass extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line no-lone-blocks
    {
    }
  }
  render() {
    return (
      <div>
        <p>DenemeClass</p>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default DenemeClass;
