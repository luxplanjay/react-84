import { useDispatch } from 'react-redux';
import { deposit, withdraw } from 'redux/accountSlice';
import { Balance } from './Balance';
import { useState } from 'react';

export const Account = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  return (
    <div>
      <Balance />
      <input
        type="number"
        onChange={evt => setValue(Number(evt.target.value))}
      />
      <button onClick={() => dispatch(deposit(value))}>Deposit</button>
      <button onClick={() => dispatch(withdraw(value))}>Withdraw</button>
    </div>
  );
};
