import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadSinlgeTrashAction, removeAction } from '../../actions/memo';
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

  const onClickRemove = useCallback(() => {
    dispatch(removeAction(id ? id : trash[0].id));
  }, [id]);

  return (
    <Templates type="trash" pageName="trash">
      {singleTrash && (
        <MemoView
          type="trash"
          data={singleTrash}
          onClickRemove={onClickRemove}
        />
      )}
      {!singleTrash && trash.length > 0 && (
        <MemoView type="trash" data={trash[0]} onClickRemove={onClickRemove} />
      )}
    </Templates>
  );
};

export default Trash;
