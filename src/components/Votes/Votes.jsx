import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/ducks/counter';
import './styles.css';

const Counter = (props) => {
  const { name, img } = props;
  const dispatch = useDispatch();

  const [votes, setVotes] = React.useState(0);

  const handleIncrement = () => {
    dispatch(increment());
    setVotes(votes + 1);
  };
  const handleDecrement = () => {
    dispatch(decrement());
    setVotes(votes - 1);
  };

  return (
    <div className="item-container">
      <div
        className="item-img"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <h4 className="h4-votes"> {name} </h4>
      <h3 className="h3-votes"> {`votos: ${votes}`} </h3>
      <button className="btn" onClick={handleIncrement}>
        -
      </button>
      <button className="btn" onClick={handleDecrement}>
        +
      </button>
    </div>
  );
};

export default Counter;
