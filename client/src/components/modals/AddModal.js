/*----- Import Hooks -----*/
import { useState } from '../../core/MyReact.js';

export const AddModal = () => {
  const [eduTitle, setEduTitle] = useState('');
  const [eduPrice, setEduPrice] = useState(0);

  const [addModalTitleInput, setAddModalTitleInput] = useState('');
  const [addModalPriceInput, setAddModalPriceInput] = useState('');

  const saveModalTitle = (value) => {
    setAddModalTitleInput(value);
  };
  const saveModalPrice = (value) => {
    setAddModalPriceInput(value);
  };

  window.saveModalTitle = () => saveModalTitle(value);
  window.saveModalPrice = () => saveModalPrice(value);

  window.writeButtonClick = () => writeButtonClick(true);
  window.cancelbuttonButtonClick = () => cancelButtonClick(true);

  return `
    <div id = 'addmodal_viewport'>
      <div id = 'addmodal_background'></div>
      <div id = 'addmodal_container'>
        <div class = 'contents_wrapper'>
          <p>강의 제목을 입력해주세요.</p>
          <div class = 'title_input_wrapper'>
            <input placeholder = '제목을 입력해주세요.' 
            onchange="saveModalTitle(this.value)"
            value=${addModalTitleInput.length > 0 ? addModalTitleInput : ''}>
          </div>
          <div class = 'price_input_wrapper'>
            <input placeholder = '가격을 입력해주세요.'
            onchange="saveModalPrice(this.value)"
            value=${addModalPriceInput.length > 0 ? addModalPriceInput : ''}>
          </div>
          <div class = 'button_wrapper'>
            <button class = 'write_button'>작성하기</button>
            <button class = 'cancel_button'>취소하기</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  `;
};
