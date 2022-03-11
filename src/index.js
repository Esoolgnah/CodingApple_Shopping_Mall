import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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

let 초기값 = [
  { id: 0, name: '멋진신발', quan: 2 },
  { id: 1, name: '멋진신발2', quan: 1 },
];

function reducer(state = 초기값, 액션) {
  if (액션.type === '항목추가') {
    let copy = [...state];
    let copyId = copy.map(el => {
      return el.id;
    });
    if (copyId.indexOf(액션.데이터.id) === -1) copy.push(액션.데이터);
    else copy[copyId.indexOf(액션.데이터.id)].quan++;
    return copy;
  } else if (액션.type === '수량증가') {
    let copy = [...state];
    copy[0].quan++;
    return copy;
  } else if (액션.type === '수량감소') {
    let copy = [...state];
    if (copy[0].quan >= 1) copy[0].quan--;
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
