/* import CSS */
import '../styles/pages/Detail.scss';
/* import Library */
import axios from 'axios';
import { Nav } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

let recents = [];
let 박스 = styled.div`
  padding: 20px;
`;
let 제목 = styled.h4`
  font-size: 25px;
  color: ${(props) => props.색상};
`;

function Detail(props) {
  let history = useHistory();
  let dispatch = useDispatch();

  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function (상품) {
    return 상품.id == id;
  });
  const [alert, alert변경] = useState(true);
  let [누른탭, 누른탭변경] = useState(0);
  let [스위치, 스위치변경] = useState(false);
  let [recent, setRecent] = useState([]);

  /* 숫자에 콤마(,)추가하여 표시 */
  const addComma = (num) => {
    let regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ',');
  };

  const addItemAndGoCart = () => {
    // 장바구니 항목 추가
    dispatch({
      type: '항목추가',
      데이터: {
        id: 찾은상품.id,
        name: 찾은상품.title,
        quan: 1,
        image: `https://codingapple1.github.io/shop/shoes${
          찾은상품.id + 1
        }.jpg`,
        price: 찾은상품.price,
      },
    });

    // 장바구니 이동 여부 모달 On
    dispatch({
      type: 'goCartModalOn',
    });
  };

  const getDataAndSetting = (el) => {
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

    let arr = localStorage.getItem('watched');
    if (arr === null) arr = [];
    else arr = JSON.parse(arr);
    let idx = arr.indexOf(el);
    if (idx > -1) {
      arr.splice(idx, 1);
      arr.unshift(el);
    } else {
      arr.unshift(el);
    }
    if (arr.length > 3) {
      arr = [arr[0], arr[1], arr[2]];
    }
    recents = arr;
    localStorage.setItem('watched', JSON.stringify(arr));
  };

  useEffect(() => {
    let 타이머 = setTimeout(() => {
      alert변경(false);
    }, 2000);
    return () => {
      clearTimeout(타이머);
    };
  }, []);

  useEffect(() => {
    // localStorage.clear();
    let arr = localStorage.getItem('watched');
    if (arr === null) arr = [];
    else arr = JSON.parse(arr);
    let idx = arr.indexOf(id);
    if (idx > -1) {
      arr.splice(idx, 1);
      arr.unshift(id);
    } else {
      arr.unshift(id);
    }
    if (arr.length > 3) {
      arr = [arr[0], arr[1], arr[2]];
    }
    recents = arr;
    localStorage.setItem('watched', JSON.stringify(arr));
  }, []);

  const goDetailPage = (el) => {
    getDataAndSetting(el);
    setTimeout(() => {
      history.push('/detail/' + el);
      alert변경(true);
      let 타이머 = setTimeout(() => {
        alert변경(false);
      }, 2000);
      return () => {
        clearTimeout(타이머);
      };
    }, 1000);
  };

  useEffect(() => {
    setRecent(recents);
  }, [recents]);

  return (
    <div className='container'>
      <div id='recentBox'>
        <p className='title'>Recently Viewed</p>
        {recent.map((el, i) => {
          return (
            <div className='imgWrapper opacity' key={el}>
              <img
                className='img'
                src={`https://codingapple1.github.io/shop/shoes${
                  Number(el) + 1
                }.jpg`}
                onClick={() => {
                  goDetailPage(el);
                }}
              ></img>
            </div>
          );
        })}
      </div>

      <박스>
        <제목 className='red'>Detail</제목>
      </박스>

      <div className={alert ? 'my-alert' : 'my-alert-hide'}>
        <p>재고가 얼마 남지 않았습니다.</p>
      </div>

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
          <p>{addComma(찾은상품.price)}원</p>
          <button
            className='btn btn-primary opacity'
            onClick={() => {
              addItemAndGoCart();
            }}
          >
            장바구니에 담기
          </button>
          &nbsp;
          <button
            className='btn btn-primary opacity'
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
                style={{ color: 'black' }}
                onClick={() => {
                  스위치변경(false);
                  누른탭변경(0);
                }}
              >
                0
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey='link-1'
                style={{ color: 'black' }}
                onClick={() => {
                  스위치변경(false);
                  누른탭변경(1);
                }}
              >
                1
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

export default Detail;
