import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { loadSinlgeMemoAction } from '../../actions/memo';
import Templates from '../templates';
import MemoView from '../../components/organisms/MemoView';

const Home = () => {
  let { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { memos, singleMemo } = useSelector((state) => state.memo);
  const [redirect, setRedirect] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      dispatch(loadSinlgeMemoAction(id));
    }
  }, [id]);

  const onClickUpdate = useCallback(() => {
    console.log('ㅎ머고');
    setRedirect(true);
  }, []);

  if (redirect) {
    return <Redirect to={id ? `/update${id}` : `/update${memos[0].id}`} />;
  }
  return (
    <Templates type="memos" pageName="Home">
      {singleMemo && (
        <MemoView data={singleMemo} onClickUpdate={onClickUpdate} />
      )}
      {!singleMemo && memos.length > 0 && (
        <MemoView data={memos[0]} onClickUpdate={onClickUpdate} />
      )}
    </Templates>
  );
};

export default Home;
