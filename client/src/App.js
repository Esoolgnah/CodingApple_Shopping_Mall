/*----- Import Pages -----*/
import { MainPage } from './pages/MainPage.js';
import { DetailPage } from './pages/DetailPage.js';
/*----- Import Components -----*/
import { AddModal } from './components/modals/AddModal.js';
import { AlertModal } from './components/modals/AlertModal.js';
import { Header } from './components/Header.js';
/*----- Import Style -----*/
import './scss/main.scss';

export const App = () => `
  <div>
    <div>
    </div>
    <div>
      ${Header()}
    </div>
    <div>
      ${MainPage()}
    </div>
  </div>
`;
