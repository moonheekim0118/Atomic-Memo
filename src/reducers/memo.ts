import * as type from '../actions/memo';

export const initialState = {
  memos: [],
  trash: [],

  singleMemo: null,
  singleTrash: null,

  loadSingleMemoLoading: false,
  loadSingleMemoDone: false,
  loadSingleMemoError: null,

  loadMemoLoading: false,
  loadMemoDone: false,
  loadMemoError: null,

  loadSingleTrashLoading: false,
  loadSingleTrashDone: false,
  loadSingleTrashError: null,

  loadTrashLoading: false,
  loadTrashDone: false,
  loadTrashError: null,

  CreateLoading: false,
  CreateDone: false,
  CreateError: null,

  UpdateLoading: false,
  UpdateDone: false,
  UPdateError: null,

  TrashLoading: false,
  TrashDone: false,
  TrashError: null,

  RemoveLoading: false,
  RemoveDone: false,
  RemoveError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.LOAD_SINGLE_MEMO_REQUEST:
      return {
        ...state,
        loadSingleMemoLoading: true,
        loadSingleMemoDone: false,
        loadSingleMemoError: null,
      };
    case type.LOAD_SINGLE_MEMO_SUCCESS:
      return {
        ...state,
        singleMemo: action.data,
        loadSingleMemoLoading: false,
        loadSingleMemoDone: true,
        loadSingleMemoError: null,
      };
    case type.LOAD_SINGLE_MEMO_FAIL:
      return {
        ...state,
        loadSingleMemoLoading: false,
        loadSingleMemoDone: false,
        loadSingleMemoError: action.error,
      };
    case type.LOAD_MEMOS_REQUEST:
      return {
        ...state,
        loadMemoLoading: true,
        loadMemoDone: false,
        loadMemoError: null,
      };
    case type.LOAD_MEMOS_SUCCESS:
      return {
        ...state,
        memos: action.data,
        loadMemoLoading: false,
        loadMemoDone: true,
        loadMemoError: null,
      };
    case type.LOAD_MEMOS_FAIL:
      return {
        ...state,
        loadMemoLoading: false,
        loadMemoDone: false,
        loadMemoError: action.error,
      };

    case type.LOAD_SINGLE_TRASH_REQUEST:
      return {
        ...state,
        loadSingleTrashLoading: true,
        loadSingleTrashDone: false,
        loadSingleTrashError: null,
      };
    case type.LOAD_SINGLE_TRASH_SUCCESS:
      return {
        ...state,
        singleTrash: action.data,
        loadSingleTrashLoading: false,
        loadSingleTrashDone: true,
        loadSingleTrashError: null,
      };
    case type.LOAD_SINGLE_TRASH_FAIL:
      return {
        ...state,
        loadSingleTrashLoading: false,
        loadSingleTrashDone: false,
        loadSingleTrashError: action.error,
      };
    case type.LOAD_TRASH_REQUEST:
      return {
        ...state,
        loadTrashLoading: true,
        loadTrashDone: false,
        loadTrashError: null,
      };

    case type.LOAD_TRASH_SUCCESS:
      return {
        ...state,
        trash: action.data,
        loadTrashLoading: false,
        loadTrashDone: true,
        loadTrashError: null,
      };

    case type.LOAD_TRASH_FAIL:
      return {
        ...state,
        loadTrashLoading: false,
        loadTrashDone: false,
        loadTrashError: action.error,
      };

    case type.CREATE_REQUEST:
      return {
        ...state,
        CreateLoading: true,
        CreateDone: false,
        CreateError: null,
      };

    case type.CREATE_SUCCESS:
      const updatedMemo = [...state.memos];
      updatedMemo.concat(action.data);
      return {
        ...state,
        memos: updatedMemo,
        CreateLoading: false,
        CreateDone: true,
        CreateError: null,
      };
    case type.CREATE_FAIL:
      return {
        ...state,
        CreateLoading: false,
        CreateDone: false,
        CreateError: action.error,
      };
    case type.UPDATE_REQUEST:
      return {
        ...state,
        UpdateLoading: true,
        UpdateDone: false,
        UpdateError: null,
      };

    case type.UPDATE_SUCCESS:
      const newMemos = [...state.memos];
      const idx_update = newMemos.findIndex((v, i) => v.id === action.data.id);
      if (idx_update) {
        newMemos[idx_update] = action.data;
      }
      return {
        ...state,
        memos: newMemos,
        UpdateLoading: false,
        UpdateDone: true,
        UpdateError: null,
      };

    case type.UPDATE_FAIL:
      return {
        ...state,
        UpdateLoading: false,
        UpdateDone: false,
        UpdateError: action.error,
      };
    case type.UPDATE_REQUEST:
      return {
        ...state,
        UpdateLoading: true,
        UpdateDone: false,
        UpdateError: null,
      };

    case type.TRASH_REQUEST:
      return {
        ...state,
        TrashLoading: false,
        TrashDone: true,
        TrashError: null,
      };

    case type.TRASH_SUCCESS:
      const trashedMemo = state.memos.find((v, i) => i === action.data);
      const filterdMemo = state.memos.filter((v, i) => i !== action.data);
      const updatedTrash = [...state.trash];
      updatedTrash.concat(trashedMemo);
      return {
        ...state,
        memos: filterdMemo,
        trash: updatedTrash,
        TrashLoading: false,
        TrashDone: true,
        TrashError: null,
      };

    case type.TRASH_FAIL:
      return {
        ...state,
        TrashLoading: false,
        TrashDone: false,
        TrashError: action.error,
      };

    case type.REMOVE_REQUEST:
      return {
        ...state,
        RemoveLoading: true,
        RemoveDone: false,
        RemoveError: null,
      };

    case type.REMOVE_SUCCESS:
      const filteredTrash = state.trash.filter((v, i) => i !== action.data);
      return {
        ...state,
        trash: filteredTrash,
        RemoveLoading: false,
        RemoveDone: true,
        RemoveError: null,
      };

    case type.REMOVE_FAIL:
      return {
        ...state,
        RemoveLoading: false,
        RemoveDone: false,
        RemoveError: action.error,
      };

    default:
      return state;
  }
};

export default reducer;
