import React, { Component } from 'react'

class CounterDisplayer extends Component {
  render() {
    return (
      <>
        <h2 className="component-info">
          All clicks Counter: total click is {this.props.totalCount}
        </h2>
      </>
    );
  }
}
export default CounterDisplayer;