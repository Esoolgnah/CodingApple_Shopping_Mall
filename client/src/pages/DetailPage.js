/*----- Import Images -----*/
import defaultImg from '../images/defaultImg.png';

export const DetailPage = () => {
  return `
    <div id = 'detailpage_viewport'>
      <div id = 'detailpage_container'>
        <div id = 'jumbotron'>
          <div class = 'all_wrapper'>
            <div class = 'img_wrapper'>
              <img src = ${defaultImg} alt = 'defaultImg'/>
            </div>
            <div class = 'contents_wrapper'>
              <p class = 'title'>Oracle SQL Database 11g PL Oracle SQL Database 11g PL</p>
              <div class = 'mid_wrapper'>
                <p class = 'tutor'>지식공유자400</p>
                <p class = 'price'>₩150,000</p>
              </div>
              <div class = 'button_wrapper'>
                <button class = 'goCartButton'>바구니에 담기</button>
                <button class = 'goBackButton'>돌아가기</button>
              </div>
            </div>
          </div>
        </div>
      <div/>
    </div>
  `;
};
