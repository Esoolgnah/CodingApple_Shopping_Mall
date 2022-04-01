/* import CSS */
import '../../../styles/components/Modal/Detail/GoCartModal.css';
/* import Library */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function GoCartModal() {
  let history = useHistory();
  let dispatch = useDispatch();

  const goCart = () => {
    modalOff();
    history.push('/cart');
  };

  const modalOff = () => {
    dispatch({
      type: 'goCartModalOff',
    });
  };

  return (
    <div id='modalContainer'>
      <div className='bg' onClick={modalOff} />
      <div className='goCartModal'>
        <p className='goCartModalTitle'>{`장바구니에 상품이 추가되었습니다.\n장바구니 페이지로 이동하시겠습니까?`}</p>
        <div className='goCartModalBtnWrapper'>
          <button className='goCartModalBtn opacity' onClick={goCart}>
            이동하기
          </button>

          <button className='goCartModalBtn opacity' onClick={modalOff}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
export default GoCartModal;
