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
        <p>Merhaba {this.props.name}</p>
        <p>Yaşın {this.props.age}</p>
      </div>
    );
  }
}

export default DenemeClass;
