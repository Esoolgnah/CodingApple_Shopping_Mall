/* import Library */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
/* import Component */
import Card from '../../components/Main/Card.js';

function Items(props) {
  let [더보기, 더보기변경] = useState(false);

  useEffect(() => {
    if (props.shoes.length > 3) 더보기변경(true);
    else 더보기변경(false);
  }, [props.shoes]);

  const getData = () => {
    axios
      .get('https://codingapple1.github.io/shop/data2.json')
      .then(result => {
        if (result.data) props.shoes변경([...props.shoes, ...result.data]);
      })
      .catch(() => {
        console.log('실패');
      });
  };

  const getDataAndHide = () => {
    getData();
    더보기변경(true);
  };

  return (
    <div className='container'>
      <div className='row'>
        {props.shoes.map((a, i) => {
          return <Card shoes={a} i={i} key={i} />;
        })}
      </div>

      {!더보기 && (
        <button className='btn btn-primary opacity' onClick={getDataAndHide}>
          More
        </button>
      )}
    </div>
  );
}
export default Items;
