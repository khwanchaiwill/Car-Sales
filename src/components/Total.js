import React from 'react';
import { connect } from 'react-redux';

const Total = props => {
  console.log(props)
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

export default Total;
