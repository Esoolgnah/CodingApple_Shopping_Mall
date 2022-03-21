/* import Library */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CheckBox(props) {
  let state = useSelector(state => state);
  let dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [realCheck, setRealCheck] = useState(false);

  const changeChecked = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    if (checked === true) {
      dispatch({
        type: 'check추가',
        데이터: props.id,
      });
      console.log(state.reducer3);
      console.log(state.reducer3);
    } else if (checked === false) {
      dispatch({
        type: 'check해제',
        데이터: props.id,
      });
      console.log(state.reducer3);
      console.log(state.reducer3);
    }
  }, [checked]);

  return <input type='checkbox' checked={checked} onChange={changeChecked} />;
}

export default CheckBox;
