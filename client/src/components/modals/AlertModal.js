/*----- Import Images -----*/
import errorImg from '../../images/errorImg.png';

export const AlertModal = () => {
  return `
    <div id = 'alertmodal_viewport'>
      <div id = 'alertmodal_background'></div>
      <div id = 'alertmodal_container'>
        <div class = 'contents_wrapper'>
          <div class = 'alert_img_wrapper'>
            <img src = ${errorImg} alt = 'errorImg'/>
          </div>
          <div class = 'alert_title_wrapper'>제목과 가격을<br>정확히 입력해주세요.</div>
          <div class = 'button_wrapper'>
            <button class = 'ok_button'>확인</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  `;
};
