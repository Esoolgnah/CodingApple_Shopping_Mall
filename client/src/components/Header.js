/*----- Import Hooks -----*/
import { useState } from '../core/MyReact.js';
/*----- Import Images -----*/
import loadingSpinner from '../images/loadingSpinner.gif';
import logoImg from '../images/logoImg.png';
import searchIcon from '../images/searchIcon.png';
import closeButton from '../images/closeButton.png';

/*----- 클래스명 변경 관리 Desktop -----*/
// desktop_search_box: 검색창 인풋 박스 전체
// &_active: 활성화 상태

// desktop_search_input: 검색 input
// &_typed: 검색어 입력시

// desktop_search_result: 검색결과창
// &_active: 검색어 입력시

/*----- 클래스명 변경 관리 Mobile -----*/
// mobile_search_box: 검색창 인풋 박스 전체
// &_active: 활성화 상태

// mobile_search_input: 검색 input
// &_active: 활성화 상태

// mobile_search_result: 검색결과창
// &_active: 활성화 상태

// search_background: 검색창 배경
// &_active: 활성화 상태

export const Header = () => {
  //데스크탑 search 상태
  const [isDesktopInputTyped, setIsDesktopInputTyped] = useState(false);
  const [desktopInputText, setDesktopInputText] = useState('');
  const [desktopSearchResult, setDesktopSearchResult] = useState([]);
  const [isDesktopSearchLoaded, setIsDesktopSearchLoaded] = useState(true);

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
      alert('Server Error!\n다시 시도합니다.');
      getMobileSearchResult(value);
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
  const goDetailPage = (id) => {
    closeMobileSearch();
    deleteMobileSearchResult();
    setIsMobileSearchButtonClicked(false);
    setMobileInputText('');
    console.log(id);
    deleteDesktopSearchResult();
    closeDesktopSearch();
    setDesktopInputText('');
    setIsDesktopInputTyped(false);
  };

  // 데스크탑 검색창 입력할 때마다
  const changeDesktopInput = (keyCode, inputValue) => {
    const value = inputValue;
    let valueLength = value.length;

    // enter 입력시
    if (keyCode === 13) {
      if (valueLength >= 2) {
        getDesktopSearchResult(value);
        setIsDesktopInputTyped(true);
      } else if (valueLength < 2) {
        alert('검색어를 2글자 이상 입력해주세요!');
      }
    }
  };

  // 데스크탑 검색창 닫기
  const closeDesktopSearch = (isClosed) => {
    setIsDesktopInputTyped(isClosed);
  };

  //모바일 검색결과 비우기
  const deleteDesktopSearchResult = () => {
    setDesktopSearchResult([]);
  };

  // 데스크탑 검색창 포커싱 떠나도 검색어 저장
  const saveDesktopInput = (value) => {
    setDesktopInputText(value);
  };

  // 검색어 이미 있고 길이 2 이상이면 검색
  const checkIsValidDesktopSearch = (desktopInputText) => {
    if (desktopInputText.length >= 2) {
      setIsDesktopInputTyped(true);
      getDesktopSearchResult(desktopInputText);
    } else if (desktopInputText.length < 2) {
      alert('검색어를 2글자 이상 입력해주세요!');
    }
  };

  // 데스크탑 검색버튼 클릭시 검색어 이미 있고 길이 2 이상이면 검색!
  const clickDesktopSearchButton = (searchButtonIsClicked) => {
    if (searchButtonIsClicked === true) {
      // 검색창 열려있을시 검색어 검색
      checkIsValidDesktopSearch(desktopInputText);
    }
  };

  // 데스크탑 검색 결과 받아오기
  const getDesktopSearchResult = async (value) => {
    // 검색 로딩 시작
    setIsDesktopSearchLoaded(false);
    try {
      const searchInput = value;
      const response = await axios.get(
        `http://localhost:3000/api/courses?search=${searchInput}`,
      );
      if (response.data.ok) {
        let desktopSearchResult = Object.entries(response.data)[1][1].courses;
        setIsDesktopSearchLoaded(true);
        setDesktopSearchResult(desktopSearchResult);
      }
    } catch (err) {
      alert('Server Error!\n다시 시도합니다.');
      getDesktopSearchResult(value);
    }
  };

  // 검색결과가 이미 있고 2글자 이상이라면 다시 결과창 보여줌
  const checkDesktopSearchResult = (result) => {
    if (
      result.length > 0 &&
      desktopInputText.length >= 2 &&
      isDesktopInputTyped === false
    )
      setIsDesktopInputTyped(true);
  };

  //모바일
  window.clickMobileSearchButton = () =>
    clickMobileSearchButton(isMobileSearchButtonClicked);
  window.closeMobileSearch = () => closeMobileSearch(false);
  window.changeMobileInput = (keyCode, inputValue) =>
    changeMobileInput(keyCode, inputValue);
  window.saveMobileInput = (value) => saveMobileInput(value);

  //데스크탑
  window.clickDesktopSearchButton = () => clickDesktopSearchButton(true);
  window.closeDesktopSearch = () => closeDesktopSearch(false);
  window.changeDesktopInput = (keyCode, inputValue) =>
    changeDesktopInput(keyCode, inputValue);
  window.saveDesktopInput = (value) => saveDesktopInput(value);
  window.checkDesktopSearchResult = () =>
    checkDesktopSearchResult(desktopSearchResult);
  //상세 페이지 이동
  window.goDetailPage = (id) => goDetailPage(id);

  return `
    <div id = 'header_container'>
      <div id = 'desktop_wrapper'>
        <div class = 'logo_wrapper'>
          <img src = ${logoImg} alt = 'logoImg'/>
        </div>
        <div class = ${
          isDesktopInputTyped === true
            ? 'desktop_search_box_active'
            : 'desktop_search_box'
        }>
          <input class = ${
            isDesktopInputTyped === true
              ? 'desktop_search_input_typed'
              : 'desktop_search_input'
          } 
          type = 'text'
          placeholder = '배우고 싶은 지식을 입력해보세요.'
          onkeyup = "changeDesktopInput(event.keyCode,this.value)"
          onchange = "saveDesktopInput(event.target.value)"
          onfocus = "checkDesktopSearchResult()"
          value=${desktopInputText.length > 0 ? desktopInputText : ''}
          >
          <div class = 'icon_wrapper' onclick="clickDesktopSearchButton()">
            <img src = ${searchIcon} alt = 'searchIcon'/>
          </div>
        </div>
        <div class = ${
          isDesktopInputTyped === true
            ? 'desktop_search_result_active'
            : 'desktop_search_result'
        }>
        ${
          desktopSearchResult.length > 0 && isDesktopSearchLoaded === true
            ? desktopSearchResult.map((e) => {
                return `<ul class='result' key=${e.id} onclick="goDetailPage(${e.id})">${e.title}</ul>`;
              })
            : desktopSearchResult.length === 0 && isDesktopSearchLoaded === true
            ? `<div class = 'desktop_search_loading_wrapper'>
                 
              </div>`
            : `<div class = 'desktop_search_loading_wrapper'>
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
      } onclick="closeMobileSearch()"></div>


      <div id = 'mobile_wrapper'>
        <div class = 'mobile_icon_wrapper' onclick="clickMobileSearchButton()">
          <img src = ${searchIcon} alt = 'searchIcon'/>
        </div>
        <div class = 'mobile_logo_wrapper'>
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
                  return `<ul class='result' key=${e.id} onclick="goDetailPage(${e.id})">${e.title}</ul>`;
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
        isDesktopInputTyped === true
          ? 'search_desktop_background_active'
          : 'search_desktop_background'
      } onclick="closeDesktopSearch()"></div>
    </div>
  `;
};
