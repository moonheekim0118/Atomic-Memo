import { all, fork, takeLatest, put, call } from 'redux-saga/effects';
import * as type from '../actions/memo';
import rsf from '../firebase';

function* loadMemos() {
  try {
    const snapshot = yield call(rsf.firestore.getCollection, 'memos');
    let datas;
    snapshot.forEach((data) => {
      datas = {
        ...datas,
        [data.id]: data.data(),
      };
    });

    yield put({
      type: type.LOAD_MEMOS_SUCCESS,
      data: datas,
    });
  } catch (error) {
    yield put({
      type: type.LOAD_MEMOS_FAIL,
      error: error || '다시 시도해주세요',
    });
  }
}

function* loadTrash(action) {
  try {
  } catch (error) {}
}

function* createMemo(action) {
  try {
  } catch (error) {}
}

function* updateMemo(action) {
  try {
  } catch (error) {}
}

function* trashMemo(action) {
  try {
  } catch (error) {}
}

function* removeMemo(action) {
  try {
  } catch (error) {}
}

function* watchLoadMemos() {
  yield takeLatest(type.LOAD_MEMOS_REQUEST, loadMemos);
}

function* watchLoadTrash() {
  yield takeLatest(type.LOAD_MEMOS_REQUEST, loadTrash);
}

function* watchCreate() {
  yield takeLatest(type.CREATE_REQUEST, createMemo);
}

function* watchUpdate() {
  yield takeLatest(type.UPDATE_REQUEST, updateMemo);
}

function* watchTrash() {
  yield takeLatest(type.TRASH_REQUEST, trashMemo);
}

function* watchRemove() {
  yield takeLatest(type.REMOVE_REQUEST, removeMemo);
}

export default function* memoSaga() {
  yield all([
    fork(watchLoadMemos),
    fork(watchLoadTrash),
    fork(watchCreate),
    fork(watchUpdate),
    fork(watchTrash),
    fork(watchRemove),
  ]);
}
