import { route } from '../utils/router.js';
/*----- Import Hooks -----*/
import { useState } from '../core/MyReact.js';
/*----- Import Images -----*/
import defaultImg from '../images/defaultImg.png';

let isRendered = false;
let detailPageRenderCount = 0;
export const DetailPage = (param) => {
  const [detailTitle, setDetailTitle] = useState('');
  const [detailTutor, setDetailTutor] = useState('');
  const [detailPrice, setDetailPrice] = useState(0);
  const [detailImgUrl, setDetailImgUrl] = useState('');

  /* 숫자에 콤마(,)추가하여 표시 */
  const addComma = (num) => {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ',');
  };

  // 파라미터 받아오기
  const getDetailInfo = async (id) => {
    try {
      const detailId = id;
      const response = await axios.get(
        `http://localhost:3000/api/courses/${detailId}`,
      );
      if (response.data.ok && isRendered === false) {
        let detailInfo = Object.entries(response.data)[1][1].course;
        isRendered = true;
        setDetailTitle(detailInfo.title);
        setDetailTutor(detailInfo.instructorName);
        setDetailPrice(detailInfo.price);
        setDetailImgUrl(detailInfo.coverImageUrl);
      }
    } catch (err) {
      alert('Server Error!\n새로고침해주세요.');
    }
  };

  if (isRendered === false && detailPageRenderCount === 0) {
    getDetailInfo(param);
    detailPageRenderCount = 1;
  }

  return `
    <div id = 'detailpage_viewport'>
      <div id = 'detailpage_container'>
        <div id = 'jumbotron'>
          <div class = 'all_wrapper'>
            <div class = 'img_wrapper'>
              <img src = ${
                detailImgUrl !== 'https://via.placeholder.com/300x300' &&
                detailImgUrl !== 'https://via.placeholder.com/500x500'
                  ? detailImgUrl
                  : defaultImg
              } alt = 'defaultImg'/>
            </div>
            <div class = 'contents_wrapper'>
              <p class = 'title'>${detailTitle}</p>
              <div class = 'mid_wrapper'>
                <p class = 'tutor'>${detailTutor}</p>
                <p class = 'price'> ₩${addComma(detailPrice)}</p>
              </div>
              <div class = 'button_wrapper'>
                <button class = 'goCartButton'>바구니에 담기</button>
  
                  <button class = 'goBackButton'>돌아가기</button>
                  <a href='/' onclick="${route}"></a>
              </div>
            </div>
          </div>
        </div>
      <div/>
    </div>
  `;
};
