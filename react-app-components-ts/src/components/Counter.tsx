import React from 'react'
import { AppDispatch, RootState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../store/counter/counterSlice';

function Counter() {
  const count = useSelector((state: RootState)=> state.counter.value);
  const dispatch = useDispatch<AppDispatch>();  

  return (
    <div>Counter

        {count}
        <button onClick={()=> dispatch(increment())}>Increment</button>
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter