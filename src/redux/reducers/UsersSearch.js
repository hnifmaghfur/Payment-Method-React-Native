const initialState = {
  data: [],
  loading: false,
};

export const UsersSearch = (state = initialState, action = {}) => {
  switch (action.type) {
    case "USER_SEARCH_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "USER_SEARCH_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "USER_SEARCH_ERROR":
      return {
        ...state,
        loading: false,
        isLogin: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default UsersSearch;
