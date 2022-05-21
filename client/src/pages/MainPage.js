/*----- Import Images -----*/
import defaultImg from '../images/defaultImg.png';
import addButton from '../images/addButton.png';

export const MainPage = () => {
  return `
    <div id = 'mainpage_viewport'>
      <div id = 'mainpage_container'>
        <div class = 'title_wrapper'>
          <p>성장 기회의 평등을 추구합니다.</p>
        </div>
        <div class = 'posts_wrapper'>

          <div class = 'card'>
            <div class = 'img_wrapper'>
              <img src = ${defaultImg} alt = 'defaultImg'/>
            </div>
            <div class = 'contents_wrapper'>
              <p class = 'title'>Oracle SQL Database 11g PL</p>
              <p class = 'tutor'>지식공유자400</p>
              <p class = 'price'>₩150,000</p>
            </div>
          </div>
          <div class = 'card'>
            <div class = 'img_wrapper'>
              <img src = ${defaultImg} alt = 'defaultImg'/>
            </div>
            <div class = 'contents_wrapper'>
              <p class = 'title'>Oracle SQL Database 11g PL</p>
              <p class = 'tutor'>지식공유자400</p>
              <p class = 'price'>₩150,000</p>
            </div>
          </div>
          <div class = 'card'>
            <div class = 'img_wrapper'>
              <img src = ${defaultImg} alt = 'defaultImg'/>
            </div>
            <div class = 'contents_wrapper'>
              <p class = 'title'>Oracle SQL Database 11g PL</p>
              <p class = 'tutor'>지식공유자400</p>
              <p class = 'price'>₩150,000</p>
            </div>
          </div>
          <div class = 'card'>
            <div class = 'img_wrapper'>
              <img src = ${defaultImg} alt = 'defaultImg'/>
            </div>
            <div class = 'contents_wrapper'>
              <p class = 'title'>Oracle SQL Database 11g PL</p>
              <p class = 'tutor'>지식공유자400</p>
              <p class = 'price'>₩150,000</p>
            </div>
          </div>
          <div class = 'card'>
            <div class = 'img_wrapper'>
              <img src = ${defaultImg} alt = 'defaultImg'/>
            </div>
            <div class = 'contents_wrapper'>
              <p class = 'title'>Oracle SQL Database 11g PL</p>
              <p class = 'tutor'>지식공유자400</p>
              <p class = 'price'>₩150,000</p>
            </div>
          </div>
          <div class = 'card'>
            <div class = 'img_wrapper'>
              <img src = ${defaultImg} alt = 'defaultImg'/>
            </div>
            <div class = 'contents_wrapper'>
              <p class = 'title'>Oracle SQL Database 11g PL</p>
              <p class = 'tutor'>지식공유자400</p>
              <p class = 'price'>₩150,000</p>
            </div>
          </div>
          <div class = 'card'>
            <div class = 'img_wrapper'>
              <img src = ${defaultImg} alt = 'defaultImg'/>
            </div>
            <div class = 'contents_wrapper'>
              <p class = 'title'>Oracle SQL Database 11g PL</p>
              <p class = 'tutor'>지식공유자400</p>
              <p class = 'price'>₩150,000</p>
            </div>
          </div>
          <div class = 'card'>
            <div class = 'img_wrapper'>
              <img src = ${defaultImg} alt = 'defaultImg'/>
            </div>
            <div class = 'contents_wrapper'>
              <p class = 'title'>Oracle SQL Database 11g PL</p>
              <p class = 'tutor'>지식공유자400</p>
              <p class = 'price'>₩150,000</p>
            </div>
          </div>
          <div class = 'card'>
            <div class = 'img_wrapper'>
              <img src = ${defaultImg} alt = 'defaultImg'/>
            </div>
            <div class = 'contents_wrapper'>
              <p class = 'title'>Oracle SQL Database 11g PL</p>
              <p class = 'tutor'>지식공유자400</p>
              <p class = 'price'>₩150,000</p>
            </div>
          </div>
          <div class = 'card'>
            <div class = 'img_wrapper'>
              <img src = ${defaultImg} alt = 'defaultImg'/>
            </div>
            <div class = 'contents_wrapper'>
              <p class = 'title'>Oracle SQL Database 11g PL</p>
              <p class = 'tutor'>지식공유자400</p>
              <p class = 'price'>₩150,000</p>
            </div>
          </div>
          <div class = 'card'>
            <div class = 'img_wrapper'>
              <img src = ${defaultImg} alt = 'defaultImg'/>
            </div>
            <div class = 'contents_wrapper'>
              <p class = 'title'>Oracle SQL Database 11g PL</p>
              <p class = 'tutor'>지식공유자400</p>
              <p class = 'price'>₩150,000</p>
            </div>
          </div>
          <div class = 'card'>
            <div class = 'img_wrapper'>
              <img src = ${defaultImg} alt = 'defaultImg'/>
            </div>
            <div class = 'contents_wrapper'>
              <p class = 'title'>Oracle SQL Database 11g PL</p>
              <p class = 'tutor'>지식공유자400</p>
              <p class = 'price'>₩150,000</p>
            </div>
          </div>


        </div>

        <div class = 'add_button'>
          <img src = ${addButton} alt='addButton'/>
        </div>
        
      <div/>
    </div>
  `;
};
