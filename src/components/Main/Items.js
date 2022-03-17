/* import Library */
import axios from 'axios';
import React, { useState } from 'react';
/* import Component */
import Card from '../../components/Main/Card.js';

function Items(props) {
  let [더보기, 더보기변경] = useState(false);

  return (
    <div className='container'>
      <div className='row'>
        {props.shoes.map((a, i) => {
          return <Card shoes={a} i={i} key={i} />;
        })}
      </div>

      {!더보기 && (
        <button
          className='btn btn-primary'
          onClick={() => {
            axios
              .get('https://codingapple1.github.io/shop/data2.json')
              .then(result => {
                if (result.data)
                  props.shoes변경([...props.shoes, ...result.data]);
              })
              .catch(() => {
                console.log('실패');
              });
          }}
        >
          More
        </button>
      )}
    </div>
  );
}
export default Items;
