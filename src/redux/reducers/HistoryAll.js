const initialState = {
  data: [],
};

export const HistoryAll = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'HISTORY_ALL_REQUEST':
      return {
        ...state,
      };
    case 'HISTORY_ALL_SUCCESS':
      return {
        ...state,
        data: action.payload,
      };
    case 'HISTORY_ALL_ERROR':
      return {
        ...state,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default HistoryAll;
