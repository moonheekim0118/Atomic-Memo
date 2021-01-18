import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadSinlgeTrashAction } from '../../actions/memo';
import Templates from '../templates';
import MemoView from '../../components/organisms/MemoView';

const Trash = () => {
  let { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { trash, singleTrash } = useSelector((state) => state.memo);

  useEffect(() => {
    if (id) {
      dispatch(loadSinlgeTrashAction(id));
    }
  }, [id]);

  return (
    <Templates type="trash" pageName="trash">
      {singleTrash && (
        <MemoView title={trash.title} time={trash.time} main={trash.main} />
      )}
      {!singleTrash && trash.length > 0 && (
        <MemoView
          title={singleTrash[0].title}
          time={singleTrash[0].time}
          main={singleTrash[0].main}
        />
      )}
    </Templates>
  );
};

export default Trash;
