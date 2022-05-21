/*----- Import Images -----*/
import logoImg from '../images/logoImg.png';
import searchIcon from '../images/searchIcon.png';
import closeButton from '../images/closeButton.png';

/*----- 클래스명 변경 관리 Desktop -----*/
// desktop_search_box: 검색창 인풋 박스
// &_active: 활성화 상태
// &_typed: 검색어 입력시

// desktop_search_result: 검색결과창
// &_active: 활성화 상태

/*----- 클래스명 변경 관리 Mobile -----*/
// mobile_search_box: 검색창 인풋 박스
// &_active: 활성화 상태

// mobile_search_result: 검색결과창
// &_active: 활성화 상태

// search_background: 검색창 배경
// &_active: 활성화 상태

export const Header = () => {
  return `
    <div id = 'header_container'>

      <div id = 'desktop_wrapper'>
        <div class = 'logo_wrapper'>
          <img src = ${logoImg} alt = 'logoImg'/>
        </div>
        <div class = 'desktop_search_box'>
          <input class = 'desktop_search_input' placeholder = '배우고 싶은 지식을 입력해보세요.'/>
          <div class = 'icon_wrapper'>
            <img src = ${searchIcon} alt = 'searchIcon'/>
          </div>
        </div>
        <div class = 'desktop_search_result'>
          <ul class = 'result'>강의강의강의강의강의강의강의강의강의강의</ul>
          <ul class = 'result'>강의강의강의강의강의강의</ul>
          <ul class = 'result'>강의강의강의강의강의</ul>
          <ul class = 'result'>강의강의강의강의강의</ul>
          <ul class = 'result'>강의강의강의강의</ul>
        </div>
      </div>
        

      <div id = 'mobile_wrapper'>
        <div class = 'mobile_icon_wrapper'>
          <img src = ${searchIcon} alt 'searchIcon'/>
        </div>
        <div class = 'mobile_logo_wrapper'>
          <img src = ${logoImg} alt 'logoImg'/>
        </div>

        <div class = 'mobile_search_box'>
          <input class = 'mobile_search_input' placeholder = '배우고 싶은 지식을 입력해보세요.'/>
          <div class = 'icon_wrapper'>
            <img src = ${searchIcon} alt = 'searchIcon'/>
          </div>
          <div class = 'close_wrapper'>
            <img src = ${closeButton} alt = 'closeButton'/>
          </div>
        </div>
        
        <div class = 'mobile_search_result'>
          <ul class = 'result'>강의강의강의강의강의강의강의강의강의강의</ul>
          <ul class = 'result'>강의강의강의강의강의강의</ul>
          <ul class = 'result'>강의강의강의강의강의</ul>
          <ul class = 'result'>강의강의강의강의강의</ul>
          <ul class = 'result'>강의강의강의강의</ul>
        </div>

      </div>

      <div class = 'search_background'></div>
    </div>
  `;
};
