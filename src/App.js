import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';
import axios from 'axios';
import Data from './data.js';
import Detail from './Detail.js';
import { Link, Route, Switch } from 'react-router-dom';

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
            <div className='row'>
              {shoes.map((a, i) => {
                return <Card shoes={a} i={i} key={i} />;
              })}
            </div>
            {!더보기 && (
              <button
                className='btn btn-primary'
                onClick={() => {
                  axios
                    .get('https://codingapple1.github.io/shop/data2.json')
                    .then(result => {
                      shoes변경([...shoes, ...result.data]);
                    })
                    .catch(() => {
                      console.log('실패');
                    });
                }}
              >
                더 보기
              </button>
            )}
          </div>
        </Route>

        <Route path='/detail/:id'>
          <Detail shoes={shoes} />
        </Route>
      </Switch>
    </div>
  );
}

function Card(props) {
  return (
    <div className='col-md-4' key={props.id}>
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
    </div>
  );
}

export default App;
