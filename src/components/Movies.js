import React from "react";

export default class extends React.Component {
  render() {
    return (
      <>
        <img src={this.props.image} alt="" />
      </>
    );
  }
}