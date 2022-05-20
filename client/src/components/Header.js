import logoImg from '../images/logoImg.png';
import searchIcon from '../images/searchIcon.png';

export const Header = () => {
  return `
    <div id = 'header_container'>
      <div id = 'desktop_wrapper'>
        <div class = 'logo_wrapper'>
          <img src = ${logoImg} alt = 'logoImg'/>
        </div>
        <div class = 'search_box'>
          <input placeholder = '배우고 싶은 지식을 입력해보세요.'/>
          <div class = 'icon_wrapper'>
            <img src = ${searchIcon} alt = 'searchIcon'/>
          </div>
        </div>
      </div>

      <div id = 'mobile_wrapper'>
        <div class = 'mobile_icon_wrapper'>
          <img src = ${searchIcon} alt 'searchIcon'/>
        </div>
        <div class = 'mobile_logo_wrapper'>
          <img src = ${logoImg} alt 'logoImg'/>
        </div>
      </div>

    </div>
  `;
};
