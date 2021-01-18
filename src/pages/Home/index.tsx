import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadSinlgeMemoAction } from '../../actions/memo';
import Templates from '../templates';
import MemoView from '../../components/organisms/MemoView';

const Home = () => {
  let { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { memos, singleMemo } = useSelector((state) => state.memo);

  useEffect(() => {
    if (id) {
      dispatch(loadSinlgeMemoAction(id));
    }
  }, [id]);

  return (
    <Templates type="memos" pageName="Home">
      {singleMemo && (
        <MemoView
          title={singleMemo.title}
          time={singleMemo.time}
          main={singleMemo.main}
        />
      )}
      {!singleMemo && memos.length > 0 && (
        <MemoView
          title={memos[0].title}
          time={memos[0].time}
          main={memos[0].main}
        />
      )}
    </Templates>
  );
};

export default Home;
