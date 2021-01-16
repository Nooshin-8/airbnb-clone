import React from "react";   //importing react class from react package

class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}!</div>
  }
}

// the goal of render method is creat a string/html and return it

export default Hello;
