/*----- Import Components -----*/
import { DesktopHeader } from '../components/DesktopHeader.js';
import { MobileHeader } from '../components/MobileHeader.js';

export const Header = () => {
  return `
    <div id = 'header_container'>
      ${DesktopHeader()}
      ${MobileHeader()}
    </div>
  `;
};
