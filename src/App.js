/* eslint-disable */
import React, { useState, useContext, lazy, Suspense } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';
import axios from 'axios';
import Data from './data.js';
import Cart from './Cart.js';
// import Detail from './Detail.js';
let Detail = lazy(() => import('./Detail.js'));

import { Link, Route, Switch, useHistory } from 'react-router-dom';

export let 재고context = React.createContext();

function App() {
  let [shoes, shoes변경] = useState(Data);
  let [더보기, 더보기변경] = useState(false);
  let [재고, 재고변경] = useState([10, 11, 12]);

  return (
    <div className='App'>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to='/'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='/detail'>
                Detail
              </Nav.Link>
              <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path='/'>
          <div className='Jumbotron'>
            <div className='JumbotronBackground'>
              <h1 className='JumbotronHello'>20% Season Off</h1>
              <p className='JumbotronWelcome'>Welcome to ShoeShop!</p>
              <button className='JumbotronButton'>Shop</button>
            </div>
          </div>

          <div className='container'>
            <재고context.Provider value={재고}>
              <div className='row'>
                {shoes.map((a, i) => {
                  return <Card shoes={a} i={i} key={i} />;
                })}
              </div>
            </재고context.Provider>

            {!더보기 && (
              <button
                className='btn btn-primary'
                onClick={() => {
                  axios
                    .get('https://codingapple1.github.io/shop/data2.json')
                    .then(result => {
                      if (result.data) shoes변경([...shoes, ...result.data]);
                    })
                    .catch(() => {
                      console.log('실패');
                    });
                }}
              >
                More
              </button>
            )}
          </div>
        </Route>

        <Route path='/cart'>
          <Cart></Cart>
        </Route>

        <Route path='/detail/:id'>
          <재고context.Provider value={재고}>
            <Suspense fallback={<div>로딩중</div>}>
              <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
            </Suspense>
          </재고context.Provider>
        </Route>
      </Switch>
    </div>
  );
}

function Card(props) {
  let history = useHistory();
  let 재고 = useContext(재고context);

  return (
    <div
      className='col-md-4'
      key={props.id}
      onClick={() => {
        history.push('/detail/' + props.shoes.id);
      }}
    >
      <img
        src={
          'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'
        }
        width='100%'
      />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
      {재고[props.i]}
    </div>
  );
}

export default App;
