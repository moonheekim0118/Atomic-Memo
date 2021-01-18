import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadMemoAction } from '../../actions/memo';
import Templates from '../templates';
import MemoView from '../../components/organisms/MemoView';

const Home = () => {
  let { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const memos = useSelector((state) => state.memo.memos);

  useEffect(() => {
    dispatch(loadMemoAction());
  }, []);

  return (
    <Templates datas={memos} pageName="Home">
      <MemoView />
    </Templates>
  );
};

export default Home;
