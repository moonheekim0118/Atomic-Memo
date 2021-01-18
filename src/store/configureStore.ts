import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from '../sagas'; // 작성한 사가
import rootReducer from '../reducers'; // 작성한 리듀서

const sagaMiddleware = createSagaMiddleware(); // 사가 미들웨어 생성

const configureStore = () => {
  const MiddleWare =
    process.env.NODE_ENV === 'production'
      ? applyMiddleware(sagaMiddleware)
      : composeWithDevTools(applyMiddleware(sagaMiddleware));

  const store = createStore(rootReducer, MiddleWare);

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
