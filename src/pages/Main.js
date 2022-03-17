/* import Component */
import Items from '../components/Main/Items.js';
import Jumbotron from '../components/Main/Jumbotron.js';

function Main(props) {
  return (
    <>
      <Jumbotron />
      <Items shoes={props.shoes} shoes변경={props.shoes변경} />
    </>
  );
}

export default Main;
