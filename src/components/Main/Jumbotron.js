/* import Component */
import '../../styles/components/Main/Jumbotron.css';

function Jumbotron() {
  return (
    <div className='Jumbotron'>
      <div className='JumbotronBackground'>
        <h1 className='JumbotronHello'>20% Season Off</h1>
        <p className='JumbotronWelcome'>Welcome to ShoeShop!</p>
        <button className='JumbotronButton'>Shop</button>
      </div>
    </div>
  );
}

export default Jumbotron;
