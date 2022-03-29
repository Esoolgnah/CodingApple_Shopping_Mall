/* import CSS */
import '../src/styles/App.css';
/* import Library */
import React, { useState, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
/* import Component */
import NavigationBar from '../src/components/NavigationBar.js';
import Main from './pages/Main.js';
import Cart from './pages/Cart.js';
import Data from '../src/components/Main/Data.js';
let Detail = lazy(() => import('./pages/Detail.js'));

function App() {
  let [shoes, shoes변경] = useState(Data);

  return (
    <div className='App'>
      {/* 네비게이션 바 */}
      <NavigationBar shoes={shoes} shoes변경={shoes변경} />
      <Switch>
        <Route exact path='/'>
          {/* 메인페이지 */}
          <Main shoes={shoes} shoes변경={shoes변경} />
        </Route>
        <Route path='/cart'>
          {/* 장바구니 페이지 */}
          <Cart />
        </Route>
        <Route path='/detail/:id'>
          <Suspense fallback={<div>로딩중</div>}>
            {/* 상세 페이지 */}
            <Detail shoes={shoes} shoes변경={shoes변경} />
          </Suspense>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
