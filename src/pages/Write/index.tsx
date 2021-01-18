import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Templates from '../templates';
import { loadMemoAction } from '../../actions/memo';
import MemoEditor from '../../components/organisms/MemoEditor';

const Write = () => {
  const dispatch = useDispatch();
  const memos = useSelector((state) => state.memo.memos);

  useEffect(() => {
    if (memos.length === 0) {
      dispatch(loadMemoAction());
    }
  }, []);

  return (
    <Templates type="memos" pageName="Write">
      <MemoEditor />
    </Templates>
  );
};

export default Write;
