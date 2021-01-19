import { all, fork, takeLatest, put, call, take } from 'redux-saga/effects';
import formatTime from '../util/formatTime';
import * as type from '../actions/memo';
import rsf from '../firebase';

function* loadSingleMemo(action) {
  try {
    const snapshot = yield call(
      rsf.firestore.getDocument,
      `memos/${action.data}`
    );
    const data = snapshot.data();
    data.time = formatTime(data.time.seconds);
    data.id = snapshot.id;
    yield put({
      type: type.LOAD_SINGLE_MEMO_SUCCESS,
      data,
    });
  } catch (error) {
    yield put({
      type: type.LOAD_SINGLE_MEMO_FAIL,
      error: error || '다시 시도해주세요',
    });
  }
}

function* loadMemos() {
  try {
    const snapshot = yield call(rsf.firestore.getCollection, 'memos');
    let datas = [];
    snapshot.forEach((data) => {
      const refinedData = data.data();
      refinedData.time = formatTime(refinedData.time.seconds);
      refinedData.id = data.id;
      datas.push(refinedData);
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

function* loadSingleTrash(action) {
  try {
    const snapshot = yield call(
      rsf.firestore.getDocument,
      `trash/${action.data}`
    );
    const data = snapshot.data();
    data.time = formatTime(data.time.seconds);
    yield put({
      type: type.LOAD_SINGLE_TRASH_SUCCESS,
      data,
    });
  } catch (error) {
    yield put({
      type: type.LOAD_SINGLE_TRASH_FAIL,
      error: error || '다시 시도해주세요',
    });
  }
}

function* loadTrash() {
  try {
    const snapshot = yield call(rsf.firestore.getCollection, 'trash');
    let datas = [];
    snapshot.forEach((data) => {
      const refinedData = data.data();
      refinedData.time = formatTime(refinedData.time.seconds);
      datas.push(refinedData);
    });

    yield put({
      type: type.LOAD_TRASH_SUCCESS,
      data: datas,
    });
  } catch (error) {
    yield put({
      type: type.LOAD_TRASH_FAIL,
      error: error || '다시 시도해주세요',
    });
  }
}

function* createMemo(action) {
  try {
    yield call(rsf.firestore.addDocument, 'memos', action.data);
    yield put({
      type: type.CREATE_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: type.CREATE_FAIL,
      error: error || '다시 시도해주세요',
    });
  }
}

function* updateMemo(action) {
  try {
    yield call(
      rsf.firestore.updateDocument,
      `memos/${action.data.id}`,
      'title',
      action.data.title,
      'main',
      action.data.main,
      'kind',
      action.data.kind,
      'time',
      action.data.time
    );
    yield put({
      type: type.UPDATE_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: type.UPDATE_FAIL,
      error: error || '다시 시도해주세요',
    });
  }
}

function* trashMemo(action) {
  try {
    // action.data === id
    // document 찾기 -> trash 에 저장 -> memos 로부터 삭제
    const snapshot = yield call(
      rsf.firestore.getDocument,
      `memos/${action.data}`
    );
    const document = snapshot.data();
    yield call(rsf.firestore.addDocument, 'trash', document);
    yield call(rsf.firestore.deleteDocument, `memos/${action.data}`);

    yield put({
      type: type.TRASH_SUCCESS,
      data: document,
    });
  } catch (error) {
    yield put({
      type: type.TRASH_FAIL,
      error: error || '다시 시도해주세요',
    });
  }
}

function* removeMemo(action) {
  try {
    yield call(rsf.firestore.deleteDocument, `trash/${action.data}`);
    yield put({
      type: type.REMOVE_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: type.REMOVE_FAIL,
      error: error || '다시 시도해주세요',
    });
  }
}

function* watchLoadSingleMemo() {
  yield takeLatest(type.LOAD_SINGLE_MEMO_REQUEST, loadSingleMemo);
}

function* watchLoadMemos() {
  yield takeLatest(type.LOAD_MEMOS_REQUEST, loadMemos);
}

function* watchLoadSingleTrash() {
  yield takeLatest(type.LOAD_SINGLE_TRASH_REQUEST, loadSingleTrash);
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
    fork(watchLoadSingleMemo),
    fork(watchLoadMemos),
    fork(watchLoadSingleTrash),
    fork(watchLoadTrash),
    fork(watchCreate),
    fork(watchUpdate),
    fork(watchTrash),
    fork(watchRemove),
  ]);
}
