/* import Library */
import React from 'react';
import { useHistory } from 'react-router-dom';

function Card(props) {
  let history = useHistory();

  return (
    <div
      className='col-md-4'
      key={props.id}
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
