import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

import { counterActions } from "../store/index";

const Counter = () => {
  // the store will contain whole bunch of data, but if we want only fer states out of it,
  // we can specify that by passing a function as parameter to the "useSelector".
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  // as we are using "useSelector" given by react-redux
  // then it automatically gives subscription to our component.
  // like whenever any data is changed from somewhere else in the App, then this store
  // will automatically be notified, that the change is happen.

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const incrementHandlerBy5 = () => {
    dispatch(counterActions.increment({ amount: 5 }));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}

      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandlerBy5}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// import { Component } from "react";
// import { connect, useDispatch, useSelector } from "react-redux";
// import classes from "./Counter.module.css";

// class Counter1 extends Component {
//   decrementHandler() {
//     this.props.decrement();
//   }

//   incrementHandler() {
//     this.props.increment();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>
//           Toggle Counter
//         </button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   // they are key value pairs in which the keys will be available to the class Component and when we
//   // use them we use/execute the value inside them
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter1);
