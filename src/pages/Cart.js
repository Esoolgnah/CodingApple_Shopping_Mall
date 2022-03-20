/* import CSS */
import '../styles/components/Cart/Cart.css';
import notice from '../images/cartNotice.jpeg';
/* import Library */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

function Cart(props) {
  let dispatch = useDispatch();
  let history = useHistory();
  let state = useSelector(state => state);

  const h3Style = {
    textAlign: 'left',
    fontWeight: 'bold',
    top: '50px',
    paddingLeft: '10px',
    borderBottom: '2.5px solid black',
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
                <th class='col-md-1'>{/*순번*/}</th>
                <th class='col-md-2'>{/*상품이미지*/}</th>
                <th class='col-md-2'>상품명</th>
                <th class='col-md-2'>가격</th>
                <th class='col-md-2'>수량</th>
                <th class='col-md-2'>변경</th>
                <th class='col-md-1'>{/*삭제버튼*/}</th>
              </tr>
            </thead>
            <tbody>
              {state.reducer.map((a, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <p className=' '></p>
                      {i + 1}
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
          <div id='orderWrapper'>
            <h3 style={h3Style}>주문합계</h3>
            <Table responsive></Table>
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
