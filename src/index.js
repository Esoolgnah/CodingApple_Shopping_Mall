/* import CSS */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../src/styles/index.css';
/* import Library */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

let goCartModalState = false;
function goCartModalReducer(state = goCartModalState, action) {
  if (action.type === 'goCartModalOn') {
    let curState = true;
    return curState;
  } else if (action.type === 'goCartModalOff') {
    let curState = false;
    return curState;
  } else {
    return state;
  }
}

let checkBox초기값 = [];
function reducer3(state = checkBox초기값, 액션) {
  if (액션.type === 'check추가') {
    let copy = [...state];
    copy.push(액션.데이터);
    return copy;
  } else if (액션.type === 'check해제') {
    let found = state.findIndex(a => {
      return a.id === 액션.데이터;
    });
    let copy = [...state];
    copy.splice(found, 1);
    return copy;
  } else {
    return state;
  }
}

let alert초기값 = true;
function reducer2(state = alert초기값, 액션) {
  if (액션.type === 'alert닫기') {
    state = false;
    return state;
  } else {
    return state;
  }
}

let 초기값 = [];
function reducer(state = 초기값, 액션) {
  if (액션.type === '항목추가') {
    let found = state.findIndex(a => {
      return a.id === 액션.데이터.id;
    });
    if (found >= 0) {
      let copy = [...state];
      copy[found].quan++;
      return copy;
    } else {
      let copy = [...state];
      copy.push(액션.데이터);
      return copy;
    }
  } else if (액션.type === '수량증가') {
    let found = state.findIndex(a => {
      return a.id === 액션.데이터;
    });
    let copy = [...state];
    copy[found].quan++;
    return copy;
  } else if (액션.type === '수량감소') {
    let found = state.findIndex(a => {
      return a.id === 액션.데이터;
    });
    let copy = [...state];
    if (copy[found].quan >= 1) copy[found].quan--;
    return copy;
  } else if (액션.type === '상품삭제') {
    let found = state.findIndex(a => {
      return a.id === 액션.데이터;
    });
    let copy = [...state];
    copy.splice(found, 1);
    return copy;
  } else {
    return state;
  }
}
let store = createStore(
  combineReducers({ reducer, reducer2, reducer3, goCartModalReducer }),
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
