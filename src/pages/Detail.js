import { Nav } from 'react-bootstrap';
import React, { useEffect, useState, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import '../styles/pages/Detail.scss';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

let 박스 = styled.div`
  padding: 20px;
`;
let 제목 = styled.h4`
  font-size: 25px;
  color: ${props => props.색상};
`;

function Detail(props) {
  let history = useHistory();
  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function (상품) {
    return 상품.id == id;
  });
  const [alert, alert변경] = useState(true);
  let [누른탭, 누른탭변경] = useState(0);
  let [스위치, 스위치변경] = useState(false);

  useEffect(() => {
    let 타이머 = setTimeout(() => {
      alert변경(false);
    }, 2000);
    return () => {
      clearTimeout(타이머);
    };
  }, []);

  useEffect(() => {
    let arr = localStorage.getItem('watched');
    if (arr === null) arr = [];
    else arr = JSON.parse(arr);

    arr.push(id);
    arr = new Set(arr);
    arr = [...arr];

    localStorage.setItem('watched', JSON.stringify(arr));
  }, []);

  return (
    <div className='container'>
      <박스>
        <제목 className='red'>Detail</제목>
      </박스>

      {alert && (
        <div className='my-alert'>
          <p>재고가 얼마 남지 않았습니다.</p>
        </div>
      )}

      <div className='row'>
        <div className='col-md-6'>
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              찾은상품.id + 1
            }.jpg`}
            width='100%'
          />
        </div>
        <div className='col-md-6 mt-4'>
          <h4 className='pt-5'>{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button
            className='btn btn-primary'
            onClick={() => {
              props.dispatch({
                type: '항목추가',
                데이터: {
                  id: 찾은상품.id,
                  name: 찾은상품.title,
                  quan: 1,
                  image: `https://codingapple1.github.io/shop/shoes${
                    찾은상품.id + 1
                  }.jpg`,
                },
              });
              history.push('/cart');
            }}
          >
            장바구니에 담기
          </button>
          &nbsp;
          <button
            className='btn btn-primary'
            onClick={() => {
              history.push('/');
            }}
          >
            뒤로가기
          </button>
          <Nav className='mt-5' variant='tabs' defaultActiveKey='/home'>
            <Nav.Item>
              <Nav.Link
                eventKey='link-0'
                onClick={() => {
                  스위치변경(false);
                  누른탭변경(0);
                }}
              >
                Active
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey='link-1'
                onClick={() => {
                  스위치변경(false);
                  누른탭변경(1);
                }}
              >
                Option 2
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <CSSTransition in={스위치} classNames='wow' timeout={500}>
            <TabContent 누른탭={누른탭} 스위치변경={스위치변경} />
          </CSSTransition>
        </div>
      </div>
    </div>
  );
}

function TabContent(props) {
  useEffect(() => {
    props.스위치변경(true);
  });

  if (props.누른탭 === 0) return <div>0번째 내용</div>;
  else if (props.누른탭 === 1) return <div>1번째 내용</div>;
  else if (props.누른탭 === 2) return <div>2번째 내용</div>;
}

function state를props화(state) {
  return {
    state: state.reducer,
    alert열렸니: state.reducer2,
  };
}

export default connect(state를props화)(Detail);
