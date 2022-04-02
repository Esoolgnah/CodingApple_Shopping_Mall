/* import Component */
import Items from '../components/Main/Items.js';
import Carousel from '../components/Main/Carousel.js';

function Main(props) {
  return (
    <>
      <Carousel />
      <Items shoes={props.shoes} shoes변경={props.shoes변경} />
    </>
  );
}

export default Main;
