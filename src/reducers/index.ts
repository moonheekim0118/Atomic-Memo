import { combineReducers } from 'redux';
import memo from './memo';

const rootReducer = (state, action) => {
  switch (action.type) {
    default: {
      const combineReducer = combineReducers({ memo });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
