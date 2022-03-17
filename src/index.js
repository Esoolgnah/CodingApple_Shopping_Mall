import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

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
  }
  {
    return state;
  }
}
let store = createStore(combineReducers({ reducer, reducer2 }));

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
