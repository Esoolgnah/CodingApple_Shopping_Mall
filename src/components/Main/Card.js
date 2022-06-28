/* import Library */
import React from 'react';
import { useHistory } from 'react-router-dom';

function Card(props) {
  let history = useHistory();

  /* Detail 페이지로 이동하기 */
  const goDetailPage = (id) => {
    history.push('/detail/' + id);
  };

  /* 숫자에 콤마(,)추가하여 표시 */
  const addComma = (num) => {
    let regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ',');
  };

  return (
    <div
      className='col-lg-4 col-md-6 opacity'
      key={props.id}
      style={{ cursor: 'pointer' }}
      onClick={() => {
        goDetailPage(props.shoes.id);
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
        {props.shoes.content} & {addComma(props.shoes.price)}
      </p>
    </div>
  );
}

export default Card;
