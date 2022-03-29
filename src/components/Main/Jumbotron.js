/* import CSS*/
import '../../styles/components/Main/Jumbotron.css';
/* import Library */
import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

function Jumbotron() {
  const [titleIn, setTitleIn] = useState(false);

  useEffect(() => {
    setTitleIn(true);
  }, []);

  return (
    <div className='Jumbotron'>
      <div className='JumbotronBackground'>
        <CSSTransition in={titleIn} classNames='title' timeout={800}>
          <h1 className='JumbotronHello'>러닝의 계절</h1>
        </CSSTransition>
        <CSSTransition in={titleIn} classNames='title' timeout={800}>
          <p className='JumbotronWelcome'>사뿐하게 CLOUD EX</p>
        </CSSTransition>
      </div>
    </div>
  );
}

export default Jumbotron;
