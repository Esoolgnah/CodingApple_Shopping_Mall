/* import CSS */
import '../styles/components/Cart/Cart.css';
import notice from '../images/cartNotice.jpeg';
/* import Library */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
/* import Component */
import CheckBox from '../components/Cart/CheckBox.js';

function Cart(props) {
  let dispatch = useDispatch();
  let history = useHistory();
  let state = useSelector((state) => state);

  let sum = 0;
  let checkedId = new Set();

  for (let i = 0; i < state.reducer.length; i++) {
    checkedId.add(state.reducer[i].id);
  }

  /* checkList 상태 */
  const [allBChecked, setAllBChecked] = useState(true);
  const [allChecked, setAllChecked] = useState(true);
  const [checkList, setCheckList] = useState(checkedId);
  const [checkClicked, setCheckClicked] = useState(false);

  for (let j = 0; j < state.reducer.length; j++) {
    if (checkList.has(state.reducer[j].id) == true) {
      sum += state.reducer[j].price * state.reducer[j].quan;
    }
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

  const changeAllChecked = () => {
    setAllBChecked(!allBChecked);
    setCheckClicked(true);
  };

  /* 숫자에 콤마(,)추가하여 표시 */
  const addComma = (num) => {
    let regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ',');
  };

  useEffect(() => {
    if (allBChecked === true) {
      for (let i = 0; i < state.reducer.length; i++) {
        checkedId.add(state.reducer[i].id);
      }
      setCheckList(checkedId);
    } else {
      if (checkClicked === true) {
        let copy = new Set();
        setCheckList(copy);
        setCheckClicked(false);
      }
    }
  }, [allBChecked]);

  useEffect(() => {
    setCheckClicked(false);

    if (state.reducer.length === checkList.size) {
      setAllChecked(true);
      setAllBChecked(true);
    } else {
      setAllChecked(false);
      setAllBChecked(false);
    }
  }, [checkList]);

  const increaseData = (a) => {
    dispatch({ type: '수량증가', 데이터: a.id });
  };
  const decreaseData = (a) => {
    dispatch({ type: '수량감소', 데이터: a.id });
  };
  const deleteData = (a) => {
    dispatch({ type: '상품삭제', 데이터: a.id });
  };

  const goDetailPage = (id) => {
    if (props.shoes.length < 4) {
      axios
        .get('https://codingapple1.github.io/shop/data2.json')
        .then((result) => {
          if (result.data) props.shoes변경([...props.shoes, ...result.data]);
        })
        .catch(() => {
          console.log('실패');
        });
    }

    setTimeout(() => {
      history.push('/detail/' + id);
    }, 1000);
  };

  return (
    <>
      {state.reducer.length > 0 ? (
        <div id='container'>
          <Table responsive>
            <thead>
              <tr>
                <th class='col-md-1'>
                  <input
                    type='checkbox'
                    checked={allChecked}
                    onChange={changeAllChecked}
                  />
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
                        checkList={checkList}
                        setCheckList={setCheckList}
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
                    <td>{addComma(a.price)}원</td>
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
              <div className='priceWrapper'>
                <h3>결제예정금액</h3>
                <h3>{`${addComma(sum)}원`}</h3>
              </div>
              <div className='priceWrapper'>
                <p>상품금액 합계</p>
                <p>{` ${addComma(sum)}원`}</p>
              </div>
              <div className='priceWrapper'>
                <p>배송비 합계</p>
                <p> + 0원</p>
              </div>

              <button className='btn-primary opacity' style={orderBtnStyle}>
                {`총 ${addComma(sum)}원 주문하기`}
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
