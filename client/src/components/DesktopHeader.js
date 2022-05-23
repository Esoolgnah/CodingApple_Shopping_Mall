import { route } from '../utils/router.js';
/*----- Import Hooks -----*/
import { useState } from '../core/MyReact.js';
/*----- Import Images -----*/
import loadingSpinner from '../images/loadingSpinner.gif';
import logoImg from '../images/logoImg.png';
import searchIcon from '../images/searchIcon.png';

/*----- 클래스명 변경 관리 Desktop -----*/
// desktop_search_box: 검색창 인풋 박스 전체
// &_active: 활성화 상태

// desktop_search_input: 검색 input
// &_typed: 검색어 입력시

// desktop_search_result: 검색결과창
// &_active: 검색어 입력시

// destop_search_background: 검색창 배경
// &_active: 활성화 상태

export const DesktopHeader = () => {
  //데스크탑 search 상태
  const [isDesktopInputTyped, setIsDesktopInputTyped] = useState(false);
  const [desktopInputText, setDesktopInputText] = useState('');
  const [desktopSearchResult, setDesktopSearchResult] = useState([]);
  const [isDesktopSearchLoaded, setIsDesktopSearchLoaded] = useState(true);

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

  //데스크탑 검색결과 비우기
  const deleteDesktopSearchResult = () => {
    setDesktopSearchResult([]);
  };

  // 데스크탑 검색창 포커싱 떠나도 검색어 저장
  const saveDesktopInput = (value) => {
    setDesktopInputText(value);
  };

  // 검색어의 길이가 2 이상이면 검색
  const checkIsValidDesktopSearch = (desktopInputText) => {
    if (desktopInputText.length >= 2) {
      getDesktopSearchResult(desktopInputText);
      setIsDesktopInputTyped(true);
    } else if (desktopInputText.length < 2) {
      alert('검색어를 2글자 이상 입력해주세요!');
    }
  };

  // 데스크탑 검색버튼 클릭시
  const clickDesktopSearchButton = () => {
    // 클릭됐을시 체크해서 검색

    checkIsValidDesktopSearch(desktopInputText);
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
      alert('Server Error!\n다시 시도해주세요.');
    }
  };

  // 검색결과가 이미 있다면 다시 결과창 보여줌
  const checkDesktopSearchResult = (result) => {
    if (
      result.length > 0 &&
      desktopInputText.length >= 2 &&
      isDesktopInputTyped === false
    )
      setIsDesktopInputTyped(true);
  };

  //상세 페이지 이동
  const goDetailPageDesktop = (id) => {
    console.log(id);
    closeDesktopSearch(false);
    setDesktopInputText('');
    deleteDesktopSearchResult();
  };

  window.clickDesktopSearchButton = () => clickDesktopSearchButton();
  window.closeDesktopSearch = () => closeDesktopSearch(false);
  window.changeDesktopInput = (keyCode, inputValue) =>
    changeDesktopInput(keyCode, inputValue);
  window.saveDesktopInput = (value) => saveDesktopInput(value);
  window.checkDesktopSearchResult = () =>
    checkDesktopSearchResult(desktopSearchResult);
  window.goDetailPageDesktop = (id) => goDetailPageDesktop(id);

  return `
      <div id = 'desktop_wrapper'>
        <div class = 'logo_wrapper'>
          <a href='/' onclick="${route}"></a>
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
                return `<ul class='result' key=${e.id} onclick="goDetailPageDesktop(${e.id})">${e.title}
                <a href='/Detail/${e.id}' onclick="${route}"></a>
                </ul>`;
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
        isDesktopInputTyped === true
          ? 'search_desktop_background_active'
          : 'search_desktop_background'
      } onclick="closeDesktopSearch()">
      </div>  
  `;
};
