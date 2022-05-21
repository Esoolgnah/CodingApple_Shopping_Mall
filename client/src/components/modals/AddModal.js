export const AddModal = () => {
  return `
    <div id = 'addmodal_viewport'>
      <div id = 'addmodal_background'></div>
      <div id = 'addmodal_container'>
        <div class = 'contents_wrapper'>
          <p>강의 제목을 입력해주세요.</p>
          <div class = 'title_input_wrapper'>
            <input placeholder = '제목을 입력해주세요.'/>
          </div>
          <div class = 'price_input_wrapper'>
            <input placeholder = '가격을 입력해주세요.'/>
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
