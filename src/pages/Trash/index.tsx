import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { loadSinlgeTrashAction, removeAction } from '../../actions/memo';
import Templates from '../templates';
import MemoView from '../../components/organisms/MemoView';

const Trash = () => {
  let { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { trash, singleTrash } = useSelector((state) => state.memo);
  const [redirectPath, setRedirectPath] = useState<string>('');

  useEffect(() => {
    if (id) {
      setRedirectPath('');
      dispatch(loadSinlgeTrashAction(id));
    }
  }, [id]);

  const onClickRemove = useCallback(() => {
    let index = trash.findIndex((v, i) => v.id === id) || 0;
    let nextId;
    if (index === trash.length - 1) {
      nextId = trash[0]?.id || '';
    } else {
      nextId = trash[index + 1].id;
    }
    dispatch(removeAction(id ? id : trash[0].id));
    setRedirectPath(`/trash${nextId}`);
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
        />
      )}
      {!singleTrash && trash.length > 0 && (
        <MemoView type="trash" data={trash[0]} onClickRemove={onClickRemove} />
      )}
    </Templates>
  );
};

export default Trash;
