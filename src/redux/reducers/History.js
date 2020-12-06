const initialState = {
  data: [],
};

export const History = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'HISTORY_REQUEST':
      return {
        ...state,
      };
    case 'HISTORY_SUCCESS':
      return {
        ...state,
        data: action.payload,
      };
    case 'PRE_HISTORY_SUCCESS':
      return {
        ...state,
        data: action.payload,
      };
    case 'HISTORY_ERROR':
      return {
        ...state,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default History;
