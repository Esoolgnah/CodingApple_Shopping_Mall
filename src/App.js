import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  let [shoes, shoes변경] = useState(Data);
  return (
    <div className='App'>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#link'>Link</Nav.Link>
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
        </div>
      </Route>
      <Route path='/detail'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <img
                src='https://codingapple1.github.io/shop/shoes1.jpg'
                width='100%'
              />
            </div>
            <div className='col-md-6 mt-4'>
              <h4 className='pt-5'>상품명</h4>
              <p>상품설명</p>
              <p>120000원</p>
              <button className='btn btn-danger'>주문하기</button>
            </div>
          </div>
        </div>
      </Route>
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
