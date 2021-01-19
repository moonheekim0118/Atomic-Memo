import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import {
  loadSinlgeTrashAction,
  removeAction,
  restoreAction,
} from '../../actions/memo';
import Templates from '../templates';
import MemoView from '../../components/organisms/MemoView';

const Trash = () => {
  let { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { trash, singleTrash } = useSelector((state) => state.memo);
  const [redirectPath, setRedirectPath] = useState<string>('');

  useEffect(() => {
    setRedirectPath('');
    dispatch(loadSinlgeTrashAction(id));
  }, [id]);

  const onClickRestore = useCallback(() => {
    let index = trash.findIndex((v, i) => v.id === id) || 0;

    let nextId;
    if (index === trash.length - 1) {
      nextId = trash[0]?.id || '';
    } else {
      nextId = trash[index + 1].id;
    }
    if (trash.length === 1) {
      nextId = '';
    }
    dispatch(restoreAction(id));
    setRedirectPath(`/trash/${nextId}`);
  }, [id]);

  const onClickRemove = useCallback(() => {
    let index = trash.findIndex((v, i) => v.id === id) || 0;

    let nextId;
    if (index === trash.length - 1) {
      nextId = trash[0]?.id || '';
    } else {
      nextId = trash[index + 1].id;
    }
    if (trash.length === 1) {
      nextId = '';
    }
    dispatch(removeAction(id));
    setRedirectPath(`/trash/${nextId}`);
  }, [id]);

  if (redirectPath.length > 0) {
    return <Redirect to={redirectPath} />;
  }
  return (
    <Templates type="trash" pageName="trash">
      {singleTrash && (
        <MemoView
          type="trash"
          data={singleTrash}
          onClickRemove={onClickRemove}
          onClickRestore={onClickRestore}
        />
      )}
    </Templates>
  );
};

export default Trash;
