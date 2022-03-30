/* import Library */
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';

function NavigationBar(props) {
  let history = useHistory();

  const goHome = () => {
    props.shoes변경([props.shoes[0], props.shoes[1], props.shoes[2]]);
    history.push('/');
  };
  const goCart = () => {
    history.push('/cart');
  };

  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand onClick={goHome}>
            <div className='opacity'>ShoeShop</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link onClick={goHome}>Home</Nav.Link>
              <Nav.Link onClick={goCart}>Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
