import React, { Component } from 'react'

 class EvenCounterDisplayer extends Component {
  render() {
    const {evenClicks}=this.props;
    if (evenClicks % 2 === 0){
    
      return (
        <>
          <h2 className="component-info">Even clicks Counter:clicked {evenClicks} times</h2>
        </>
      );
  }else{
    return (
      <>
        <h2 className="component-info">
          Even clicks Counter:clicked {evenClicks-1}times
        </h2>
      </>
    );
  }
}
 }
export default EvenCounterDisplayer;
