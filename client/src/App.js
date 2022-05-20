/* Import Pages */
import { MainPage } from './pages/MainPage.js';
import { DetailPage } from './pages/DetailPage.js';
/* Import Components */
import { Header } from './components/Header.js';
/* Import Style */
import './scss/main.scss';

export const App = () => `
  <div>
    ${Header()}
    ${MainPage()}
  </div>
`;
