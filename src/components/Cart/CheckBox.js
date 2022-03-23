/* import Library */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CheckBox(props) {
  const [bChecked, setBChecked] = useState(true);
  const [checked, setChecked] = useState(true);

  const changeChecked = () => {
    setBChecked(!bChecked);
  };

  useEffect(() => {
    if (props.checkList.has(props.id) === true) {
      setChecked(true);
      setBChecked(true);
    } else {
      setChecked(false);
      setBChecked(false);
    }
  }, [props.checkList]);

  useEffect(() => {
    if (bChecked === true) {
      let copy = new Set([...props.checkList]);
      copy.add(props.id);
      props.setCheckList(copy);
      console.log(props.checkList);
    } else {
      let copy = new Set([...props.checkList]);
      copy.delete(props.id);
      props.setCheckList(copy);
      console.log(props.checkList);
    }
  }, [bChecked]);

  return <input type='checkbox' checked={checked} onChange={changeChecked} />;
}

export default CheckBox;
