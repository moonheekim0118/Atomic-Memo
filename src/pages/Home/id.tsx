import React, { useEffect, useCallback, useState, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { loadSinlgeMemoAction, trashAction } from '../../actions/memo';
import Templates from '../templates';
import MemoView from '../../components/organisms/MemoView';

const Home = () => {
  let { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { memos, singleMemo } = useSelector((state) => state.memo);
  const [redirectPath, setRedirectPath] = useState<string>('');

  useEffect(() => {
    setRedirectPath('');
    dispatch(loadSinlgeMemoAction(id));
  }, [id]);

  const onClickUpdate = useCallback(() => {
    setRedirectPath(`/update/${id}`);
  }, [id, memos]);

  const onClickRemove = useCallback(() => {
    let index = memos.findIndex((v, i) => v.id === id) || 0;
    let nextId;
    if (index === memos.length - 1) {
      nextId = memos[0]?.id || '';
    } else {
      nextId = memos[index + 1].id;
    }
    if (memos.length === 1) {
      nextId = '';
    }
    dispatch(trashAction(id ? id : memos[0].id));
    setRedirectPath(`/${nextId}`);
  }, [memos, id]);

  if (redirectPath.length > 0) {
    return <Redirect to={redirectPath} />;
  }
  return (
    <Templates type="memos" pageName="Home">
      {singleMemo ? (
        <MemoView
          data={singleMemo}
          type="memos"
          onClickUpdate={onClickUpdate}
          onClickRemove={onClickRemove}
        />
      ) : (
        <div>~로딩중~</div>
      )}
    </Templates>
  );
};

export default Home;
