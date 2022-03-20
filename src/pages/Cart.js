/* import CSS */
import '../styles/components/Cart/Cart.css';
import notice from '../images/cartNotice.jpeg';
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
              <th class='col-md-2'>#</th>
              <th class='col-md-2'>{/*상품이미지*/}</th>
              <th class='col-md-2'>상품명</th>
              <th class='col-md-2'>가격</th>
              <th class='col-md-1'>수량</th>
              <th class='col-md-1'>변경</th>
              <th class='col-md-2'>{/*삭제버튼*/}</th>
            </tr>
          </thead>
          <tbody>
            {state.reducer.map((a, i) => {
              return (
                <tr key={i}>
                  <td>
                    <p className=' '></p>
                    {a.id}
                  </td>
                  <td>
                    <img src={a.image} width='150px' />
                  </td>
                  <td>{a.name}</td>
                  <td>{a.price}원</td>
                  <td>{a.quan}</td>
                  <td>
                    <button
                      className='btn btn-default'
                      onClick={() => {
                        increaseData(a);
                      }}
                    >
                      +
                    </button>
                    &nbsp;
                    <button
                      className='btn btn-default'
                      onClick={() => {
                        decreaseData(a);
                      }}
                    >
                      -
                    </button>
                  </td>
                  <td>
                    <button
                      className='btn btn-default'
                      style={{
                        fontWeight: 'bold',
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        deleteData(a);
                      }}
                    >
                      x
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <div id='noticeWrapper'>
          <img className='noticeImg' src={notice} />
          <p className='notice'>장바구니가 비어있습니다.</p>
        </div>
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
