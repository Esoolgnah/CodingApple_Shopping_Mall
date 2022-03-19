/* import Library */
import React from 'react';
import { useHistory } from 'react-router-dom';

function Card(props) {
  let history = useHistory();

  return (
    <div
      className='col-lg-4 col-md-6'
      key={props.id}
      style={{ cursor: 'pointer' }}
      onClick={() => {
        history.push('/detail/' + props.shoes.id);
      }}
    >
      <img
        src={
          'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'
        }
        width='100%'
      />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
    </div>
  );
}

export default Card;
