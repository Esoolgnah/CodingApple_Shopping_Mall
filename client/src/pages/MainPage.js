import { route } from '../utils/router.js';
/*----- Import Hooks -----*/
import { useState } from '../core/MyReact.js';

/*----- Import Images -----*/
import loadingSpinner from '../images/loadingSpinner.gif';
import defaultImg from '../images/defaultImg.png';
import addButton from '../images/addButton.png';

let mainPageRenderCount = 0;

export const MainPage = () => {
  const [isMainPageRendered, setIsMainPageRendered] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [mainFirstPageLoading, setMainFirstPageLoading] = useState(true);
  const [mainPagePosts, setMainPagePosts] = useState([]);
  const [mainPageLoading, setMainPageLoading] = useState(true);

  const pageCount = 12;

  // 새 게시물들 받아오기
  const getNewMainPagePosts = async (pageNumber) => {
    // 검색 로딩 시작
    setMainPageLoading(false);
    try {
      const response = await axios.get(
        `http://localhost:3000/api/courses/?page=${pageNumber}&count=${pageCount}`,
      );
      if (response.data.ok) {
        let posts = Object.entries(response.data)[1][1].courses;
        console.log(posts);
        setMainPageLoading(true);
        if (posts.length > 0) {
          let newPageNumber = pageNumber + 1;
          setPageNumber(newPageNumber);
          setMainPagePosts([...mainPagePosts, ...posts]);
        } else if (posts.length === 0) setMainPageLoading(true);
      }
    } catch (err) {
      alert('Server Error!\n다시 시도해주세요.');
      setMainPageLoading(true);
    }
  };

  //스크롤이 끝에 닿으면
  window.onscroll = function (e) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      if (
        isMainPageRendered === true &&
        mainFirstPageLoading === true &&
        mainPageLoading === true
      ) {
        getNewMainPagePosts(pageNumber);
      }
    }
  };

  /* 숫자에 콤마(,)추가하여 표시 */
  const addComma = (num) => {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ',');
  };

  // 첫 게시물들 받아오기
  const getFirstMainPagePosts = async (pageNumber) => {
    // 검색 로딩 시작
    setMainFirstPageLoading(false);
    try {
      const response = await axios.get(
        `http://localhost:3000/api/courses/?page=${pageNumber}&count=${pageCount}`,
      );
      if (response.data.ok) {
        let posts = Object.entries(response.data)[1][1].courses;
        setMainFirstPageLoading(true);
        setMainPagePosts(posts);
        if (posts.length > 0) {
          setIsMainPageRendered(true);
          let newPageNumber = pageNumber + 1;
          setPageNumber(newPageNumber);
        }
      }
    } catch (err) {
      alert('Server Error!\n새로고침해주세요.');
    }
  };

  if (isMainPageRendered === false && mainPageRenderCount === 0) {
    getFirstMainPagePosts(pageNumber);
    mainPageRenderCount = 1;
  }

  return `
    <div id = 'mainpage_viewport'>
      <div id = 'mainpage_container'>
        <div class = 'title_wrapper'>
          <p>성장 기회의 평등을 추구합니다.</p>
        </div>
        <div class = 'posts_wrapper'>
        ${
          mainFirstPageLoading === false && mainPagePosts.length === 0
            ? `<div class = 'posts_wrapper_loading_zone'>
                 <img src=${loadingSpinner} alt = 'loadingSpinner'/>
               </div>
             `
            : mainFirstPageLoading === true && mainPagePosts.length > 0
            ? mainPagePosts.map((el) => {
                return `
                  <div class='card' key=${el.id}>
                  <a href='/Detail/${el.id}' onclick="${route}"></a>
                    <div class='img_wrapper'>
                      <img src=${
                        el.coverImageUrl !==
                          'https://via.placeholder.com/300x300' &&
                        el.coverImageUrl !==
                          'https://via.placeholder.com/500x500'
                          ? el.coverImageUrl
                          : defaultImg
                      } alt='defaultImg' />
                    </div>
                    <div class='contents_wrapper'>
                      <p class='title'>${el.title}</p>
                      <p class='tutor'>${el.instructorName}</p>
                      <p class='price'>₩${addComma(el.price)}</p>
                    </div>
                  </div>
                `;
              })
            : ''
        }
        </div>
        ${
          mainPageLoading === false
            ? `<div class='posts_new_loading_zone'>'
              <img src=${loadingSpinner} alt = 'loadingSpinner'/>
            </div>`
            : ''
        }
        <div class = 'add_button'>
          <img src = ${addButton} alt='addButton'/>
          <a href='/AddModal' onclick="${route}"></a>
        </div>
      <div/>
    </div>
  `;
};
