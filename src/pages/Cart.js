/* import CSS */
import '../styles/components/Cart/Cart.css';
/* import Library */
import React, { useEffect, memo } from 'react';
import { Table } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';

function Cart(props) {
  let dispatch = useDispatch();
  let state = useSelector(state => state);
  let style = { color: 'black' };

  const increaseData = a => {
    dispatch({ type: '수량증가', 데이터: a.id });
  };
  const decreaseData = a => {
    dispatch({ type: '수량감소', 데이터: a.id });
  };
  const deleteData = a => {
    dispatch({ type: '상품삭제', 데이터: a.id });
  };

  return (
    <div>
      {state.reducer.length > 0 ? (
        <Table responsive>
          <thead>
            <tr style={style}>
              <th>#</th>
              <th>상품명</th>
              <th>수량</th>
              <th>변경</th>
              <th>{/*삭제버튼*/}</th>
            </tr>
          </thead>
          <tbody>
            {state.reducer.map((a, i) => {
              return (
                <tr key={i}>
                  <td>{a.id}</td>
                  <td>{a.name}</td>
                  <td>{a.quan}</td>
                  <td>
                    <button
                      onClick={() => {
                        increaseData(a);
                      }}
                    >
                      +
                    </button>
                    &nbsp;
                    <button
                      onClick={() => {
                        decreaseData(a);
                      }}
                    >
                      -
                    </button>
                  </td>
                  <td>
                    <p
                      style={{
                        fontWeight: 'bold',
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        deleteData(a);
                      }}
                    >
                      x
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        '장바구니가 비어있습니다.'
      )}
      {props.alert열렸니 ? (
        <div className='my-alert'>
          <p>지금 구매하시면 20% 할인</p>
          <button
            onClick={() => {
              dispatch({ type: 'alert닫기' });
            }}
          >
            닫기
          </button>
        </div>
      ) : null}
    </div>
  );
}

// function state를props화(state) {
//   return {
//     state: state.reducer,
//     alert열렸니: state.reducer2,
//   };
// }

// export default connect(state를props화)(Cart);
export default Cart;
