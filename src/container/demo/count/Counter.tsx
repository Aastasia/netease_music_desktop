import React from 'react';
import {connect} from "react-redux";
import {decrement, increment} from "./counterStore";

const CounterView = ({counter, onIncrement, onDecrement}: any) => {
  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

const  mapStateToProps = (state: any) => {
  return {counter: state.counter}
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onIncrement: () => dispatch(increment(1)),
    onDecrement: () => dispatch(decrement(-1))
  }
};

const Counter = connect(mapStateToProps, mapDispatchToProps)(CounterView);

export default Counter;
