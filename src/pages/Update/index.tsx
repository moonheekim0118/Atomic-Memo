import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadSinlgeMemoAction } from '../../actions/memo';
import Templates from '../templates';
import MemoEditor from '../../components/organisms/MemoEditor';

const Update = () => {
  let { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const singleMemo = useSelector((state) => state.memo.singleMemo);

  useEffect(() => {
    if (id) {
      dispatch(loadSinlgeMemoAction(id));
    }
  }, []);

  return (
    <Templates pageName="Update" type="memos">
      {singleMemo && <MemoEditor exData={singleMemo} />}
    </Templates>
  );
};

export default Update;
