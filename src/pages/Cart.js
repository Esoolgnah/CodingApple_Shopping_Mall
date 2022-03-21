/* import CSS */
import '../styles/components/Cart/Cart.css';
import notice from '../images/cartNotice.jpeg';
/* import Library */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
/* import Component */
import CheckBox from '../components/Cart/CheckBox.js';

function Cart(props) {
  let dispatch = useDispatch();
  let history = useHistory();
  let state = useSelector(state => state);

  let sum = 0;
  for (let i = 0; i < state.reducer.length; i++) {
    sum += state.reducer[i].price * state.reducer[i].quan;
  }
  const orderTitleStyle = {
    textAlign: 'left',
    fontWeight: 'bold',
    top: '50px',
    paddingLeft: '10px',
    borderBottom: '2.5px solid black',
  };

  const amountBtnStyle = {
    fontWeight: 'bold',
    cursor: 'pointer',
    marginBottom: '3px',
  };

  const orderBtnStyle = {
    width: '100%',
    height: '50px',
    fontSize: '20px',
    fontWeight: 'bold',
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
                <th class='col-md-1'>배송비</th>
                <th class='col-md-1'>{/*삭제버튼*/}</th>
              </tr>
            </thead>
            <tbody>
              {state.reducer.map((a, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <CheckBox
                        index={i}
                        id={a.id}
                        price={a.price}
                        quan={a.quan}
                      />
                    </td>
                    <td>
                      <img
                        className='itemImg opacity'
                        onClick={() => {
                          goDetailPage(a.id);
                        }}
                        src={a.image}
                        width='150px'
                      />
                    </td>
                    <td>{a.name}</td>
                    <td>{a.price}원</td>
                    <td>
                      {' '}
                      <button
                        className='btn btn-default'
                        style={amountBtnStyle}
                        onClick={() => {
                          increaseData(a);
                        }}
                      >
                        +
                      </button>
                      {a.quan}
                      <button
                        className='btn btn-default'
                        style={amountBtnStyle}
                        onClick={() => {
                          decreaseData(a);
                        }}
                      >
                        -
                      </button>
                    </td>
                    <td>무료</td>
                    <td>
                      <button
                        className='btn btn-default'
                        style={amountBtnStyle}
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
              {/* {state.reducer.map((a, i) => {
                sum += a.price * a.quan;
                return <></>;
              })} */}
              <div className='priceWrapper'>
                <h3>결제예정금액</h3>
                <h3>{`${sum}원`}</h3>
              </div>
              <div className='priceWrapper'>
                <p>상품금액 합계</p>
                <p>{` ${sum}원`}</p>
              </div>
              <div className='priceWrapper'>
                <p>배송비 합계</p>
                <p> + 0원</p>
              </div>

              <button className='btn-primary opacity' style={orderBtnStyle}>
                {`총 ${sum}원 주문하기`}
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

export default Cart;
