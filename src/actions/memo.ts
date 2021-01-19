export const LOAD_SINGLE_MEMO_REQUEST = 'LOAD_SINGLE_MEMO_REQUEST';
export const LOAD_SINGLE_MEMO_SUCCESS = 'LOAD_SINGLE_MEMO_SUCCESS';
export const LOAD_SINGLE_MEMO_FAIL = 'LOAD_SINGLE_MEMO_FAIL';

export const LOAD_MEMOS_REQUEST = 'LOAD_MEMOS_REQUEST';
export const LOAD_MEMOS_SUCCESS = 'LOAD_MEMOS_SUCCESS';
export const LOAD_MEMOS_FAIL = 'LOAD_MEMOS_FAIL';

export const LOAD_SINGLE_TRASH_REQUEST = 'LOAD_SINGLE_TRASH_REQUEST';
export const LOAD_SINGLE_TRASH_SUCCESS = 'LOAD_SINGLE_TRASH_SUCCESS';
export const LOAD_SINGLE_TRASH_FAIL = 'LOAD_SINGLE_TRASH_FAIL';

export const LOAD_TRASH_REQUEST = 'LOAD_TRASH_REQUEST';
export const LOAD_TRASH_SUCCESS = 'LOAD_TRASH_SUCCESS';
export const LOAD_TRASH_FAIL = 'LOAD_TRASH_FAIL';

export const CREATE_REQUEST = 'CREATE_REQUEST';
export const CREATE_SUCCESS = 'CREATE_SUCCESS';
export const CREATE_FAIL = 'CREATE_FAIL';

export const UPDATE_REQUEST = 'UPDATE_REQUEST';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_FAIL = 'UPDATE_FAIL';

export const TRASH_REQUEST = 'TRASH_REQUEST';
export const TRASH_SUCCESS = 'TRASH_SUCCESS';
export const TRASH_FAIL = 'TRASH_FAIL';

export const REMOVE_REQUEST = 'REMOVE_REQUEST';
export const REMOVE_SUCCESS = 'REMOVE_SUCCESS';
export const REMOVE_FAIL = 'REMOVE_FAIL';

export const RESTORE_REQUEST = 'RESTORE_REQUEST';
export const RESTORE_SUCCESS = 'RESTORE_SUCCESS';
export const RESTORE_FAIL = 'RESTORE_FAIL';

export const loadSinlgeMemoAction = (data) => {
  return { type: LOAD_SINGLE_MEMO_REQUEST, data };
};

export const loadMemoAction = () => {
  return { type: LOAD_MEMOS_REQUEST };
};

export const loadSinlgeTrashAction = (data) => {
  return { type: LOAD_SINGLE_TRASH_REQUEST, data };
};

export const loadTrashAction = () => {
  return { type: LOAD_TRASH_REQUEST };
};

export const createAction = (data) => {
  return { type: CREATE_REQUEST, data };
};

export const updateAction = (data) => {
  return { type: UPDATE_REQUEST, data };
};

export const trashAction = (data) => {
  return { type: TRASH_REQUEST, data };
};

export const removeAction = (data) => {
  return { type: REMOVE_REQUEST, data };
};

export const restoreAction = (data) => {
  return { type: RESTORE_REQUEST, data };
};
