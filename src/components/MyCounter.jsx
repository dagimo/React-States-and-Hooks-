import React, { Component } from 'react'
import CounterDisplayer from './CounterDisplayer';
import EvenCounterDisplayer from './EvenCounterDisplayer';

class MyCounter extends Component {
  // state initialization recomended way is as below
    constructor(){
        super(); // is required to use the word 'this' as the constructor has extended properties from the component
        this.state={
            counter: 0,
        }
    }
    increment=()=>{
      this.setState((state)=>{
        return {counter: state.counter+1};
      }

      );
        // console.log('You clicked Add 1');
        // console.log(this.state.counter);
    }

  render() {
    return (
      <div className="component-wrapper">
        <div className="component-card">
          <h2 className="component-tilte">The Counter</h2>
          <button
            className="component-button default-button"
            onClick={this.increment}
          >
            Click Here
          </button>
          <div>
            <CounterDisplayer totalCount={this.state.counter} />
            <EvenCounterDisplayer evenClicks={this.state.counter} />
          </div>

        </div>
      </div>
    );
  }
}

export default MyCounter;

//MyCounter class component initializes its state with Counter set to 0 in the constructor
//increment function is called when the button is clicked. It uses this.setState with a function to safely update the Counter based on the previous state.