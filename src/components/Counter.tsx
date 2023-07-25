import { styled } from 'styled-components';

import { useAppDispatch, useAppSelector } from '../utils/hook';

import { increment, decrement } from '../features/counterSlice';

const Counter = () => {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment())
  };

  const handleDecrement = () => {
    dispatch(decrement())
  };

  return (
    <Container>
      <h1>Redux Counter</h1>
      <Value>{count}</Value>
      <button 
        onClick={handleIncrement}
      >
        + Counter
      </button>
      
      <button 
        onClick={handleDecrement}
      >
        - Counter
      </button>
    </Container>
  );
};

export default Counter;

const Container = styled.main`
  margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 40rem;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #f4f0fa;

  h1 {
    text-transform: uppercase;
    color: #575757;
    margin: 0;
    font-size: 1rem;
  }

  button {
    margin: 0rem 1rem;
  }
`;

const Value = styled.div`
  font-size: 2rem;
  color: #3c0080;
  margin: 2rem 0;
  font-weight: bold;
`;