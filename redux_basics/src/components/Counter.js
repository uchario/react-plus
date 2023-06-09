import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/counter';

const Counter = () => {
  const state = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment(5));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement(1));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {state.showCounter && <div className={classes.value}>{state.counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
