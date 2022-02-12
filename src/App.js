import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import 상품 from './상품.js';

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
      <div className='Jumbotron'>
        <div className='JumbotronBackground'>
          <h1 className='JumbotronHello'>20% Season Off</h1>
          <p className='JumbotronWelcome'>Welcome to ShoeShop!</p>
          <button className='JumbotronButton'>Shop</button>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          {shoes.map(item => {
            return (
              <상품
                id={item.id}
                image={item.image}
                title={item.title}
                content={item.content}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
