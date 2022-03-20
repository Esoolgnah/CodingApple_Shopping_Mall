/* import CSS */
import '../styles/components/Cart/Cart.css';
import notice from '../images/cartNotice.jpeg';
/* import Library */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

function Cart(props) {
  let dispatch = useDispatch();
  let history = useHistory();
  let state = useSelector(state => state);

  let sum = 0;

  const orderTitleStyle = {
    textAlign: 'left',
    fontWeight: 'bold',
    top: '50px',
    paddingLeft: '10px',
    borderBottom: '2.5px solid black',
  };

  const orderBtnStyle = {
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  const increaseData = a => {
    dispatch({ type: '수량증가', 데이터: a.id });
  };
  const decreaseData = a => {
    dispatch({ type: '수량감소', 데이터: a.id });
  };
  const deleteData = a => {
    dispatch({ type: '상품삭제', 데이터: a.id });
  };

  const goDetailPage = id => {
    history.push('/detail/' + id);
  };

  return (
    <>
      {state.reducer.length > 0 ? (
        <div id='container'>
          <Table responsive>
            <thead>
              <tr>
                <th class='col-md-1'>
                  <input type='checkbox' />
                </th>
                <th class='col-md-1'>{/*상품이미지*/}</th>
                <th class='col-md-2'>상품명</th>
                <th class='col-md-2'>가격</th>
                <th class='col-md-1'>수량</th>
                <th class='col-md-1'>변경</th>
                <th class='col-md-1'>{/*삭제버튼*/}</th>
              </tr>
            </thead>
            <tbody>
              {state.reducer.map((a, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <input type='checkbox' />
                    </td>
                    <td>
                      <img
                        className='itemImg'
                        onClick={() => {
                          goDetailPage(a.id);
                        }}
                        src={a.image}
                        width='150px'
                      />
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
                        style={orderBtnStyle}
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
          <div id='orderWrapper'>
            <h1 style={orderTitleStyle}>주문합계</h1>
            <div className='orderTable'>
              {state.reducer.map((a, i) => {
                sum += a.price * a.quan;
                return (
                  <ul>
                    {`${i + 1}.
                 ${a.price}원 x ${a.quan}개 = ${a.price * a.quan}원`}
                    <p>{i !== state.reducer.length - 1 ? '+' : '='}</p>
                    <h3>
                      {i !== state.reducer.length - 1 ? null : `${sum}원`}
                    </h3>
                  </ul>
                );
              })}
              <button
                className='btn-primary'
                style={{
                  width: '200px',
                  height: '50px',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              >
                주문하기
              </button>
            </div>
          </div>
        </div>
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
    </>
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
