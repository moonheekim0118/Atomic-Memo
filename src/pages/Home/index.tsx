import React, { useEffect, useCallback, useState } from 'react';
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
    if (id) {
      setRedirectPath('');
      dispatch(loadSinlgeMemoAction(id));
    }
  }, [id]);

  const onClickUpdate = useCallback(() => {
    const updateId = id ? id : memos[0].id;
    setRedirectPath(`/update${updateId}`);
  }, [id, memos]);

  const onClickRemove = useCallback(() => {
    let index = memos.findIndex((v, i) => v.id === id) || 0;
    let nextId;
    if (index === memos.length - 1) {
      nextId = memos[0]?.id || '';
    } else {
      nextId = memos[index + 1].id;
    }
    dispatch(trashAction(id ? id : memos[0].id));
    setRedirectPath(`/${nextId}`);
  }, [memos, id]);

  if (redirectPath.length > 0) {
    return <Redirect to={redirectPath} />;
  }
  return (
    <Templates type="memos" pageName="Home">
      {singleMemo && (
        <MemoView
          data={singleMemo}
          type="memos"
          onClickUpdate={onClickUpdate}
          onClickRemove={onClickRemove}
        />
      )}
      {!singleMemo && memos.length > 0 && (
        <MemoView
          data={memos[0]}
          type="memos"
          onClickUpdate={onClickUpdate}
          onClickRemove={onClickRemove}
        />
      )}
    </Templates>
  );
};

export default Home;
