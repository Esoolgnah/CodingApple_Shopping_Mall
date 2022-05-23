import { route } from '../utils/router.js';
/*----- Import Hooks -----*/
import { useState } from '../core/MyReact.js';
/*----- Import Images -----*/
import loadingSpinner from '../images/loadingSpinner.gif';
import logoImg from '../images/logoImg.png';
import searchIcon from '../images/searchIcon.png';
import closeButton from '../images/closeButton.png';

/*----- 클래스명 변경 관리 Mobile -----*/
// mobile_search_box: 검색창 인풋 박스 전체
// &_active: 활성화 상태

// mobile_search_input: 검색 input
// &_active: 활성화 상태

// mobile_search_result: 검색결과창
// &_active: 활성화 상태

// mobile_search_background: 검색창 배경
// &_active: 활성화 상태

export const MobileHeader = () => {
  //모바일 search 상태
  const [isMobileSearchButtonClicked, setIsMobileSearchButtonClicked] =
    useState(false);
  const [mobileInputText, setMobileInputText] = useState('');
  const [mobileSearchResult, setMobileSearchResult] = useState([]);
  const [isMobileSearchLoaded, setIsMobileSearchLoaded] = useState(true);

  // 모바일 검색 결과 받아오기
  const getMobileSearchResult = async (value) => {
    // 검색 로딩 시작
    setIsMobileSearchLoaded(false);
    try {
      const searchInput = value;
      const response = await axios.get(
        `http://localhost:3000/api/courses?search=${searchInput}`,
      );
      if (response.data.ok) {
        let mobileSearchResult = Object.entries(response.data)[1][1].courses;
        setIsMobileSearchLoaded(true);
        setMobileSearchResult(mobileSearchResult);
      }
    } catch (err) {
      alert('Server Error!\n다시 시도해주세요.');
    }
  };

  const clickMobileSearchOpen = (isClicked) => {
    if (isClicked === true) {
      setIsMobileSearchButtonClicked(true);
      if (mobileInputText.length < 2 && mobileSearchResult.length > 0)
        deleteMobileSearchResult();
    }
  };

  // 모바일 검색버튼 클릭시 검색어 이미 있고 길이 2 이상이면 검색!
  const clickMobileSearchButton = (isClicked) => {
    if (isClicked === true) {
      // 검색창 열려있을시 검색어 검색
      checkIsValidMobileSearch(mobileInputText);
    } else if (isClicked === false) {
      setIsMobileSearchButtonClicked(true);
    }
  };

  // 검색어 이미 있고 길이 2 이상이면 검색
  const checkIsValidMobileSearch = (mobileInputText) => {
    if (mobileInputText.length >= 2) {
      getMobileSearchResult(mobileInputText);
    } else if (mobileInputText.length < 2) {
      deleteMobileSearchResult();
      alert('검색어를 2글자 이상 입력해주세요!');
    }
  };

  // 모바일 검색창 닫기
  const closeMobileSearch = (isClosed) => {
    setIsMobileSearchButtonClicked(isClosed);
  };

  //모바일 검색결과 비우기
  const deleteMobileSearchResult = () => {
    setMobileSearchResult([]);
  };

  // 모바일 검색창 입력할 때마다
  const changeMobileInput = (keyCode, inputValue) => {
    const value = inputValue;
    let valueLength = value.length;

    // enter 입력시
    if (keyCode === 13) {
      if (valueLength >= 2) {
        getMobileSearchResult(value);
      } else if (valueLength < 2) {
        alert('검색어를 2글자 이상 입력해주세요!');
      }
    }
  };

  // 모바일 검색창 포커싱 떠나도 검색어 저장
  const saveMobileInput = (value) => {
    setMobileInputText(value);
  };

  // 모바일 검색어 클릭시 상세페이지 이동
  const goDetailPageMobile = (id) => {
    closeMobileSearch();
    deleteMobileSearchResult();
    setIsMobileSearchButtonClicked(false);
    setMobileInputText('');
    console.log(id);
  };

  //모바일
  window.clickMobileSearchOpen = () => clickMobileSearchOpen(true);
  window.clickMobileSearchButton = () =>
    clickMobileSearchButton(isMobileSearchButtonClicked);
  window.closeMobileSearch = () => closeMobileSearch(false);
  window.changeMobileInput = (keyCode, inputValue) =>
    changeMobileInput(keyCode, inputValue);
  window.saveMobileInput = (value) => saveMobileInput(value);
  window.goDetailPageMobile = (id) => goDetailPageMobile(id);

  return `
      <div id = 'mobile_wrapper'>
        <div class = 'mobile_icon_wrapper' onclick="clickMobileSearchOpen()">
          <img src = ${searchIcon} alt = 'searchIcon'/>
        </div>
        <div class = 'mobile_logo_wrapper'>
          <a href='/' onclick="${route}"></a>
          <img src = ${logoImg} alt = 'logoImg'/>
        </div>

        <div class = ${
          isMobileSearchButtonClicked === true
            ? 'mobile_search_box_active'
            : 'mobile_search_box'
        }>
          <input
          class = ${
            isMobileSearchButtonClicked === true
              ? 'mobile_search_input_active'
              : 'mobile_search_input'
          } 
            type = 'text'
            placeholder = '배우고 싶은 지식을 입력해보세요.'
            onkeyup = "changeMobileInput(event.keyCode,this.value)"
            onchange = "saveMobileInput(event.target.value)"
            value=${mobileInputText.length > 0 ? mobileInputText : ''}
            >
          <div class='icon_wrapper' onclick="clickMobileSearchButton()">
            <img src = ${searchIcon} alt = 'searchIcon'/>
          </div>
          <div class = 'close_wrapper' onclick="closeMobileSearch()">
            <img src = ${closeButton} alt = 'closeButton'/>
          </div>
        </div>
        
        <div class = ${
          isMobileSearchButtonClicked === true
            ? 'mobile_search_result_active'
            : 'mobile_search_result'
        }>
          ${
            mobileSearchResult.length > 0 && isMobileSearchLoaded === true
              ? mobileSearchResult.map((e) => {
                  return `<ul class='result' key=${e.id} onclick="goDetailPageMobile(${e.id})">${e.title}
                    <a href='/Detail/${e.id}' onclick="${route}"></a>
                  </ul>`;
                })
              : mobileSearchResult.length === 0 && isMobileSearchLoaded === true
              ? `<div class = 'mobile_search_loading_wrapper'>
                   
                </div>`
              : `<div class = 'mobile_search_loading_wrapper'>
                   <div class = 'img_wrapper'>
                    <img src = ${loadingSpinner} alt = 'loadingSpinner'/>
                  </div>
                </div>`
          }
          
        </div>
      </div>
      <div class = ${
        isMobileSearchButtonClicked === true
          ? 'search_mobile_background_active'
          : 'search_mobile_background'
      } onclick="closeMobileSearch()">
      </div>
  `;
};
