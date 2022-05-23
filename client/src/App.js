/*----- Import Hooks -----*/
import { useState } from './core/MyReact.js';
/*----- Import Pages -----*/
import { MainPage } from './pages/MainPage.js';
import { DetailPage } from './pages/DetailPage.js';
/*----- Import Components -----*/
import { AddModal } from './components/modals/AddModal.js';
import { AlertModal } from './components/modals/AlertModal.js';
import { Header } from './components/Header.js';
/*----- Import Style -----*/
import './scss/main.scss';

export const App = () => {
  let link = document.location.href;
  let linkSubStr = link.substr(0, 28);
  let param = 0;
  const [router, setRouter] = useState('mainPage');
  const [renderCount, setRenderCount] = useState(0);
  const [isOnAddModal, setIsOnAddModal] = useState(false);

  const mainPageLink = 'http://localhost:3001/';
  const detailPageLink = 'http://localhost:3001/Detail';
  if (linkSubStr === mainPageLink) {
    if (renderCount === 0) {
      setRouter('mainPage');
      let copy = renderCount + 1;
      setRenderCount(copy);
    }
  } else if (linkSubStr === detailPageLink) {
    param = link.replace(detailPageLink + '/', '');
    if (renderCount === 0) {
      setRouter('detailPage');
      let copy = renderCount + 1;
      setRenderCount(copy);
    }
  }

  return `
  <div>
    <div>
    </div>
    <div>
      ${Header()}
    </div>
    <div id='page_switch'>
      ${
        router === 'mainPage'
          ? MainPage()
          : router === 'detailPage'
          ? DetailPage(param)
          : 'Error'
      }
    </div>
  </div>
`;
};
