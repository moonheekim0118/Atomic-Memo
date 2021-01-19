import React, { useEffect, useCallback, useState, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { loadSinlgeMemoAction, trashAction } from '../../actions/memo';
import getNextId from '../../util/getNextId';
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
    const nextId = getNextId(memos, id);
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
