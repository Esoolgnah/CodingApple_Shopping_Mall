import React from 'react';
import { Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

function Cart(props) {
  let history = useHistory();
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {props.state.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.quan}</td>
                <td>
                  <button
                    onClick={() => {
                      props.dispatch({ type: '수량증가' });
                    }}
                  >
                    +
                  </button>
                  &nbsp;
                  <button
                    onClick={() => {
                      props.dispatch({ type: '수량감소' });
                    }}
                  >
                    -
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {props.alert열렸니 ? (
        <div className='my-alert'>
          <p>지금 구매하시면 20% 할인</p>
          <button
            onClick={() => {
              props.dispatch({ type: 'alert닫기' });
              history.push('/detail/2');
            }}
          >
            닫기
          </button>
        </div>
      ) : null}
    </div>
  );
}

function state를props화(state) {
  return {
    state: state.reducer,
    alert열렸니: state.reducer2,
  };
}

export default connect(state를props화)(Cart);
